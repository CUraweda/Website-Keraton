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

    <q-toggle
      v-if="sessionData?.isAdmin"
      v-model="toggleNavbar"
      color="orange"
      checked-icon="check"
      unchecked-icon="clear"
    />

    <q-btn
      icon="menu"
      class="drawer-dialog"
      color="orange"
      @click="navbarDialog = true"
    />

    <q-dialog full-width v-model="navbarDialog" position="top">
      <q-card>
        <q-card-section v-if="!toggleNavbar">
          <div>
            <q-btn flat no-caps label="Beranda" color="black" to="/" />
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <div>
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
                    v-for="(objekWisata, i) in sessionData.wisataOption"
                    :to="objekWisata.value"
                    :key="i"
                  >
                    <q-item-section>{{ objekWisata.label }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>

          <div>
            <q-btn
              v-if="!sessionData?.isLogin"
              no-caps
              to="/signin"
              label="SignIn"
              style="background: #123b32; color: white; padding-inline: 30px"
            >
            </q-btn>
          </div>

          <q-expansion-item
            v-if="sessionData?.isLogin"
            label="Account"
            clickable
            expand-separator
          >
            <q-list>
              <q-item clickable to="/user/carts">
                <q-item-section>Keranjang</q-item-section>
              </q-item>
              <q-item clickable to="/user/transaction">
                <q-item-section>Pembelian</q-item-section>
              </q-item>
              <q-item v-if="sessionData.isAdmin" clickable to="/admin/home">
                <q-item-section>Admin Page</q-item-section>
              </q-item>
              <q-item clickable @click="logOut" class="text-negative">
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-card-section>

        <q-card-section v-if="toggleNavbar">
          <div>
            <q-btn flat no-caps href="/admin/home" label="Beranda" />
          </div>

          <div>
            <q-btn flat no-caps href="/admin/event" label="Tiket" />
          </div>

          <div>
            <q-btn flat no-caps href="/admin/voucher" label="Voucher" />
          </div>

          <div>
            <q-btn flat no-caps href="/admin/news" label="Berita" />
          </div>

          <div>
            <q-btn flat no-caps href="/admin/janji-temu" label="Janji Temu" />
          </div>

          <div>
            <q-btn flat no-caps href="/admin/user" label="User" />
          </div>

          <div>
            <q-btn flat no-caps href="/admin/subs" label="Langganan" />
          </div>
          <q-expansion-item
            v-if="sessionData?.isLogin"
            label="Account"
            clickable
            expand-separator
          >
            <q-list>
              <q-item clickable to="/user/carts">
                <q-item-section>Keranjang</q-item-section>
              </q-item>
              <q-item clickable to="/user/transaction">
                <q-item-section>Pembelian</q-item-section>
              </q-item>
              <q-item v-if="sessionData.isAdmin" clickable to="/admin/home">
                <q-item-section>Admin Page</q-item-section>
              </q-item>
              <q-item clickable @click="logOut" class="text-negative">
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="component-navbar-admin" v-if="toggleNavbar">
      <q-btn
        flat
        no-caps
        label="Beranda"
        :color="isTransparent ? 'white' : 'black'"
        to="/admin/home"
      />

      <q-btn
        flat
        no-caps
        label="Tiket"
        :color="isTransparent ? 'white' : 'black'"
        to="/admin/event"
      />

      <q-btn
        flat
        no-caps
        label="Voucher"
        :color="isTransparent ? 'white' : 'black'"
        to="/admin/voucher"
      />

      <q-btn
        flat
        no-caps
        label="Berita"
        :color="isTransparent ? 'white' : 'black'"
        to="/admin/news"
      />
      <q-btn
        flat
        no-caps
        label="Janji Temu"
        :color="isTransparent ? 'white' : 'black'"
        to="/admin/janji-temu"
      />
      <q-btn
        flat
        no-caps
        label="User"
        :color="isTransparent ? 'white' : 'black'"
        to="/admin/user"
      />

      <q-btn
        flat
        no-caps
        label="Langganan"
        :color="isTransparent ? 'white' : 'black'"
        to="/admin/subs"
      />

      <q-btn round dense flat v-if="sessionData?.isLogin" class="profile-float">
        <q-avatar size="2.2rem">
          <img src="../assets/svg/user.svg" />
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

    <div class="component-navbar" v-if="!toggleNavbar">
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
              v-for="(objekWisata, i) in sessionData.wisataOption"
              :to="objekWisata.value"
              :key="i"
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
        <span class="text-bold">SignIn</span>
      </q-btn>

      <q-btn round dense flat v-if="sessionData?.isLogin" class="profile-float">
        <q-avatar size="2.2rem">
          <img src="../assets/svg/user.svg" />
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
import SimpleNotify from "simple-notify";
import "simple-notify/dist/simple-notify.css";
import cookieHandler from "src/cookieHandler";
import Carts from "src/stores/carts";
import { decrypt } from "src/stores/encryption";
const cartClass = new Carts();

export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    return {
      navbarDialog: ref(false),
      toggleNavbar: ref(props.isAdmin),
      sessionData: ref(
        JSON.parse(
          sessionStorage.getItem(env.GLOBAL_STORAGE)
            ? decrypt(sessionStorage.getItem(env.GLOBAL_STORAGE))
            : "{}"
        )
      ),
    };
  },
  watch: {
    toggleNavbar: {
      handler(val) {
        console.log(val);
      },
    },
  },
  methods: {
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
      } catch (err) {
        this.showNotif(err.message, "error");
        console.log(err);
      }
      localStorage.removeItem(env.USER_STORAGE_NAME);
      cookieHandler.removeCookie(env.TOKEN_STORAGE_NAME);
      sessionStorage.removeItem(env.GLOBAL_STORAGE);
      cartClass.clearCart().updateItem();
      window.location.reload().then(() => {
        this.showNotif("Anda berhasil Log Out", "success");
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap");

div {
  font-family: Raleway;
}

.drawer-dialog {
  display: none;
}

@media screen and (max-width: 800px) {
  .name-logo,
  .component-navbar-admin,
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
