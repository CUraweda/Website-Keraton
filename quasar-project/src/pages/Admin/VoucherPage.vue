<template>
  <div>
    <navbar :isAdmin="true" />
    <div class="q-mx-md q-mt-md">
      <div class="text-h6 text-semibold">Atur Kode Voucher</div>
      <div>Ubah dan atur voucher untuk pembelian tiket</div>
      <div class="flex justify-end">
        <q-btn
          icon="add"
          color="green"
          no-caps
          class="q-my-md"
          @click="openDialog(null, 'create')"
        />
      </div>
      <q-table :rows="rows" :columns="columns" row-key="name" class="q-mt-md">
        <template v-slot:body-cell-Action="scope">
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 1rem;
            "
          >
            <q-btn
              no-caps
              color="positive"
              label="Edit"
              @click="openDialog(scope.row, 'edit')"
            />
            <q-btn
              no-caps
              color="negative"
              label="Hapus"
              @click="handleDelete(scope.row.id)"
            />
          </div>
        </template>
      </q-table>

      <q-dialog v-model="isDialogOpen">
        <q-card>
          <q-card-section>
            <div class="text-h6">
              {{ isEditMode ? "Edit Voucher" : "Tambah Voucher" }}
            </div>
          </q-card-section>
          <q-card-section>
            <q-input
              upper-case
              v-model="code"
              label="Kode Voucher"
              filled
              dense
              class="uppercase q-mb-sm"
              mask="AAAAAAAAAAAAAAAA"
            />
            <q-input
              v-model.number="discount_price"
              label="Harga Diskon"
              type="number"
              filled
              dense
              class="q-mb-sm"
            />
            <q-input
              v-model="description"
              label="Deskripsi"
              type="textarea"
              filled
              dense
            />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              no-caps
              label="Batal"
              color="negative"
              @click="closeDialog"
            />
            <q-btn
              no-caps
              label="Simpan"
              color="primary"
              @click="handleSubmit"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import navbar from "../../components/NavbarNew.vue";
import SimpleNotify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

const columns = [
  { name: "Nomor", align: "center", label: "No", field: "nomor" },
  {
    name: "code_voucher",
    align: "center",
    label: "Kode Voucher",
    field: "code_voucher",
  },
  {
    name: "discount",
    align: "center",
    label: "Harga Diskon",
    field: "discount",
  },
  {
    name: "description",
    align: "center",
    label: "Deskripsi",
    field: "description",
  },
  { name: "status", align: "center", label: "Status", field: "status" },
  { name: "Action", align: "center", label: "Action", field: "action" },
];

export default {
  components: { navbar },
  setup() {
    return {
      rows: ref([]),
      columns,
    };
  },
  data() {
    return {
      isDialogOpen: false,
      isEditMode: false,
      selectedId: null,
      code: "",
      discount_price: null,
      description: "",
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$api.get("/discount");
        this.rows = response.data.data.map((item, i) => ({
          id: item.id,
          nomor: i + 1,
          code_voucher: item.code,
          discount: Number(item.discount_price),
          description: item.description,
          status: item.is_active ? "Aktif" : "Tidak Aktif",
        }));
      } catch (error) {
        console.error(error);
      }
    },
    openDialog(row = null, type) {
      if (type == "edit") {
        this.isEditMode = true;
        this.selectedId = row.id;
        this.code = row.code_voucher;
        this.discount_price = row.discount;
        this.description = row.description;
      } else {
        this.isEditMode = false;
        this.clearForm();
      }
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
      this.clearForm();
    },
    clearForm() {
      this.code = "";
      this.discount_price = null;
      this.description = "";
      this.selectedId = null;
    },
    async handleSubmit() {
      const data = {
        code: this.code,
        discount_price: Number(this.discount_price),
        description: this.description,
        is_active: true,
        is_deleted: false,
      };

      try {
        if (this.isEditMode) {
          const response = await this.$api.put(
            `/discount/${this.selectedId}`,
            data
          );
          this.showNotif(response.data.message, "success");
        } else {
          const response = await this.$api.post("/discount", data);
          this.showNotif(response.data.message, "success");
        }
        this.fetchData();
        this.closeDialog();
      } catch (err) {
        this.showNotif(
          err.response ? err.response.data.message : err.message,
          "error"
        );
        console.log(err);
      }
    },
    async handleDelete(id) {
      try {
        const response = await this.$api.delete(`/discount/${id}`);
        this.showNotif(response.data.message, "success");
        this.fetchData();
      } catch (err) {
        this.showNotif(
          err.response ? err.response.data.message : err.message,
          "error"
        );
        console.log(err);
      }
    },
    showNotif(msg, status) {
      const myNotify = new SimpleNotify({
        text: `${msg}`,
        status: `${status}`,
        autoclose: false,
      });
      setTimeout(() => {
        myNotify.close();
      }, 3000);
    },
  },
  async mounted() {
    this.fetchData();
  },
};
</script>
