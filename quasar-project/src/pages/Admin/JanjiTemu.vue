<template>
  <div>
    <navbar :isAdmin="true" />
    <div class="q-mx-md q-mt-md">
      <div class="text-h6 text-semibold">Edit Jadwal Janji Temu</div>
      <div>Ubah dan atur Jadwal Janji Temu di halaman ini</div>
      <div>
        <q-btn
          color="positive"
          :label="'Buat Jadwal'"
          no-caps
          @click="openDialog()"
        />
        <q-btn
          color="positive"
          :label="'Atur Paket'"
          no-caps
          class="q-ma-md"
          @click="openListbook()"
        />
        <!-- <q-btn
          color="positive"
          label="News"
          href="#/admin/news"
          class="q-mb-md"
        />
        <q-btn
          color="positive"
          label="Event"
          href="#/admin/event"
          class="q-mb-md"
        /> -->
        <q-table :rows="rows" :columns="columns" row-key="name" class="q-mt-md">
          <template v-slot:body-cell-Action="scope">
            <div class="flex q-pa-sm q-gutter-sm items-center justify-center">
              <q-btn
                color="positive"
                :label="'Edit'"
                no-caps
                @click="openEditDialog(scope.row)"
              />
              <q-btn
                color="positive"
                no-caps
                :label="'Delete'"
                @click="deleteData(scope.row)"
              />
            </div>
          </template>
        </q-table>
        <q-dialog v-model="editDialog">
          <q-card>
            <q-card-section>
              <div class="text-h6">
                Edit Kesediaan tanggal {{ dateInputLabel.split(" ")[0] }}
              </div>
            </q-card-section>

            <q-card-section>
              <q-toggle
                v-model="dateInputChecked"
                checked-icon="check"
                color="red"
                :label="dateInputChecked ? 'Active' : 'Disable'"
                unchecked-icon="clear"
              />
              <q-input
                outlined
                dense
                v-model="dateInputLabel"
                label="Tanggal Pesanan"
                class="q-mt-xs"
                style="width: 100%"
              >
                <template v-slot:append>
                  <q-icon name="event" color="orange" class="cursor-pointer">
                    <q-popup-proxy
                      style="display: flex; gap: 0.5rem; width: fit-content"
                    >
                      <q-date
                        v-model="dateInput"
                        style="width: 200px; padding: 0.5rem"
                        mask="YYYY-MM-DD"
                      />
                      <q-time
                        v-model="dateInputtime"
                        mask="HH:mm"
                        style="width: 200px; padding: 0.5rem"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                flat
                label="Cancel"
                color="primary"
                no-caps
                v-close-popup
              />
              <q-btn
                flat
                label="Save"
                color="primary"
                no-caps
                @click="saveChanges"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
        <q-dialog v-model="listBook">
          <q-card class="q-pa-md">
            <q-list>
              <q-item-label header>
                <div v-for="item in dataListBook" :key="item.id">
                  <h6>{{ item.name }}</h6>

                  <q-list separator>
                    <q-item v-for="order in item.orders" :key="order.id">
                      <q-item-section avatar>
                        <q-img :src="order.image" :alt="order.name" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>
                          <q-btn flat icon="edit" @click="toggleEdit(order)" />
                          {{ order.name }}
                        </q-item-label>
                        <q-item-label caption>{{ order.desc }}</q-item-label>
                        <q-item-label caption
                          >Price: {{ order.price }}</q-item-label
                        >

                        <!-- Tombol Edit -->

                        <!-- Tampilkan q-toggle saat sedang edit -->
                        <div v-if="order.isEditing">
                          <q-toggle
                            v-model="order.is_janji"
                            label="Is Janji"
                            color="primary"
                            @update:model-value="updateOrder(order)"
                          />
                          <q-toggle
                            v-model="order.needed_for_janji"
                            label="Needed for Janji"
                            color="primary"
                            @update:model-value="updateOrder(order)"
                          />
                        </div>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </q-item-label>
            </q-list>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { verifyToken } from "src/auth/auth";
import navbar from "../../components/NavbarNew.vue";
import Swal from "sweetalert2";
import { ref } from "vue";

const columns = [
  {
    name: "Nomor",
    align: "center",
    label: "No",
    field: "nomor",
  },
  {
    name: "Tanggal",
    align: "center",
    label: "Tanggal",
    field: "datetime",
  },
  {
    name: "name",
    align: "center",
    label: "Nama",
    field: "booker_name",
  },
  {
    name: "email",
    align: "center",
    label: "Email",
    field: "booker_email",
  },
  {
    name: "phone",
    align: "center",
    label: "No Hp",
    field: "booker_phone",
  },
  {
    name: "in_use",
    align: "center",
    label: "Terpakai",
    field: "in_use",
  },
  {
    name: "Action",
    align: "center",
    label: "Action",
    field: "action",
  },
];

