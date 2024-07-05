<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div>
          <navbar :isAdmin="false" />

          <q-page-sticky
            style="z-index: 100"
            position="bottom-right"
            :offset="[18, 18]"
            v-if="currentCartLength > 0"
          >
            <q-btn fab color="primary" to="/user/checkout">
              <q-badge color="orange" floating>{{ currentCartLength }}</q-badge>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path
                  d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"
                />
              </svg>
            </q-btn>
          </q-page-sticky>

          <div class="background-header">
            <div class="header">
              <q-breadcrumbs active-color="black">
                <q-breadcrumbs-el label="Booking" />
                <q-breadcrumbs-el label="Tiket Event" />
              </q-breadcrumbs>

              <div class="text-h5 text-bold">Tiket Event Keraton</div>
            </div>
          </div>

          <div class="style-select">
            <q-btn
              outlined
              label="Pelaksanaan"
              no-caps
              icon-right="keyboard_arrow_down"
            >
              <q-menu>
                <q-list>
                  <q-item clickable>
                    <q-item-section>
                      <q-checkbox
                        v-for="(iterat, i) in pelaksanaanOptions"
                        :key="i"
                        v-model="jenisPelaksanaan"
                        :val="iterat.value"
                        :label="iterat.label"
                    /></q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>

            <q-btn
              outlined
              label="Jenis Event"
              no-caps
              icon-right="keyboard_arrow_down"
            >
              <q-menu>
                <q-list>
                  <q-item clickable>
                    <q-item-section>
                      <q-checkbox
                        v-for="(type, i) in jenisEventOptions"
                        :key="i"
                        v-model="jenisEvent"
                        :val="type.value"
                        :label="type.label"
                    /></q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>

          <div class="flex justify-center items-center q-gutter-md">
            <div v-for="(item, index) in events" :key="index">
              <q-card class="my-card" flat bordered>
                <q-img :src="item.image" class="image-card" />

                <q-card-section>
                  <div class="flex q-gutter-sm">
                    <q-badge color="blue">{{ item.buttonText1 }}</q-badge>
                    <q-badge color="blue">{{
                      item.isFree ? "Free" : "Paid"
                    }}</q-badge>
                  </div>
                  <div
                    class="text-h6 q-mt-sm q-mb-xs"
                    style="
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    "
                  >
                    {{ item.titleBig }}
                  </div>
                  <div
                    class="text-caption text-grey"
                    style="
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    "
                  >
                    {{ item.titleMedium }}
                  </div>
                </q-card-section>

                <q-card-actions>
                  <div class="text-subtitle1 text-weight-medium">
                    {{
                      item.price < 1
                        ? "Free"
                        : "Rp. " + formatRupiah(item.price)
                    }}
                  </div>
                  <q-space />
                  <q-btn
                    dense
                    @click="addToCart(item)"
                    no-caps
                    style="background: #fae084"
                    ><span class="text-bold">Tambah</span
                    ><span
                      ><q-img
                        src="../assets/Frame.svg"
                        style="width: 1rem; height: 1rem"
                        class="q-mx-xs" /></span
                  ></q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Carts from "../stores/carts";
import cookieHandler from "src/cookieHandler";
import env from "stores/environment";
import { ref } from "vue";
import socket from 'src/socket'
import navbar from "../components/NavbarNew.vue";
import SimpleNotify from "simple-notify";
import { decrypt } from "src/stores/encryption";
import "simple-notify/dist/simple-notify.css";

