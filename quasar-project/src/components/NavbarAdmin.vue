<template>
  <q-layout style="background: transparent">
    <q-header elevated="false">
      <q-toolbar
        :class="[{ scrolled: isScrolled }, isTransparent ? 'transparent' : '']"
        class="navbar"
      >
        <div class="navbar-left">
          <div class="content-navbar-left">
            <img
              style="width: 3.2rem"
              alt="icon-aplikasi"
              src="../assets/images/logo_keraton 1.png"
              class="app-icon"
            />
          </div>
          <q-space />
          <div class="content-navbar-right">
            <q-btn
              flat
              dense
              round
              icon="menu"
              @click="drawerOpen = !drawerOpen"
              class="menu-button"
            ></q-btn>
          </div>
          <span
            class="app-name"
            :class="{
              'text-white': isTransparent,
              'text-black': !isTransparent,
            }"
          >
            KERATON KASEPUHAN CIREBON
          </span>
        </div>
        <q-space></q-space>
        <div class="navbar-right desktop-menu">
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
            label="Tiket dan Event"
            to="/admin/event"
            :color="isTransparent ? 'white' : 'black'"
          />

          <q-btn
            flat
            no-caps
            label="Berita"
            :color="isTransparent ? 'white' : 'black'"
            class="col-grow"
            to="/admin/news"
          />
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
              <img src="../assets/images/logo_keraton.png" alt="Profile" />
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
    </q-header>
    <q-drawer
      v-model="drawerOpen"
      side="right"
      overlay
      class="sidebar"
      style="background: #123b32; color: white"
    >
      <div class="navbar-left">
        <img
          alt="icon-aplikasi"
          src="../assets/images/logo_keraton.png"
          class="app-icon"
          style="margin: 1vw"
        />
        <span class="sidebar-app-name">KERATON KASEPUHAN CIREBON</span>
        <q-btn
          flat
          dense
          round
          icon="close"
          @click="toggleRightDrawer"
          class="close-btn"
        />
      </div>
      <q-list>
        <q-item clickable to="/">
          <q-item-section>Beranda</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-drawer
      v-model="drawerOpen"
      side="right"
      overlay
      class="sidebar"
      style="background: #123b32; color: white"
    >
      <div class="navbar-left">
        <img
          alt="icon-aplikasi"
          src="../assets/images/logo_keraton.png"
          class="app-icon"
          style="margin: 1vw"
        />
        <span class="sidebar-app-name">KERATON KASEPUHAN CIREBON</span>
        <q-btn
          flat
          dense
          no-caps
          round
          icon="close"
          @click="toggleRightDrawer"
          class="close-btn"
        />
      </div>
      <q-list>
        <q-item clickable to="/">
          <q-item-section>Beranda</q-item-section>
        </q-item>

        <q-expansion-item
          v-if="!isLogin"
          label="Sign In / Sign Up"
          clickable
          @click="toggleWisata"
        >
          <q-list>
            <q-item clickable to="/wisata/keraton">
              <q-item-section>Sign In</q-item-section>
            </q-item>
            <q-item clickable to="/wisata/museum">
              <q-item-section>Sign Up</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item
          v-if="isLogin"
          label="Account"
          clickable
          @click="toggleAccount"
          expand-separator
        >
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
        </q-expansion-item>

        <q-expansion-item label="Booking" clickable @click="toggleBooking">
          <q-list>
            <q-item clickable to="/booking">
              <q-item-section>Paket Keraton</q-item-section>
            </q-item>
            <q-item clickable to="/booking/event">
              <q-item-section>Tiket Event</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item label="Sejarah" clickable @click="toggleSejarah">
          <q-list>
            <q-item clickable to="/sejarah">
              <q-item-section>Keraton</q-item-section>
            </q-item>
            <q-item clickable to="/sejarah/silsilah">
              <q-item-section>Silsilah</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item label="Objek Wisata" clickable @click="toggleWisata">
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
        </q-expansion-item>
      </q-list>
    </q-drawer>
    <Notification
      v-if="notification.message"
      :message="notification.message"
      :type="notification.type"
    />
  </q-layout>
</template>

