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
                  <q-item clickable to="/booking">
                    <q-item-section>Paket Keraton</q-item-section>
                  </q-item>
                  <q-item clickable to="/booking/event">
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
                  <q-item
                    clickable
                    :to="objekWisata.value"
                    :key="i"
                    v-for="(objekWisata, i) in sessionData.wisataOption"
                  >
                    <q-item-section>{{ objekWisata.label }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
            <q-btn
              v-if="!sessionData?.isLogin"
              no-caps
              style="background: #123b32; color: white; padding-inline: 30px"
            >
              <span class="text-bold">Dapatkan Tiket</span>
            </q-btn>
            <q-expansion-item
              v-if="sessionData?.isLogin"
              label="Account"
              clickable
              expand-separator
            >
              <q-list>
                <q-item clickable @click="logOut">
                  <q-item-section>Logout</q-item-section>
                </q-item>
                <q-item clickable to="/user/carts">
                  <q-item-section>Keranjang</q-item-section>
                </q-item>
                <q-item clickable to="/user/transaction">
                  <q-item-section>Pembelian</q-item-section>
                </q-item>
                <q-item v-if="sessionData.isAdmin" clickable to="/admin/home">
                  <q-item-section>Admin Page</q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
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
            <q-item clickable to="/booking">
              <q-item-section>Paket Keraton</q-item-section>
            </q-item>
            <q-item clickable to="/booking/event">
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
            <q-item
              clickable
              :to="objekWisata.value"
              :key="i"
              v-for="(objekWisata, i) in sessionData.wisataOption"
            >
              <q-item-section>{{ objekWisata.label }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn
        v-if="!sessionData?.isLogin"
        no-caps
        to="/signin"
        style="background: #123b32; color: white; padding-inline: 30px"
      >
        <span class="text-bold">Dapatkan Tiket</span>
      </q-btn>

      <q-btn round dense flat v-if="sessionData?.isLogin" class="profile-float">
        <q-avatar size="26px">
          <img src="../assets/images/arah_kanan.png" />
        </q-avatar>
        <q-menu
          fit
          anchor="bottom left"
          self="top left"
          style="max-width: 320px"
        >
          <q-item clickable to="/user/carts">
            <q-item-section>Keranjang</q-item-section>
          </q-item>
          <q-item clickable to="/user/transaction">
            <q-item-section>Pembelian</q-item-section>
          </q-item>
          <q-item v-if="sessionData.isAdmin" clickable to="/admin/home">
            <q-item-section>Admin Page</q-item-section>
          </q-item>
          <q-item clickable class="text-negative" @click="logOut">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="rounded-borders">Logout</q-item-label>
            </q-item-section>
          </q-item>
        </q-menu>
      </q-btn>
    </div>
  </q-toolbar>
</template>

<script>
import { ref } from "vue";
import env from "stores/environment";
import cookieHandler from "src/cookieHandler";

export default {
  setup() {
    return {
      navbarDialog: ref(false),
      sessionData: ref(JSON.parse(sessionStorage.getItem(env.GLOBAL_STORAGE))),
    };
  },
  methods: {
    async logOut() {
      try {
        const token = cookieHandler.getCookie(env.TOKEN_STORAGE_NAME);
        cartClass.updateToDB();
        const response = await this.$api.get("auth/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status != 200) throw Error(response.data.message);
        localStorage.removeItem(env.USER_STORAGE_NAME);
        cookieHandler.removeCookie(env.TOKEN_STORAGE_NAME);
        sessionStorage.removeItem(env.GLOBAL_STORAGE);
        cartClass.clearCart().updateItem();
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    },
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

  .profile-float {
    display: none;
  }
}
</style>