export default {
  components: { navbar },
  data() {
    return {
      jenisEvent: ref([]),
      jenisPelaksanaan: ref([]),
      jenisEventOptions: [
        { label: "Gratis", value: 1 },
        { label: "Bayar", value: 2 },
      ],
      pelaksanaanOptions: [
        { label: "Perminggu", value: 1 },
        { label: "Perbulan", value: 2 },
        { label: "Pertahun", value: 3 },
      ],
      defaultImageUrl: '../assets/images/placeholder_image.jpg',
      cart: new Carts(),
      events: ref([]),
      currentCartLength: 0,
      sessionData: ref(
        JSON.parse(decrypt(sessionStorage.getItem(env.GLOBAL_STORAGE)))
      ),
    };
  },
  beforeUnmount() {
    this.storeCartToDatabase();
  },
  mounted() {
    this.fetchData();
    this.socketConnection()
  },
  watch: {
    jenisPelaksanaan: {
      handler() {
        this.fetchData();
      },
    },
    jenisEvent: {
      handler() {
        this.fetchData();
      },
    },
  },
  methods: {
    socketConnection(){
      socket.connect()
      socket.on('tiket', () => {
        this.fetchData()
      })
    },
    showNotif(msg, status) {
      const myNotify = new SimpleNotify({
        text: `${msg}`,
        status: `${status}`,
        autoclose: false,
      });
      setTimeout(() => {
        myNotify.close();
      }, 5000);
    },

    async storeCartToDatabase() {
      this.cart.updateToDB();
    },
    async fetchData() {
      try {
        const eventResponse = await this.$api.post("event/page", {
          ...(this.jenisPelaksanaan &&
            this.jenisPelaksanaan.length > 0 && {
              iterat: this.jenisPelaksanaan,
            }),
          ...(this.jenisEvent &&
            this.jenisEvent.length < 2 &&
            this.jenisEvent.length > 0 && {
              free: this.jenisEvent[0] != 0 ? true : false,
            }),
        });
        const iterationResponse = await this.$api.get("iteration");
        if (eventResponse.status != 200) throw Error("Error occured");
        if (iterationResponse.status != 200) throw Error("Error occured");
        this.events = eventResponse.data.data.map((event) => ({
          id: event.id,
          image: event.image,
          buttonText1: event.iteration.name,
          titleMedium: event.desc,
          titleBig: event.name,
          isFree: event.isFree,
          price: event.price,
        }));
        this.options = iterationResponse.data.data.map((iterat) => ({
          label: iterat.name,
          value: iterat.id,
        }));
        if (this.sessionData?.isLogin) {
          const cart = Object.values(this.cart.getItem());
          this.currentCartLength = cart.length;
        }
      } catch (err) {
        console.log(err);
      }
    },
    addToCart(rowData) {
      try {
        const tokenExist = cookieHandler.getCookie(env.TOKEN_STORAGE_NAME);
        if (!tokenExist) {
          this.$router.push("/signin");
          throw Error("Anda masih belum login");
        }
        const storedData = {
          id: rowData.id,
          name: rowData.titleBig,
          image: rowData.image,
          quantity: 1,
          categoryId: rowData.categoryId,
          price: rowData.price,
          type: "E",
        };
        const cartData = this.cart.addManyItem([storedData]).getItem();
        if (!cartData) throw Error("Error Occured");
        this.currentCartLength = Object.values(cartData).length
        this.showNotif(`${storedData.name} Dimasukan ke keranjang`, "success");
        return this.cart.updateItem();
      } catch (err) {
        this.showNotif(err.message, "error");
        console.log(err);
      }
    },
    formatRupiah(price) {
      return (price / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 3,
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap");

* {
  font-family: Raleway;
}

.sn-notifications-container {
  --sn-success-progress-color: black;
}

.style-select {
  display: flex;
  align-items: center;
  gap: 0 1rem;
  margin: 1rem 2rem;
}

.background-header {
  background: linear-gradient(
    90deg,
    rgba(218, 165, 32, 0.5) 0%,
    rgba(18, 59, 50, 0.5) 100%
  );
  height: 5.5rem;
  display: flex;
  align-items: center;
}

.header {
  margin: 0 1rem;
}

.image-card {
  height: 15rem;
}

.my-card {
  width: 20rem;
}

@media screen and (max-width: 1200px) {
  .header {
    margin: 1rem 1rem;
  }
}
</style>