<script>
import { verifyToken } from "src/auth/auth";
import Carts from "src/stores/carts";
import Notification from "./NotificationAlert.vue";
import cookieHandler from "src/cookieHandler";
import env from "stores/environment";
const cartClass = new Carts();
import { ref } from "vue";
export default {
  data() {
    return {
      isScrolled: false,
      isLogin: ref(false),
      isAdmin: ref(false),
      drawerOpen: false,
      sejarahOpen: false,
      bookingOpen: false,
      wisataOpen: false,
      accountOpen: false,
      notification: {
        message: "",
        type: "info",
      },
      transparentRoutes: [
        "/",
        "/wisata/keraton",
        "/wisata/museum",
        "/wisata/dalemagung",
      ], // Add routes where navbar should be transparent
    };
  },
  components: {
    Notification,
  },
  computed: {
    isTransparent() {
      return (
        this.transparentRoutes.includes(this.$route.path) && !this.isScrolled
      );
    },
  },
  watch: {
    $route(to, from) {
      this.handleScroll(); // Check scroll status on route change
    },
  },
  async mounted() {
    window.addEventListener("scroll", this.handleScroll);
    const tokenVerified = await verifyToken();
    this.isLogin = tokenVerified.isLogin;
    this.isAdmin = tokenVerified.isAdmin;
    this.handleScroll(); // Check initial scroll status
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async logout() {
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
        console.log(err);
      }
      localStorage.removeItem(env.USER_STORAGE_NAME);
      cookieHandler.removeCookie(env.TOKEN_STORAGE_NAME);
      cartClass.clearCart();
      window.location.reload();
      return (this.isLogin = false); // Set isLogin ke false saat logout
    },
    showNotif(mes, type) {
      this.notification.message = mes;
      this.notification.type = type;
      setTimeout(() => {
        this.notification.message = "";
        this.notification.type = "";
      }, 4000);
    },
    async toBooking(url) {
      this.$router.push(url);
    },
    keranjang() {
      this.$router.push("/user/carts");
    },
    getTickets() {
      this.$router.push("/signin");
    },
    handleScroll() {
      this.isScrolled = window.pageYOffset > 50;
    },
    goToPurchases() {
      this.$router.push("/user/transaction");
    },
    adminPage() {
      this.$router.push("/admin/home");
    },
    toggleSejarah() {
      this.sejarahOpen = !this.sejarahOpen;
    },
    toggleBooking() {
      this.bookingOpen = !this.bookingOpen;
    },
    toggleWisata() {
      this.wisataOpen = !this.wisataOpen;
    },
    toggleAccount() {
      this.accountOpen = !this.accountOpen;
    },
    toggleRightDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.q-layout {
  min-height: 6rem !important; /* Or set to desired value */
}

.q-header {
  background: transparent !important;
  box-shadow: none !important;
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  width: 100%;
  z-index: 1000;
}

.navbar {
  background-color: white;
  transition: background-color 0.3s, color 0.3s;
  top: 0;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-family: "Raleway";
  z-index: 1000;
}

.navbar.scrolled {
  background-color: white;
}

.navbar.transparent {
  background: transparent !important;
}

.navbar .text-white {
  color: white;
}

.navbar .text-black {
  color: black;
}

.navbar-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-button {
  display: none;
  background: #123b32;
  border-radius: 5px;
  align-items: center;
  padding-top: 0.7vw;
}
.desktop-menu {
  display: flex;
}

.sub a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

.q-btn {
  transition: color 0.3s;
}

.app-name {
  display: flex;
  width: 2vw;
  margin-right: 100%;
  margin-left: 1vw;
}

.q-btn {
  font-size: 1vw;
  margin: 0.2vw;
}

.sidebar-app-name {
  font-size: 15px !important; /* Fixed font size for sidebar */
  color: white !important;
  width: 50vw;
  margin: 1vw;
}

.close-btn {
  position: absolute;
  top: 1vw;
  right: 1vw;
  color: white;
}

@media (max-width: 800px) {
  .q-btn {
    font-size: 1.5vw;
  }
  .app-name {
    font-size: 1.5vw;
  }
}

@media (max-width: 600px) {
  .q-btn {
    font-size: 3vw;
  }
  .menu-button {
    display: block;
  }
  .desktop-menu {
    display: none;
  }
  .navbar-left .app-name {
    display: none;
    margin-top: 1vw;
  }
}
</style>