export default {
  components: { navbar },
  setup() {
    return {
      columns,
      rows: ref([]),
    };
  },
  data() {
    return {
      isAdmin: null,
      selectedRow: ref(null),
      editDialog: ref(false),
      dateInputLabel: ref(),
      dateInput: ref(),
      dateInputtime: ref(),
      dateInputChecked: ref(false),
      idJadwal: ref(),
      dataListBook: ref([]),
      listBook: ref(false),
    };
  },
  async mounted() {
    this.fetchData();
    this.isAdmin = (await verifyToken()).isAdmin;
  },
  watch: {
    dateInput(newVal) {
      this.dateInputLabel = newVal;
    },
    dateInputtime(newVal) {
      this.dateInputLabel = this.dateInput + " " + newVal;
    },
  },
  methods: {
    openDialog() {
      this.editDialog = true;
      this.dateInput = "";
      this.dateInputLabel = "";
      this.dateInputChecked = false;
    },
    openListbook() {
      this.fetchlistBook().then(() => {
        this.listBook = true;
      });
    },
    openEditDialog(row) {
      this.selectedRow = { ...row }; // Clone row to avoid mutating the original data
      console.log(row);
      this.dateInput = row.time.split("T")[0];
      this.dateInputtime = row.time.split("T")[1].substring(0, 5);
      this.dateInputLabel = row.time; // Update label dengan nilai yang dipilih
      this.editDialog = true;
      this.idJadwal = row.id;
      this.dateInputChecked = row.disabled;
    },
    saveChanges() {
      console.log("Changes saved:", {
        dateInputLabel: this.dateInputLabel.value,
        dateInput: this.dateInput.value,
        dateInputChecked: this.dateInputChecked.value,
      });
      if (!this.idJadwal) {
        this.createData();
      } else {
        this.updateData(this.idJadwal);
      }
      this.editDialog = false;
    },
    async createData() {
      try {
        // const formattedDate = this.dateInput.replace(" ", "T") + ":00.000Z";
        const formattedDate = this.dateInput + " " + this.dateInputtime;

        const response = await this.$api.post("/availability-time", {
          datetime: formattedDate.replace(" ", "T") + ":00.000Z",
          // dateInputChecked: this.dateInputChecked,
        });
        if (response.status != 200) throw Error("error");
        this.fetchData();
        Swal.fire("Success", response.data.message, "success");
        this.editDialog = false;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async updateData(id) {
      try {
        // const formattedDate = this.dateInput.replace(" ", "T") + ":00.000Z";
        const formattedDate = this.dateInput + " " + this.dateInputtime;

        const response = await this.$api.put(`/availability-time/${id}`, {
          datetime: formattedDate.replace(" ", "T") + ":00.000Z",
          // dateInputChecked: this.dateInputChecked,
        });
        if (response.status != 200) throw Error("error");
        this.fetchData();
        this.showNotif(response.data.message, "success");
        this.editDialog = false;
        this.idJadwal = null;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchData() {
      try {
        const response = await this.$api.get("/availability-time");
        if (response.status != 200) throw Error("Error Occured");
        console.log(response.data); // Check the fetched data

        this.rows = response.data.data.map((content, i) => {
          return {
            nomor: i + 1,
            id: content.id,
            datetime:
              "Tanggal " +
              content.datetime.split("T")[0] +
              " Pukul " +
              content.datetime.split("T")[1].split(".")[0],
            time: content.datetime,
            booker_name: content.BookTimetable.map(
              (item) => item.booker_name
            ) || ["-"],
            booker_email: content.BookTimetable.map(
              (item) => item.booker_email
            ) || ["-"],
            booker_phone: content.BookTimetable.map(
              (item) => item.booker_phone
            ) || ["-"],
            in_use: content.in_use ? "Ya" : "Tidak",
          };
        });
      } catch (err) {
        console.log(err);
      }
    },

    async fetchlistBook() {
      try {
        const response = await this.$api.get(`/items/booking`);
        this.dataListBook = response.data.data.map((item) => ({
          id: item.id,
          name: item.name,
          minimumUnits: item.minimumUnits,
          orderTypeId: item.orderTypeId,
          orders: item.orders.map((order) => ({
            id: order.id,
            name: order.name,
            desc: order.desc,
            price: order.price,
            units: order.units,
            image: order.image,
            is_janji: order.is_janji,
            needed_for_janji: order.needed_for_janji,
            isEditing: false, // properti baru untuk melacak mode edit
          })),
        }));
      } catch (error) {
        console.error(error);
      }
    },
    async updateOrder(order) {
      try {
        const payload = {
          id: order.id,
          is_janji: order.is_janji,
          needed_for_janji: order.needed_for_janji,
        };
        await this.$api.post(`/items/update`, payload);
        order.isEditing = !order.isEditing;

        this.listBook = false;
        Swal.fire("Success!", "updated successfully!", "success");
      } catch (error) {
        this.listBook = false;
        Swal.fire("Error", "Failed to update", "error");
        console.error(error);
      }
    },
    toggleEdit(order) {
      // Menyalakan/mematikan mode edit
      order.isEditing = !order.isEditing;
    },
    async deleteData(data) {
      const id = data.id;
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      // Check if the user clicked the "Yes" button
      if (result.isConfirmed) {
        try {
          console.log(data);
          const response = await this.$api.delete(`/availability-time/${id}`);
          if (response.status !== 200) throw new Error(response.data.message);
          this.fetchData();
          this.showNotif(response.data.message, "success");
        } catch (err) {
          this.showNotif(
            err.response ? err.response.data.message : err.message,
            "error"
          );
          console.log(err);
        }
      } else {
        this.showNotif("Deletion canceled", "info"); // Optional: Notify that deletion was canceled
      }
    },
    async verifyAdmin() {
      try {
        this.isAdmin = (await verifyToken()).isAdmin;

        if (!this.isAdmin) {
          return this.$router.replace("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
    convertISOToReadableDate(isoDate) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const date = new Date(isoDate);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    },
  },
};
</script>

<style></style>
