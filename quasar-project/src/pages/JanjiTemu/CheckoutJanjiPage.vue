<template>
  <div>
    <div>
      <navbar />
    </div>

    <div class="q-mx-xl">
      <div class="flex q-gutter-x-xl">
        <!-- Left Content -->
        <div class="flex-1">
          <div class="q-mt-md">
            <div class="text-h5">Pesan Tiket Langsung</div>
            <div class="flex items-center q-gutter-md q-mt-xs">
              <q-icon name="paid" color="orange" size="2rem" />
              <div class="title-checkout">
                Pastikan pesanan anda
                <span class="text-bold">BENAR</span> sebelum checkout ya!
              </div>
            </div>
          </div>

          <q-card class="q-mt-md">
            <q-card-section class="card-item">
              <div v-for="(cart, index) in carts" :key="index">
                <div>
                  <div class="text-h6 q-mt-xs">{{ cart.name }}</div>
                  <div class="col-grow q-mx-md">
                    <q-select
                      color="orange"
                      class="col-grow"
                      label-color="black"
                      use-input
                      input-debounce="0"
                      v-if="cart.categoryId === 3"
                      v-model="cart.nationalityId"
                      @filter="filterCountry"
                      :options="filteredCountryList"
                      label="Negara Asal"
                      behavior="menu"
                    >
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
                    <q-select
                      class="col-grow"
                      label-color="black"
                      v-if="cart.categoryId === 1"
                      v-model="cart.cityName"
                      @filter="filterCity"
                      :options="filteredCityList"
                      label="Kota Asal"
                    />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Sticky Right Content -->
        <div class="sticky-container q-mt-md" style="flex: 1">
          <div class="sticky-div q-gutter-y-md">
            <div>
              <div class="flex items-center q-gutter-md">
                <q-icon name="person" color="orange" size="2rem" />
                <div>Detail Pemesan</div>
              </div>

              <div class="flex items-center q-gutter-md">
                <div class="text-bold" style="font-size: 1rem">
                  {{ TemuItem.booker_name }}
                </div>
                <div style="font-size: 1rem">
                  {{
                    "- (" +
                    TemuItem.booker_email +
                    " - " +
                    TemuItem.booker_phone +
                    ")"
                  }}
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between q-gutter-md">
              <div>
                <div class="flex items-center q-gutter-md">
                  <q-icon
                    name="account_balance_wallet"
                    color="orange"
                    size="2rem"
                  />
                  <div>{{ paymentMethod || "Pilih Pembayaran" }}</div>
                </div>
                <q-btn no-caps class="q-mt-sm" @click="caraPembayaran = true">
                  <div class="q-gutter-x-md flex items-center justify-center">
                    <q-icon
                      :name="paymentMethod ? 'info' : 'warning'"
                      size="1.5rem"
                      :color="paymentMethod ? 'orange' : 'red'"
                    />
                    <div>
                      {{
                        paymentMethod
                          ? "Ganti Metode Pembayaran"
                          : "Anda Belum Memilih Metode Pembayaran"
                      }}
                    </div>
                  </div>
                </q-btn>
              </div>

              <div>
                <div class="flex items-center q-gutter-md">
                  <q-icon
                    name="confirmation_number"
                    color="orange"
                    size="2rem"
                  />
                  <div>Detail Tiket</div>
                </div>
                <q-input
                  outlined
                  dense
                  v-model="dateInputLabel"
                  label="Tanggal Pesanan"
                  class="q-mt-xs"
                  style="width: 15rem"
                  :disable="true"
                >
                  <template v-slot:append>
                    <q-icon name="event" color="orange" class="cursor-pointer">
                      <q-popup-proxy>
                        <q-date
                          v-model="dateInput"
                          style="width: 300px"
                          mask="YYYY-MM-DD HH:mm"
                        />
                        <q-time
                          v-model="dateInput"
                          mask="YYYY-MM-DD HH:mm"
                          style="width: 300px"
                        />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>

            <div class="q-mt-md">
              <q-card class="my-card">
                <q-card-section>
                  <div class="text-h6">Ringkasan Booking</div>

                  <div>
                    <div>
                      <div class="text-h6 text-bold q-mt-lg">
                        Total Pemesanan
                      </div>
                      <div>
                        <div
                          v-for="(data, index) in allItems"
                          :key="index"
                          class="flex items-center justify-between"
                        >
                          <div>
                            {{
                              data.name ||
                              data.titleBig + ` (${data.quantity} Tiket)`
                            }}
                          </div>
                          <div>
                            Rp. {{ formatRupiah(data.quantity * data.price) }}
                          </div>
                        </div>
                        <div class="flex items-center justify-between">
                          <div>Total Harga ({{ ticketTotal }} Tiket)</div>
                          <div>Rp. {{ formatRupiah(checkoutTotal) }}</div>
                        </div>
                      </div>
                    </div>

                    <div class="q-mt-lg">
                      <div class="text-h6 text-bold">Biaya Transaksi</div>
                      <div v-for="(tax, i) in taxes" :key="i">
                        <div class="flex items-center justify-between">
                          <div>{{ tax.label }}</div>
                          <div>Rp. {{ formatRupiah(formatTax(tax)) }}</div>
                        </div>
                      </div>
                    </div>

                    <div class="q-mt-lg">
                      <q-separator color="black" />
                      <div class="flex items-center justify-between">
                        <div class="text-h5 text-bold">Total Tagihan</div>
                        <div class="text-h5 text-bold">
                          Rp. {{ formatRupiah(totalTagihan) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>

              <q-btn
                no-caps
                class="full-width q-mt-md q-py-md"
                color="orange"
                @click="checkOut"
              >
                <div class="flex items-center justify-between full-width">
                  <div class="text-bold text-h6">Checkout</div>
                  <q-icon
                    name="arrow_forward"
                    color="orange"
                    style="background: white; border-radius: 100%"
                  />
                </div>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <q-dialog v-model="caraPembayaran">
      <q-card style="width: 30rem; max-width: 100vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Pilih Pembayaran</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              class="text-h6"
              label="Kartu Kredit/Debit"
              default-opened
            >
              <q-card>
                <q-card-section>
                  <div v-for="instance in instances" :key="instance.value">
                    <div
                      class="cursor-pointer q-mt-md"
                      @click="payWith(instance)"
                    >
                      <div class="flex items-center q-gutter-md">
                        <img
                          :src="instance.icon"
                          style="width: 4rem; height: 2rem"
                        />
                        <div>{{ instance.label }}</div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import Cart from "stores/carts";
import cookieHandler from "src/cookieHandler";
import env from "stores/environment";
import socket from "src/socket";
import navbar from "../../components/NavbarNew.vue";
import SimpleNotify from "simple-notify";
import "simple-notify/dist/simple-notify.css";
import logobjb from "../../assets/svg/logo_bjb.svg";
import logobca from "../../assets/svg/logo_bca.svg";
import logomandiri from "../../assets/svg/logo_mandiri.svg";
import logobni from "../../assets/svg/logo_bni.svg";
import globalParams from "../../stores/globalParam";

export default {
  components: { navbar },
  setup() {
    const cart = ref({ categoryId: null, nationalityId: null, cityName: null });
    const filteredCountryList = ref([]);
    const filteredCityList = ref([]);
    const countryList = globalParams.negara;
    const cityNameList = globalParams.kotaIndonesia;

    function filterCountry(val, update) {
      update(() => {
        const needle = val.toLowerCase();
        filteredCountryList.value = countryList.filter(
          (option) => option.label.toLowerCase().indexOf(needle) > -1
        );
      });
    }

    function filterCity(val, update) {
      update(() => {
        const needle = val.toLowerCase();
        filteredCityList.value = cityNameList.filter(
          (option) => option.label.toLowerCase().indexOf(needle) > -1
        );
      });
    }

    return {
      cart,
      filteredCountryList,
      filteredCityList,
      filterCountry,
      filterCity,
    };
  },
  data() {
    return {
      caraPembayaran: ref(false),
      carts: ref([]),
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
      user: JSON.parse(localStorage.getItem(env.USER_STORAGE_NAME)),
      showPopup: ref(false),
      taxes: ref([]),
      cartClass: new Cart(),
      dateInput: ref(),
      dateInputLabel: ref(),
      dateLabel: ref(new Date().toISOString()),
      paymentMethod: ref(),
      ticketTotal: ref(0),
      checkoutTotal: ref(0),
      totalTagihan: ref(0),
      instances: ref([
        {
          label: "Bank BJB",
          value: "BJB",
          icon: [logobjb],
        },
        {
          label: "Bank BCA",
          value: "BCA",
          icon: [logobca],
        },
        {
          label: "Bank Mandiri",
          value: "MANDIRI",
          icon: [logomandiri],
        },
        {
          label: "Bank BNI",
          value: "BNI",
          icon: [logobni],
        },
      ]),
      // PaketAutomated: ref([]),
      // cartStore: ref([]),
      // cartData: ref([]),
      TemuItem: ref([]),
    };
  },
  mounted() {
    this.filteredCountryList = this.countryList;
    this.filteredCityList = this.cityNameList;
    this.setCartData().then(() => {
      this.validateCartData();
      this.countTagihan();
    });
    this.socketConnection();
    // this.setDate();
    // this.setCartData();
    let info = sessionStorage.getItem("TemuItem");
    this.TemuItem = JSON.parse(info);
    this.dateInput = this.TemuItem.datetime;
  },
  // computed: {
  // // Menggabungkan cartStore dan PaketAutomated
  // allItems() {
  //   let allItems = [...this.cartStore]; // Salin cartStore

  //   // Jika PaketAutomated adalah array dan memiliki item
  //   if (
  //     Array.isArray(this.PaketAutomated) &&
  //     this.PaketAutomated.length > 0
  //   ) {
  //     // Ambil item dari PaketAutomated
  //     const paketItem = this.PaketAutomated[0]; // Ambil item pertama dari array
  //     // Tambahkan quantity dan price dari PaketAutomated ke allItems
  //     allItems.push({
  //       name: paketItem.titleBig, // Atau ambil dari titleMedium
  //       price: paketItem.price,
  //       quantity: paketItem.quantity,
  //       // Tambahkan properti lain jika diperlukan
  //     });
  //   }

  //   return allItems;
  // },
  // Menghitung total quantity
  // ticketTotal() {
  //   return this.allItems.reduce((total, item) => total + item.quantity, 0);
  // },
  // // Menghitung total checkout
  // checkoutTotal() {
  //   return this.allItems.reduce(
  //     (total, item) => total + item.quantity * item.price,
  //     0
  //   );
  // },
  // Menghitung total tagihan (checkoutTotal + pajak/biaya transaksi)
  // totalTagihan() {
  //   let total = this.checkoutTotal;
  //   // Tambahkan biaya pajak jika ada
  //   for (let tax of this.taxes) {
  //     total += this.formatTax(tax);
  //   }
  //   return total;
  // },
  // },

  watch: {
    dateInput(newVal) {
      this.dateInputLabel =
        newVal.split("T")[0] + " Pukul " + newVal.split("T")[1].slice(0, 5); // Update label dengan nilai yang dipilih
    },
  },

  beforeUnmount() {
    this.storeCartToDatabase();
  },
  methods: {
    socketConnection() {
      socket.connect();
      socket.on("tiket", () => {
        this.validateCartData();
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
    // setDate() {
    //   const date = new Date().toISOString();
    //   this.dateInput = date;
    // },
    async storeCartToDatabase() {
      this.cartClass.updateToDB();
    },
    async setCartData() {
      try {
        const rawCart = Object.values(this.cartClass.getTempItem());
        const paramResponse = await this.$api.get("param/checkout", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (paramResponse.status === 200)
          this.taxes = paramResponse.data.data.data.nonCash.filter(
            (data) => data.paidBy === "user"
          );

        this.carts = rawCart.map((cart) => {
          console.log(cart.price);
          this.ticketTotal += cart.quantity;
          this.checkoutTotal += cart.price * cart.quantity;
          return cart;
        });
      } catch (err) {
        console.log(err);
      }
      // const rawCart = Object.values(this.cartClass.getItem());
      // if (rawCart.length < 1) {
      //   const response = await this.$api.get("cart", {
      //     headers: {
      //       Authorization: `Bearer ${this.token}`,
      //     },
      //   });

      //   if (response.status != 200) throw Error(response.data.message);
      //   rawCart = response.data.data;
      // }
      // const paramResponse = await this.$api.get("param/checkout", {
      //   headers: {
      //     Authorization: `Bearer ${this.token}`,
      //   },
      // });
      // if (paramResponse.status === 200)
      //   this.taxes = paramResponse.data.data.data.nonCash.filter(
      //     (data) => data.paidBy === "user"
      //   );

      // this.carts = rawCart.map((cart) => {
      //   this.ticketTotal += cart.quantity;
      //   this.checkoutTotal += cart.price * cart.quantity;
      //   return cart;
      // });
    },
    async validateCartData() {
      try {
        const response = await this.$api.post("cart/validate", {
          carts: this.carts,
        });
        if (response.status != 200) throw Error(response.data.message);
        this.carts = response.data.data;
        this.cartClass.setNewData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    },
    formatTax(tax) {
      return tax.multiply
        ? this.checkoutTotal * tax.tax
        : this.checkoutTotal + tax.tax;
    },
    // changeQuantity(type, action, index) {
    //   // Access the cart item by index
    //   if (type !== "auto") {
    //     let cartItem = this.cartStore[index];
    //     if (action === "min" && cartItem.quantity > 0) {
    //       // Decrease quantity, but ensure it doesn't go below 0
    //       cartItem.quantity--;
    //     } else if (action === "plus") {
    //       // Increase quantity
    //       cartItem.quantity++;
    //     }
    //     // Update the cartStore array with the new quantity
    //     this.cartStore.splice(index, 1, cartItem);
    //   } else {
    //     let cartItem = this.PaketAutomated[index];
    //     if (action === "min" && cartItem.quantity > 0) {
    //       // Decrease quantity, but ensure it doesn't go below 0
    //       cartItem.quantity--;
    //     } else if (action === "plus") {
    //       // Increase quantity
    //       cartItem.quantity++;
    //     }
    //     // Update the cartStore array with the new quantity
    //     this.PaketAutomated.splice(index, 1, cartItem);
    //   }

    //   // Optionally, save the updated cartStore back to sessionStorage
    //   sessionStorage.setItem(
    //     "Temp_Cart_Temu",
    //     JSON.stringify({
    //       storedData: this.cartStore,
    //       PaketAutomated: this.PaketAutomated,
    //     })
    //   );
    // },
    async checkOut() {
      let plannedDate = this.dateInput;
      try {
        // if (!this.dateInput.split("T")[1]) {
        //   const rawDateConvert = this.dateInput + ":00+00:00"; //Used to convert date
        //   plannedDate = new Date(rawDateConvert).toISOString();
        // }
        const sendedCart = this.carts.map((cart) => ({
          id: cart.id,
          name: cart.name,
          price: cart.price,
          quantity: cart.quantity,
          type: cart.type,
          ...(cart.cityName && { cityName: cart.cityName.value }),
          ...(cart.nationalityId && {
            nationalityId: cart.nationalityId.value,
          }),
        }));

        const response = await this.$api.post(
          "/trans/janji",
          {
            temp_cart: sendedCart,
            temp_user_data: this.TemuItem,
            method: this.paymentMethod,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status != 200) throw Error(response.data.message);
        this.showNotif("Transaksi sukses", "success");
        this.cartClass.clearCart().updateItem();
        this.$router.replace("/user/transaction");
      } catch (err) {
        this.showNotif(
          err.response ? err.response.data.message : err.message,
          "error"
        );
        console.log(err);
      }
    },
    countTagihan() {
      let taxTotal = 0;
      for (let tax of this.taxes)
        taxTotal += tax.multiply ? this.checkoutTotal * tax.tax : tax.tax;
      this.totalTagihan = this.checkoutTotal + taxTotal;
    },
    formatRupiah(price) {
      if (price === 0) return "Free";
      return (price / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 3,
      });
    },
    handleCategoryChange() {
      this.cart.nationalityId = null;
      this.cart.cityName = null;
    },
    payWith(indicator) {
      this.paymentMethod = indicator.value;
      this.caraPembayaran = false; //Clos Payment Mehod Pop Up
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

div {
  font-family: Raleway;
}

.title-checkout {
  font-size: 1rem;
}

.sticky-container {
  display: flex;
  flex-direction: column;
  width: 20rem; /* Adjust based on desired width */
}

.sticky-div {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  z-index: 100;
}

@media screen and (max-width: 1200px) {
  .title-checkout {
    font-size: 1rem;
    width: 14rem;
  }

  .card-item {
    overflow-x: auto;
    flex-wrap: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
    height: 15rem;
  }
}
</style>
