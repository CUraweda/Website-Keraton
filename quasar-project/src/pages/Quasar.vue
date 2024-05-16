<template>
    <q-page>
      <q-page-container>
        <q-card class="q-ma-md" style="max-width: 400px;">
          <q-card-section>
            <div class="text-h6">Selamat datang di Aplikasi Quasar</div>
          </q-card-section>
          
          <q-card-section>
            <q-input filled v-model="username" label="Username" />
          </q-card-section>
          
          <q-card-section>
            <q-input filled v-model="password" label="Password" type="password" />
          </q-card-section>
          
          <q-card-section>
            <q-btn color="primary" label="Masuk" @click="login" />
          </q-card-section>
        </q-card>
      </q-page-container>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Logika autentikasi bisa dimasukkan di sini
        console.log('Username:', this.username);
        console.log('Password:', this.password);
      }
    }
  }
  </script>
  