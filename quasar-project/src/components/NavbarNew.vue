<template>
  <q-toolbar class="text-white background-white q-pa-sm">
    <div class="flex q-gutter-sm">
      <q-img
        src="../assets/images/logo_keraton 1.png"
        style="width: 3.5rem; height: 3.5rem"
      />
      <div class="text-black" style="width: 1rem">
        KERATON KESEPUHAN CIREBON
      </div>
    </div>
    <q-space />

    <div class="navbar-right desktop-menu">
      <q-btn
        flat
        no-caps
        label="Beranda"
        :color="isTransparent ? 'white' : 'black'"
        to="/"
      ></q-btn>
      <q-btn
        flat
        label="Sejarah"
        no-caps
        :color="isTransparent ? 'white' : 'black'"
      >
        <q-menu>
          <q-list>
            <q-item clickable to="/sejarah">
              <q-item-section>Keraton</q-item-section>
            </q-item>
            <q-item clickable to="/sejarah/silsilah">
              <q-item-section>Silsilah</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn
        flat
        no-caps
        label="Booking"
        :color="isTransparent ? 'white' : 'black'"
      >
        <q-menu>
          <q-list>
            <q-item clickable @click="toBooking('/booking')">
              <q-item-section>Paket Keraton</q-item-section>
            </q-item>
            <q-item clickable @click="toBooking('/booking/event')">
              <q-item-section>Tiket Event</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn
        flat
        no-caps
        label="Objek Wisata"
        :color="isTransparent ? 'white' : 'black'"
        class="col-grow"
      >
        <q-menu>
          <q-list>
            <q-item clickable to="/wisata/keraton">
              <q-item-section>Keraton Kesepuhan</q-item-section>
            </q-item>
            <q-item clickable to="/wisata/museum">
              <q-item-section>Museum Pusaka</q-item-section>
            </q-item>
            <q-item clickable to="/wisata/dalemagung">
              <q-item-section>Dalem Agung Pangkuwati</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn
        no-caps
        style="background: #123b32; color: white; padding-inline: 30px"
        v-if="!isLogin"
        @click="getTickets"
      >
        <span class="text-bold">Dapatkan Tiket</span>
      </q-btn>
      <q-btn v-else round flat @click="toggleMenu">
        <q-avatar>
          <img src="../assets/svg/user.svg" alt="Profile" />
        </q-avatar>
        <q-menu>
          <q-list>
            <q-item clickable @click="logout">
              <q-item-section>Logout</q-item-section>
            </q-item>
            <q-item clickable @click="keranjang">
              <q-item-section>Keranjang</q-item-section>
            </q-item>
            <q-item clickable @click="goToPurchases">
              <q-item-section>Pembelian</q-item-section>
            </q-item>
            <q-item v-if="isAdmin" clickable @click="adminPage">
              <q-item-section>Admin Page</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </q-toolbar>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {};
  },
};
</script>
