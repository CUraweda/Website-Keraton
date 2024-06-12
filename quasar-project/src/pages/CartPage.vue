<script setup>
import { ref } from "vue";
import navbar from "../components/NavbarNew.vue";
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="all-content">
          <div>
            <nav class="navbar">
              <navbar />
            </nav>
            <q-page-sticky style="z-index: 100" v-if="cartData.length > 0" position="bottom-right" :offset="[18, 18]">
              <q-btn fab color="primary" to="/user/checkout">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                  fill="#e8eaed">
                  <path
                    d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                </svg>
              </q-btn>
            </q-page-sticky>

            <div class="text-h3 text-center">Keranjang</div>

            <div class="q-mt-xl">
              <div
                v-for="(cart, i) in cartData"
                :key="cart.id"
                class="flex column justify-center items-center"
                style="
                  overflow-x: scroll;
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                "
              >
                <q-card class="my-card q-mt-md" flat bordered>
                  <q-card-section horizontal>
                    <q-img :src="cart.image" class="image-card" />

                    <div class="flex column justify-between q-mx-md">
                      <div class="text-h6 title-card">
                        {{ cart.name }}
                      </div>
                      <div>
                        {{
              cart.price < 1 ? "Free" : "Rp. " + formatRupiah(cart.price) }} </div>

                          <div class="flex items-center justify-between">
                            <div class="flex items-center q-gutter-md">
                              <q-btn size="xs" dense @click="changeQuantity('plus', cart, i)">
                                <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960"
                                  width="15px" fill="black">
                                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                                </svg>
                              </q-btn>
                              <div>{{ cart.quantity }}</div>
                              <q-btn size="xs" dense @click="changeQuantity('min', cart, i)">
                                <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960"
                                  width="15px" fill="black">
                                  <path d="M200-440v-80h560v80H200Z" />
                                </svg>
                              </q-btn>
                            </div>

                            <q-btn flat dense @click="removeItem(cart)">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                width="24px" fill="black">
                                <path
                                  d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                              </svg>
                            </q-btn>
                          </div>
                      </div>
                  </q-card-section>
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
import env from "../stores/environment";
import carts from "../stores/carts";
import cookieHandler from "src/cookieHandler";

export default {
  components: { navbar },

  data() {
    return {
      cartClass: new carts(),
      cartData: ref([]),
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
    };
  },
  mounted() {
    this.fetchData();
  },
  beforeUnmount() {
    this.updateToDB();
  },
  methods: {
    async updateToDB() {
      try {
        const currentCart = {};
        for (let cart of this.cartData) {
          currentCart[cart.id] = cart;
        }
        const response = await this.$api.post(
          "cart/update",
          { cart: currentCart },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status != 200) throw Error(response.data.message);
        return;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchData() {
      try {
        const rawCart = Object.values(this.cartClass.getItem());
        if (rawCart.length < 1) {
          const response = await this.$api.get("cart", {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          });

          if (response.status != 200) throw Error(response.data.message);
          rawCart = response.data.data;
        }
        this.cartData = rawCart.map((cart) => ({
          ...cart,
        }));
      } catch (err) {
        console.log(err);
      }
    },
    removeItem(rowData) {
      try {
        this.cartData = Object.values(this.cartClass.removeItem([rowData]).userCart);
        return this.cartClass.updateItem();
      } catch (err) {
        console.log(err);
      }
    },
    changeQuantity(indicator, rowData, indexData) {
      this.cartData[indexData].quantity = indicator != "min" ? rowData.quantity + 1 : rowData.quantity - 1;
      if (this.cartData[indexData].quantity < 1) return this.removeItem(rowData)
      return this.changeStorageQuantity(this.cartData[indexData]);
    },
    changeStorageQuantity(rowData) {
      try {
        const itemId = `${rowData.type}|${rowData.id}`;
        this.cartData = Object.values(this.cartClass.changeQuantity(itemId, rowData.quantity).userCart);
        return this.cartClass.updateItem();
      } catch (err) {
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
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

* {
  font-family: Raleway;
}

.image-card {
  width: 12rem;
  height: 7rem;
}

.title-card {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 20rem;
}

@media screen and (max-width: 1200px) {
  .image-card {
    width: 7rem;
    height: 5rem;
  }

  .title-card {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 15rem;
  }
}
</style>
