<template>
  <div>
    <navbar />

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
      <q-select
        outlined
        v-model="pelaksanaan"
        :options="pelaksanaanOptions"
        label="Pelaksanaan"
        style="width: 10rem"
      >
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section avatar>
              <q-checkbox v-model="val" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ scope.opt.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>

      <q-select
        outlined
        v-model="jenisEvent"
        :options="jenisEventOptions"
        label="Jenis Event"
        style="width: 10rem"
      >
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section avatar>
              <q-checkbox v-model="val" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ scope.opt.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>

    <div class="flex justify-center items-center q-gutter-md">
      <div v-for="(item, index) in events" :key="index">
        <q-card class="my-card" flat bordered style="width: 20rem">
          <q-img :src="item.image" style="height: 15rem" />

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
              {{ item.price < 1 ? "Free" : "Rp. " + formatRupiah(item.price) }}
            </div>

            <q-space />

            <q-btn dense no-caps style="background: #fae084"
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
      jenisEvent: ref(),
      pelaksanaan: ref(),
      jenisEventOptions: [
        {
          label: "Gratis",
          value: 1,
        },
        { label: "Bayar", value: 2 },
      ],
      pelaksanaanOptions: [
        { label: "Perminggu", value: 1 },
        { label: "Perbulan", value: 2 },
        { label: "Pertahun", value: 3 },
      ],
      cart: new Carts(),
      events: ref([]),
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
    showNotif(mes, type) {
      this.notification.message = mes;
      this.notification.type = type;
      setTimeout(() => {
        this.notification.message = "";
        this.notification.type = "";
      }, 4000);
    },
    async fetchData() {
      let freeOptions, iterationOptions;
      try {
        if (this.selectedOptions)
          iterationOptions = Object.values(this.selectedOptions);
        if (this.selectedOptions2)
          freeOptions = Object.values(this.selectedOptions2);
        const eventResponse = await this.$api.post("event/page", {
          ...(iterationOptions &&
            iterationOptions.length != 0 && {
              iterat: Object.values(this.selectedOptions),
            }),
          ...(freeOptions &&
            freeOptions.length < 2 &&
            freeOptions.length != 0 && {
              free: freeOptions[0] != 0 ? true : false,
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
      } catch (err) {
        console.log(err);
      }
    },
    addToCart(rowData) {
      try {
        const tokenExist = cookieHandler.getCookie(env.TOKEN_STORAGE_NAME);
        if (!tokenExist) throw Error("Anda Masih Belum Log In!");
        const storedData = {
          id: rowData.id,
          name: rowData.titleBig,
          image: rowData.image,
          quantity: 1,
          price: rowData.price,
          type: "E",
        };
        const cartData = this.cart.addManyItem([storedData]).getItem();
        if (!cartData) throw Error("Error Occured");
        this.showNotif(`${storedData.name} Dimasukan ke keranjang`, "info");
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
  margin: 0 7rem;
}

@media screen and (max-width: 1200px) {
  .header {
    margin: 1rem 1rem;
  }
}
</style>
