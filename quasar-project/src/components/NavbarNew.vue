<template>
  <q-toolbar
    class="text-white background-white q-pa-sm"
    style="position: sticky; top: 0; z-index: 1000; background: white"
  >
    <div class="flex q-gutter-sm">
      <q-img
        src="../assets/images/logo_keraton 1.png"
        style="width: 3.5rem; height: 3.5rem"
      />
      <div class="text-black name-logo" style="width: 1rem">
        KERATON KESEPUHAN CIREBON
      </div>
    </div>
    <q-space />

    <q-btn
      icon="menu"
      class="drawer-dialog"
      color="primary"
      @click="navbarDialog = true"
    />

    <q-dialog v-model="navbarDialog" position="top">
      <q-card>
        <q-card-section>
          <div style="width: 10rem">
            <q-btn flat no-caps label="Beranda" color="black" to="/" />
            <q-btn flat label="Sejarah" no-caps color="black">
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
            <q-btn flat no-caps label="Booking" color="black">
              <q-menu>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Paket Keraton</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Tiket Event</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
            <q-btn
              flat
              no-caps
              label="Objek Wisata"
              color="black"
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
            >
              <span class="text-bold">Dapatkan Tiket</span>
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="component-navbar">
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
            <q-item clickable>
              <q-item-section>Paket Keraton</q-item-section>
            </q-item>
            <q-item clickable>
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
      >
        <span class="text-bold">Dapatkan Tiket</span>
      </q-btn>
    </div>
  </q-toolbar>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      navbarDialog: ref(false),
    };
  },
};
</script>

<style scoped>
.drawer-dialog {
  display: none;
}

@media screen and (max-width: 600px) {
  .name-logo,
  .component-navbar {
    display: none;
  }

  .drawer-dialog {
    display: flex;
  }
}
</style>
