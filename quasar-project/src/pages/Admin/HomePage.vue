<template>
  <div>
    <navbar :isAdmin="true" />
    <div class="q-mx-md q-mt-md">
      <div class="text-h6 text-semibold">Edit Konten Dashboard</div>
      <div>Ubah dan atur konten di halaman beranda web</div>
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
                :href="'/admin/add/' + scope.row.id"
                @click="scope.selected = scope.row.id"
              />
            </div>
          </template>
        </q-table>
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
    name: "Section",
    align: "center",
    label: "Section ",
    field: "sectionName",
  },
  {
    name: "Page",
    align: "center",
    label: "Page",
    field: "pageName",
  },
  {
    name: "Updated At",
    align: "center",
    label: "Updated At",
    field: "updatedAt",
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
    };
  },
  async mounted() {
    this.fetchData();
    this.isAdmin = (await verifyToken()).isAdmin;
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
