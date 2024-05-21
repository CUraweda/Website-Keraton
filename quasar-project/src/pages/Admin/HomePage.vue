<template>
  <div v-if="isAdmin">
    <navbar is-checkout-page="true" />
    <div style="margin-top: 150px" class="q-px-xl">
      <div class="text-h6 text-semibold">Edit Konten Dashboard</div>
      <div>Ubah dan atur konten di halaman beranda web</div>
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
        class="q-mt-xl"
        selection="single"
      >
        <template v-slot:body-selection="scope">
          <div :key="scope.row.id" style="margin-bottom: 10px">
            <q-btn
              color="positive"
              :label="'Edit ' + scope.row.id"
              :href="'#/admin/add/' + scope.row.id"
              @click="scope.selected = scope.row.id"
            />
          </div>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import navbar from "src/components/NavBar.vue";
import { ref } from "vue";
import { verifyTokenAdmin } from "../../auth/auth";

const columns = [
  {
    name: "Nomor",
    align: "center",
    label: "No",
    field: "nomor",
  },
  {
    name: "Section",
    align: "center",
    label: "Section ",
    field: "sectionName",
    sortable: true,
  },
  {
    name: "Page",
    align: "center",
    label: "Page",
    field: "pageName",
    sortable: true,
  },
  {
    name: "Updated At",
    align: "center",
    label: "Updated At",
    field: "updatedAt",
    sortable: true,
  },
  {
    name: "Action",
    align: "center",
    label: "Action",
    field: "action",
    format: (val, row) => {
      return `
        <q-btn @click="handleButtonClick('${row.id}')">Klik di sini</q-btn>
      `;
    },
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
      isAdmin: false,
    };
  },
  async mounted() {
    this.fetchData();
    this.isAdmin = await verifyTokenAdmin.call(this);
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$api.get("/content");
        if (response.status != 200) throw Error("Error Occured");
        this.rows = response.data.data.map((content, i) => ({
          id: content.id,
          nomor: i + 1,
          sectionName: content.sectionName,
          pageName: content.page.name,
          updatedAt: this.convertISOToReadableDate(content.updatedAt),
        }));
      } catch (err) {
        console.log(err);
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
