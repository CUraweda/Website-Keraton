<template>
    <div id="app">
      <!-- Logo -->
      <div class="logo-container">
        <div class="logo">
          <!-- Logo Anda di sini -->
          <img src="../assets/images/logo_keraton.png" alt="Logo" />
        </div>
      </div>
      <!-- Tombol Toggle Sidebar -->
      <div class="sidebar-toggle" @click="toggleSidebar" v-show="!isSidebarOpen">☰</div>
      
      <!-- Sidebar -->
      <div class="sidebar" :class="{ 'active': isSidebarOpen }">
        <!-- Tombol Tutup Menu -->
        <div class="close-menu" @click="toggleSidebar" v-show="isSidebarOpen">x</div>
        <ul>
          <li>Beranda</li>
          <li @click="toggleDropdown('sejarah')">Sejarah 
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
            <!-- Dropdown Sejarah -->
            <ul v-if="dropdown === 'sejarah'">
              <li class="drop" style="font-size: 20px; font-weight: 400;">Silsilah</li>
              <li class="drop" style="font-size: 20px; font-weight: 400;">Keraton</li>
            </ul>
          </li>
          <li @click="toggleDropdown('booking')">Booking 
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
            <!-- Dropdown Booking -->
            <ul v-if="dropdown === 'booking'">
              <li class="drop" style="font-size: 20px; font-weight: 400;">Tiket Event</li>
              <li class="drop" style="font-size: 20px; font-weight: 400;">Paket Keraton</li>
            </ul>
          </li>
          <li @click="toggleDropdown('objek_wisata')">Objek Wisata 
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
            <!-- Dropdown Objek Wisata -->
            <ul v-if="dropdown === 'objek_wisata'" class="dropp">
              <li class="dropp" style="font-size: 20px; font-weight: 400;">Lotus</li>
              <li class="dropp" style="font-size: 20px; font-weight: 400;">Dalem Agung Pakungwati</li>
              <li class="dropp" style="font-size: 20px; font-weight: 400;">Museum Pusaka</li>
              <li class="dropp" style="font-size: 20px; font-weight: 400;">Keraton Kasepuhan</li>
            </ul>
          </li>
          <li>Dapatkan Tiket →</li>
        </ul>
      </div>
      
      <!-- Konten utama aplikasi di sini -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSidebarOpen: false,
        dropdown: null
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      toggleDropdown(item) {
        if (this.dropdown === item) {
          this.dropdown = null;
        } else {
          this.dropdown = item;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
  /* Gaya logo */
  .logo-container {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 998; /* Menempatkan logo di bawah sidebar */
  }
  
  .logo {
    /* Style logo */
    margin-left: 1px;
  }
  
  /* Gaya tombol toggle sidebar */
  .sidebar-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 40px; /* Lebar tombol */
    height: 40px; /* Tinggi tombol */
    background-color: #123B32; /* Warna latar belakang hijau */
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px; /* Membuat sudut tombol menjadi bentuk persegi */
    z-index: 999; /* Menempatkan tombol toggle di atas sidebar */
    padding-left: 11px;
    padding-top: 6px;
  }
  
  /* Gaya sidebar */
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background: #123B32;
    overflow: hidden;
    transition: width 0.3s ease;
    font-family: 'raleway';
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  
  .sidebar.active {
    width: 100%;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 884px;
    margin-top: 162px;
    margin-left: 82px;
  }

  .drop{
    margin-top: -115px;
    margin-left: -82px;
  }
  .dropp{
    margin-top: -73px;
    margin-left: -82px;
    height: 28px;
  }
  
  .sidebar ul li {
    padding: 15px;
    color: white;
    cursor: pointer;
    font-weight: bold; /* Membuat font menjadi tebal */
    align-items: center;
    padding-bottom: 25px;
  }

  /* Gaya tombol tutup menu */
  .close-menu {
  position: absolute;
  top: 25px;
  right: 20px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  width: 20px;
  height: 40px;
}

/* Gaya ikon panah */
.arrow-icon {
  width: 20px;
  height: 20px;
  fill: white;
  vertical-align: middle;
  margin-left: 5px;
}
</style>
