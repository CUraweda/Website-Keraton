<template>
  <navbar />
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
      <template v-slot:body-selection="scope" >
        <q-btn v-model="scope.selected" v-for="id in 7" :key="id" color="positive" :label="'Edit ' + id" :href="'#/admin/add/' + id"/>
      </template>
      </q-table>
  </div>
</template>

<script>
import navbar from "src/components/NavBar.vue";
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
    }}];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

export default {
  components: { navbar },
  setup() {
    return {
      columns,
      rows: ref([])
    };
  },
  mounted(){
    this.fetchData()
  },
  methods:{
    async fetchData(){
      try{
        const response = await this.$api.get('/content')
        if(response.status != 200) throw Error('Error Occured')
        this.rows = response.data.data.map((content, i) => ({
          id: content.id,
          nomor: i + 1,
          sectionName: content.sectionName,
          pageName: content.page.name,
          updatedAt: this.convertISOToReadableDate(content.updatedAt),
            }))
      }catch(err){
        console.log(err)
      }
    },
    convertISOToReadableDate(isoDate) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const date = new Date(isoDate);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
  }
 };
</script>

<style></style>
