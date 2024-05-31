<template>
    <div v-for="(data, i) in newsDatas" :key="i">
        <h1>{{ data.name }}</h1>
    </div>
    <div>
      <navbar />
      <div style="margin-top: 150px" class="q-px-xl">
        <div class="text-h6 text-semibold">Edit Berita Terkini</div>
        <div>Ubah dan atur berita di halaman beranda web</div>
        <div class="q-mt-xl">
          <q-btn
            color="positive"
            label="Home"
            href="#/admin/home"
            class="q-mb-md"
          />
          <q-btn
            color="positive"
            label="Event"
            href="#/admin/event"
            class="q-mb-md"
          />
          <q-table :rows="rows" :columns="columns" row-key="id">
            <template v-slot:body-cell-action="scope">
              <q-btn
                color="positive"
                :label="'Edit '"
                :href="'#/admin/add/' + scope.row.id"
                @click="scope.selected = scope.row.id"
              />
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { verifyToken } from 'src/auth/auth';
  import navbar from '..src/components/NavBarAdmin.vue';
  
  const columns = [
    { name: 'nomor', align: 'center', label: 'Id', field: 'nomor' },
    { name: 'title', align: 'center', label: 'Title', field: 'title', sortable: true },
    { name: 'desc', align: 'center', label: 'Description', field: 'desc', sortable: true },
    { name: 'updatedAt', align: 'center', label: 'Updated At', field: 'updatedAt', sortable: true },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  
  const rows = ref([]);
  
  const fetchData = async () => {
    try {
      const response = await fetch('/news');  // pastikan URL ini sesuai dengan backend Anda
      if (response.status !== 200) throw new Error('Error Occurred');
      const data = await response.json();
      rows.value = data.map((news, i) => ({
        id: news.id,
        nomor: i + 1,
        title: news.title,
        desc: news.desc,
        updatedAt: convertISOToReadableDate(news.updatedAt),
      }));
    } catch (err) {
      console.log(err);
    }
  };
  
  const convertISOToReadableDate = (isoDate) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  
  const isAdmin = ref(false);
  
  onMounted(async () => {
    try {
      const token = await verifyToken();
      isAdmin.value = token.isAdmin;
      if (!isAdmin.value) {
        const router = useRouter();
        router.replace('/');
      } else {
        fetchData();
      }
    } catch (error) {
      console.log(error);
      const router = useRouter();
      router.replace('/');
    }
  });
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
  }
  .container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  .form-group input, .form-group textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  .form-group textarea {
    resize: vertical;
  }
  .form-group button {
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .form-group button:hover {
    background-color: #0056b3;
  }
  </style>