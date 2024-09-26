<template>
  <div>
    <navbar :isAdmin="true" />
    <div class="q-mx-md q-mt-md">
      <div class="text-h6 text-semibold">Edit Jadwal Janji Temu</div>
      <div>Ubah dan atur Jadwal Janji Temu di halaman ini</div>
      <div>
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
            <div class="flex items-center justify-center">
              <q-btn
                color="positive"
                :label="'Edit '"
                @click="openEditDialog(scope.row)"
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
                        mask="YYYY-MM-DD HH:mm"
                      />
                      <q-time
                        v-model="dateInput"
                        mask="YYYY-MM-DD HH:mm"
                        style="width: 200px; padding: 0.5rem"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancel" color="primary" v-close-popup />
              <q-btn flat label="Save" color="primary" @click="saveChanges" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { verifyToken } from "src/auth/auth";
import navbar from "../../components/NavbarNew.vue";
import { ref } from "vue";

const columns = [
  {
    name: "Nomor",
    align: "center",
    label: "No",
    field: "nomor",
  },
  {
    name: "in_use",
    align: "center",
    label: "Terpakai",
    field: "in_use",
  },
  {
    name: "Tanggal",
    align: "center",
    label: "Tanggal",
    field: "datetime",
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
      dateInputChecked: ref(false),
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
  },
  methods: {
    openEditDialog(row) {
      this.selectedRow = { ...row }; // Clone row to avoid mutating the original data
      console.log(row);
      this.dateInput =
        row.time.split("T")[0] + " " + row.time.split("T")[1].substring(0, 5);
      this.dateInputLabel = row.time; // Update label dengan nilai yang dipilih
      this.editDialog = true;
      this.dateInputChecked = row.disabled;
    },
    saveChanges() {
      // Apply changes to the rows data
      const rowIndex = this.rows.findIndex(
        (row) => row.id === this.selectedRow.id
      );
      if (rowIndex !== -1) {
        this.rows[rowIndex] = { ...this.selectedRow };
      }
      this.editDialog = false;
      console.log(rowIndex, this.selectedRow);
    },
    async fetchData() {
      try {
        const response = await this.$api.get("/availability-time");
        if (response.status != 200) throw Error("Error Occured");
        this.rows = response.data.data.map((content, i) => ({
          // id: content.id,
          // nomor: i + 1,
          // sectionName: content.sectionName,
          // pageName: content.page.name,
          // updatedAt: this.convertISOToReadableDate(content.updatedAt),
          ...content,
          nomor: i + 1,
          datetime:
            "Tanggal " +
            content.datetime.split("T")[0] +
            " Pukul " +
            content.datetime.split("T")[1].split(".")[0],
          time: content.datetime,
        }));
      } catch (err) {
        console.log(err);
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
