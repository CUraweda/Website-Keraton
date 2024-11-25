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
                <q-breadcrumbs-el label="Paket Keraton" />
              </q-breadcrumbs>

              <div class="text-h5 text-bold">Paket Keraton</div>
            </div>
          </div>

          <div class="text-h5 text-bold q-mx-md q-my-md">
            Tiket Masuk Keraton & Bundling
          </div>
          <div
            class="flex q-gutter-md q-mx-md"
            style="
              overflow-x: auto;
              flex-wrap: nowrap;
              -ms-overflow-style: none;
              scrollbar-width: none;
            "
          >
            <div v-for="(item, index) in tiketItems" :key="index">
              <q-card class="my-card" flat bordered>
                <q-img :src="item.image" class="image-card" />

                <q-card-section>
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
                    {{ formatRupiah(item.price) }}
                  </div>
                  <q-space />
                  <q-btn
                    @click="addToCart(item)"
                    dense
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

          <div v-for="(item, index) in paketItems" :key="index">
            <div class="text-h5 text-bold q-mx-md q-my-md">
              {{
                paketNameItems[index].name +
                ` (minimal ${paketNameItems[index].minimumUnit} orang)`
              }}
            </div>
            <div
              class="flex q-gutter-md q-mx-md"
              style="
                overflow-x: auto;
                flex-wrap: nowrap;
                -ms-overflow-style: none;
                scrollbar-width: none;
              "
            >
              <div v-for="(data, index) in item" :key="index">
                <q-card class="my-card" flat bordered>
                  <q-img :src="data.image" class="image-card" />

                  <q-card-section>
                    <div
                      class="text-h6 q-mt-sm q-mb-xs"
                      style="
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      {{ data.titleBig }}
                    </div>
                    <div
                      class="text-caption text-grey"
                      style="
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      {{ data.titleMedium }}
                    </div>
                  </q-card-section>

                  <q-card-actions>
                    <div class="text-subtitle1 text-weight-medium">
                      {{ formatRupiah(data.price) }}
                    </div>
                    <q-space />
                    <q-btn
                      @click="addToCart(data)"
                      dense
                      no-caps
                      style="background: #fae084"
                      class="text-bold"
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
import socket from "src/socket";
import navbar from "../components/NavbarNew.vue";
import SimpleNotify from "simple-notify";
import { decrypt } from "src/stores/encryption";
import "simple-notify/dist/simple-notify.css";

export default {
  components: { navbar },
  data() {
    return {
      tiketItems: ref(),
      paketItems: ref(),
      janjiDefaultItems: ref(),
      paketNameItems: ref(),
      // PaketAutomated: ref([]),
      defaultImageUrl: "src/assets/images/placeholder_image.jpg",
      cart: new Carts(),
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
    this.socketConnection();
  },
  methods: {
    socketConnection() {
      socket.connect();
      socket.on("tiket", () => {
        this.fetchData();
      });
    },
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
    async storeCartToDatabase() {
      this.cart.updateToDB();
    },
    async fetchData() {
      try {
        const response = await this.$api.get("items/booking");
        if (response.status !== 200) throw Error("Error Occured");
        let tikets = [],
          pakets = {},
          defaultJanji = [];

        for (let subType of response.data.data) {
          let subTypeName = `${subType.name}|${
            subType.minimumUnits ? subType.minimumUnits : 0
          }`;
          if (subType.orders.length < 1) continue;
          switch (subType.orderTypeId) {
            case 1: //Tiket Type
              for (let order of subType.orders) {
                const payloadData = {
                  id: order.id,
                  categoryId: order.categoryId,
                  image: order.image,
                  titleMedium: order.desc,
                  titleBig: order.name,
                  subType: subType.orderTypeId,
                  quantity: 0,
                  price: order.price,
                  unit: order.units,
                  is_janji: order.is_janji,
                };
                tikets.push(payloadData);
                if (order.needed_for_janji)
                  defaultJanji.push({
                    id: order.id,
                    name: order.name,
                    image: order.image,
                    quantity: 1,
                    categoryId: order.categoryId,
                    minimumUnit: subType.minimumUnit,
                    price: order.price,
                    type: "T",
                  });
              }
              break;
            case (2, 4, 3):
              if (!pakets[subTypeName]) pakets[subTypeName] = [];

              for (let order of subType.orders) {
                const payloadData = {
                  id: order.id,
                  image: order.image,
                  titleMedium: order.desc,
                  categoryId: order.categoryId,
                  titleBig: order.name,
                  minimumUnit: subType.minimumUnits,
                  quantity: 0,
                  // price: order.price,s
                  unit: order.units,
                  is_janji: order.is_janji,
                };
                pakets[subTypeName].push(payloadData);
                if (order.needed_for_janji)
                  defaultJanji.push({
                    id: order.id,
                    name: order.name,
                    image: order.image,
                    quantity: 1,
                    categoryId: order.categoryId,
                    minimumUnit: subType.minimumUnit,
                    price: order.price,
                    type: "T",
                  });
              }
              break;
          }
        }
        this.tiketItems = tikets;
        this.paketItems = Object.values(pakets);
        this.janjiDefaultItems = defaultJanji;
        this.paketNameItems = Object.keys(pakets).map((paket) => {
          const [name, minimumUnit] = paket.split("|");
          return { name, minimumUnit };
        });
        if (this.sessionData?.isLogin) {
          const cart = Object.values(this.cart.getItem());
          this.currentCartLength = cart.length;
        }
      } catch (err) {
        console.log(err);
      }
    },
    getImageURL(image) {
      if (image.startsWith("http")) {
        return image;
      } else {
        return this.$api.get(`uploads/${image}`);
      }
    },
    formatRupiah(price) {
      if (isNaN(price) || price === null || price === undefined) {
        return ""; // Tidak menampilkan apapun jika NaN atau tidak valid
      }
      if (price < 1) {
        return "Free"; // Tampilkan "Free" jika price kurang dari 1
      }
      return (
        "Rp. " +
        (price / 1000).toLocaleString("en-US", {
          minimumFractionDigits: 3,
        })
      );
    },

    addToCart(rowData) {
      try {
        const tokenExist = cookieHandler.getCookie(env.TOKEN_STORAGE_NAME);
        if (!tokenExist) {
          this.$router.push("/signin");
          throw Error("Anda Masih belum Log In!");
        }
        const storedData = {
          id: rowData.id,
          name: rowData.titleBig,
          image: rowData.image,
          quantity: 1,
          categoryId: rowData.categoryId,
          minimumUnit: rowData.minimumUnit,
          price: rowData.price,
          type: "T",
        };

        const useTempCart = rowData.is_janji;
        const cartData = !useTempCart
          ? this.cart.addManyItem([storedData]).getItem()
          : this.cart.setTempNew([storedData, ...this.janjiDefaultItems]);
        if (!cartData) throw Error("Error Occured");
        if (!useTempCart) {
          this.currentCartLength = Object.values(cartData).length;
        } else this.$router.push("/user/information/janji-temu");
        this.showNotif(`${storedData.name} Dimasukan ke keranjang`, "success");
        return !useTempCart
          ? this.cart.updateItem()
          : this.cart.updateTempItem();
      } catch (err) {
        this.showNotif(err.message, "error");
        console.log(err);
      }
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

  .image-card {
    height: 10rem;
  }

  .my-card {
    width: 15rem;
  }
}
</style>
