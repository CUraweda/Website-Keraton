<template>
  <div>
    <navbar />

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
          <q-img :src="item.image || defaultImageUrl" class="image-card" />

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
              {{ item.price < 1 ? "Free" : "Rp. " + formatRupiah(item.price) }}
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
                {{
                  data.price < 1 ? "Free" : "Rp. " + formatRupiah(data.price)
                }}
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
</template>

<script>
import Carts from "../stores/carts";
import cookieHandler from "src/cookieHandler";
import env from "stores/environment";
import { ref } from "vue";
import navbar from "../components/NavbarNew.vue";
export default {
  components: { navbar },
  data() {
    return {
      tiketItems: ref(),
      paketItems: ref(),
      paketNameItems: ref(),
      defaultImageUrl: "https://picsum.photos/200/300",
      cart: new Carts(),
    };
  },
  beforeUnmount() {
    this.storeCartToDatabase();
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async storeCartToDatabase() {
      this.cart.updateToDB();
    },
    async fetchData() {
      try {
        const response = await this.$api.get("items/booking");
        if (response.status !== 200) throw Error("Error Occured");

        let tikets = [],
          pakets = {};

        for (let subType of response.data.data) {
          switch (subType.orderTypeId) {
            case 1: //Tiket Type
              for (let order of subType.orders) {
                tikets.push({
                  id: order.id,
                  image: order.image,
                  titleMedium: order.name,
                  titleBig: order.desc,
                  subType: subType.orderTypeId,
                  quantity: 0,
                  price: order.price,
                  unit: order.units,
                });
              }
              break;
            case 2: //Paket Type
              const subTypeName = `${subType.name}|${
                subType.minimumUnits ? subType.minimumUnits : undefined
              }`;
              if (!pakets[subTypeName]) {
                pakets[subTypeName] = [];
              }

              for (let order of subType.orders) {
                pakets[subTypeName].push({
                  id: order.id,
                  image: order.image,
                  titleMedium: order.name,
                  titleBig: order.desc,
                  minimumUnit: subType.minimumUnits,
                  quantity: 0,
                  price: order.price,
                  unit: order.units,
                });
              }
              break;
          }
        }

        this.tiketItems = tikets;
        this.paketItems = Object.values(pakets);
        this.paketNameItems = Object.keys(pakets).map((paket) => {
          const [name, minimumUnit] = paket.split("|");
          return { name, minimumUnit };
        });
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
    countPrice(normalPrice, secondPrice, thirdPrice) {
      let returnedPrice = `Rp. ${this.formatRupiah(normalPrice)}`;
      const prices = [normalPrice, secondPrice, thirdPrice]
        .filter((price) => price !== null)
        .sort((a, b) => a - b);
      if (prices.length > 1) {
        returnedPrice = `Rp. ${this.formatRupiah(
          prices[0]
        )} - ${this.formatRupiah(prices[prices.length - 1])}`;
      }
      return returnedPrice;
    },
    formatRupiah(price) {
      return (price / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 3,
      });
    },
    addToCart(rowData) {
      try {
        const tokenExist = cookieHandler.getCookie(env.TOKEN_STORAGE_NAME);
        if (!tokenExist) throw Error("Anda Masih Belum Log In!");
        const storedData = {
          id: rowData.id,
          name: rowData.titleMedium,
          image: rowData.image,
          quantity: 1,
          minimumUnit: rowData.minimumUnit,
          price: rowData.price,
          type: "T",
        };
        const cartData = this.cart.addManyItem([storedData]).getItem();
        if (!cartData) throw Error("Error Occured");
        return this.cart.updateItem();
      } catch (err) {
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
