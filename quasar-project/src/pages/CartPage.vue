<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="all-content">
          <div>
            <nav class="navbar">
              <NavBar border />
            </nav>
            <q-page-sticky position="bottom-right" :offset="[18, 18]">
              <q-btn fab color="primary" to="/user/checkout">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                  fill="#e8eaed">
                  <path
                    d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                </svg>
              </q-btn>
            </q-page-sticky>
            <div class="content">
              <div>
                <h1 class="title">Keranjang</h1>
              </div>
            </div>
            <div v-for="(cart, i) in cartData" :key="cart.id" class="tabel">
              <div>
                <div class="tiket">
                  <div class="tiket__content">
                    <img :src="cart.image" :alt="i + 1" />
                    <div class="tiket__content-details">
                      <h6>{{ cart.name }}</h6>
                      <div class="label flex items-center justify-between">
                        <div>
                          <label class="labelharga">
                            Rp.
                            {{ formatRupiah(cart.price) }}
                          </label>
                          <br />
                        </div>
                        <div class="flex items-center q-gutter-md">
                          <button style="width: 1rem" @click="changeQuantity('plus', cart, i)">
                            +
                          </button>
                          <div>{{ cart.quantity }}</div>
                          <button style="width: 1rem" @click="changeQuantity('min', cart, i)">
                            -
                          </button>
                          <q-btn dense @click="removeItem(cart)">
                            <q-icon name="delete" />
                          </q-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

const cartClass = new carts();
export default {
  data() {
    return {
      cartData: ref([]),
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME)
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
        const rawCart = Object.values(cartClass.getItem());
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
        this.cartData = cartClass.removeItem([rowData]).userCart
        return cartClass.updateItem()
      } catch (err) {
        console.log(err);
      }
    },
    changeQuantity(indicator, rowData, indexData) {
      this.cartData[indexData].quantity = indicator != 'min' ? rowData.quantity + 1 : rowData.quantity - 1
      return this.changeStorageQuantity(this.cartData[indexData])
    },
    changeStorageQuantity(rowData) {
      try {
        const itemId = `${rowData.type}|${rowData.id}`
        this.cartData = cartClass.changeQuantity(itemId, rowData.quantity).userCart
        return cartClass.updateItem();
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

.bantu {
  color: #000000;
}

body {
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
}

.all-content {
  font-family: raleway;
}

.content {
  padding-top: 100px;
}

p.bantuan {
  color: #000000;
}

h1.title {
  text-align: center;
  margin-top: 50px;
  color: #333;
}

nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #ffffff;
  z-index: 1000;
}

.Pencarian {
  width: 246px;
  height: 48px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.tanggal {
  width: 247px;
  height: 48px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

select {
  width: 247px;
  padding: 12px;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  cursor: pointer;
}

option {
  padding: 10px;
  background-color: #ffffff;
  color: #333;
}

option:hover {
  background-color: #ddd;
}

option:selected {
  font-weight: bold;
}

.Pencarian::placeholder,
.tanggal::placeholder {
  color: #999;
}

img {
  width: 200px;
  height: 98.95px;
}

.tabel {
  width: fit-content;
  height: fit-content;
  border-radius: 12px;
  box-shadow: 0 9px 6px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-top: 48px;
  padding: 10px;
  margin-bottom: 23px;
}

.icon-tiket {
  width: 18px;
  height: 13px;
}

.form-input {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.container {
  text-align: center;
  margin-top: 50px;
}

.tiket__header-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.tiket__content {
  display: flex;
  gap: 1rem;
}

.tiket p {
  font-size: 16px;
  font-weight: 700;
  font: bold;
}

.tiket label {
  padding-left: 9px;
  font-size: 14px;
  line-height: 22px;
  color: #5e5e5e;
}

.tiket__content h6 {
  font-size: 20px;
  padding-top: 20px;
  line-height: 28px;
  padding-bottom: 10px;
}

p.sudah__digunakan {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #a9ffd6;
  color: #149b5a;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
}

p.dapat__digunakan {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #a9d1ff;
  color: #146a9b;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
}

p.expired {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #e4e4e4;
  color: #828180;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
}

p.menunggu__pembayaran {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #ffcda9;
  color: #9b5514;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
}

.tiket__content img {
  padding-left: 29px;
  margin-top: 13px;
  width: 215px;
  height: 98.95px;
}

.custom-select option {
  background-color: #f0f0f0;
  color: #333;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.custom-select option:hover {
  background-color: #007bff;
  color: #fff;
}

.label label {
  padding-right: 100px;
}

label.labelharga {
  font-weight: 400;
  line-height: 22px;
}

.total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Mendorong elemen ke tepi kiri dan kanan */
}

.info {
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  /* Menyusun paragraf total belanja dan harga secara vertikal */
  gap: 0.5rem;
  /* Jarak antara paragraf */
}

.actions {
  color: #333;
  padding-top: 45px;
  display: flex;
  gap: 0.5rem;
  /* Jarak antara paragraf */
}

.detail {
  color: #daa520;
  text-decoration: none;
  cursor: pointer;
}

.cara {
  cursor: pointer;
}

.search-label {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 15px;
  /* Sesuaikan posisi gambar */
  transform: translateY(-50%);
  width: 15px;
  /* Sesuaikan lebar gambar */
  height: auto;
  /* Sesuaikan tinggi gambar jika diperlukan */
}

.Pencarian {
  padding-left: 30px;
  /* Sesuaikan padding kiri agar input tidak tumpang tindih dengan gambar */
}

.bantuan {
  color: black;
  text-decoration: none;
  size: 16;
  font-weight: 400;
}

p.total__belanja {
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  padding-bottom: 1px;
}

p.hrga {
  font-size: 16px;
}

/* popup1 */

.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 999;
}

.popup-content {
  background-color: #fefefe;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 671px;
  height: 512px;
  overflow-x: auto;
  position: relative;
  overflow-y: hidden;
  max-height: calc(100vh - 100px);
}

.popup-content .isi {
  overflow-y: auto;
  max-height: calc(100vh - 340px);
}

.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.isi {
  padding: 30px;
  margin-left: 15px;
}

small.label-card1 {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #a9ffd6;
  color: #149b5a;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
}

.info__details {
  display: grid;
  grid-template-columns: 2 200px;
}

.header {
  box-shadow: 0 1px rgba(0, 0, 0, 0.2);
  background: white;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3.2rem;
}

.header h1 {
  font-weight: 700;
  z-index: 1000;
}

.Icon {
  width: 20px;
  height: 20px;
}

.info__details {
  display: flex;
  flex-direction: column;
}

.flex-container {
  padding-top: 15px;
}

.flex-container>div {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

.flex-container h6 {
  font-weight: 400;
  font-size: 20px;
}

.flex-container p {
  font-weight: 700;
  font-size: 16px;
}

.detail-tiket {
  align-items: center;
}

.detail-tiket h6 {
  font-size: 20px;
  font-weight: 700;
  padding-top: 25px;
}

.detail-tiket img {
  width: 158px;
  height: 71.72px;
  margin: 18px;
}

.info-detail-tiket p,
.info-detail-tiket label {
  display: flex;
  flex-direction: column;
}

.info-detail-tiket {
  display: flex;
  flex-direction: column;
  /* Menyusun elemen dalam satu kolom */
}

.info-detail-tiket p,
.info-detail-tiket label {
  margin-right: auto;
  /* Memindahkan teks ke pinggir kanan */
}

.info-detail-tiket label {
  background-color: white;
  color: hsl(0, 0%, 0%);
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
}

.info-detail-tiket p {
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
}

.detail-tiket {
  display: flex;
}

h6.detailtiket {
  font-size: 20px;
  font-weight: 700;
  padding-top: 30px;
}

.all-tiket img {
  width: 13.75px;
  height: 7.5px;
}

.all-tiket small {
  color: #daa520;
  font-weight: 700;
  font-size: 12px;
}

.info-pembayaran {
  font-size: 20px;
  font-weight: 700;
  padding-top: 35px;
  padding-bottom: 20px;
}

.status-pembayaran {
  display: flex;
  gap: 20rem;
  padding-bottom: 8px;
}

.status-pembayaran h6 {
  font-size: 20px;
  font-weight: 400;
  padding-right: 20px;
}

.status-pembayaran small {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #a9ffd6;
  color: #149b5a;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
}

.pemesan {
  display: flex;
  gap: 15.8rem;
  padding-top: 8px;
  padding-bottom: 8px;
}

.pemesan h6 {
  font-size: 20px;
  font-weight: 400;
}

.pemesan label {
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
}

.pemesan p {
  font-size: 16px;
  font-weight: 700;
}

.metode-pmbayaran {
  display: flex;
  gap: 14.5rem;
  padding-top: 8px;
  padding-bottom: 8px;
}

.metode-pmbayaran h6 {
  font-size: 20px;
  font-weight: 400;
}

.metode-pmbayaran p {
  font-size: 16px;
  font-weight: 700;
}

.total-harga-3-Tiket {
  display: flex;
  gap: 20rem;
  padding-top: 8px;
  padding-bottom: 8px;
}

.total-harga-3-Tiket h6 {
  font-size: 20px;
  font-weight: 400;
}

.total-harga-3-Tiket p {
  font-size: 16px;
  font-weight: 700;
}

.biaya-layanan {
  display: flex;
  gap: 23.5rem;
  padding-top: 8px;
  padding-bottom: 8px;
}

.biaya-layanan h6 {
  font-size: 20px;
  font-weight: 400;
}

.biaya-layanan p {
  font-size: 16px;
  font-weight: 700;
}

.line {
  height: 2px;
  width: 100%;
  margin: 20px auto;
  background-image: repeating-linear-gradient(to right,
      #d9d9d9,
      #d9d9d9 7px,
      transparent 5px,
      transparent 10px);
}

.total-biaya {
  display: flex;
  gap: 24.5rem;
}

.total-biaya h6 {
  font-size: 20px;
  font-weight: 700;
}

.total-biaya p {
  font-size: 16px;
  font-weight: 700;
}

/* popup2 */

.bjb {
  display: flex;
  gap: 14.5rem;
  font-size: 30px;
}

.bjb img {
  width: 57.24px;
  height: 28.05px;
}

.nomor-virtual-account {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nva {
  padding-top: 15px;
}

.nva h6 {
  font-size: 24px;
  font-weight: 400;
  color: #5e5e5e;
}

.nva h5 {
  font-size: 24px;
  padding-top: 5px;
}

.clipboard {
  padding-top: 30px;
  padding-right: 35px;
}

.clipboard img {
  width: 32px;
  height: 32px;
}

.clipboard p {
  font-weight: 700;
  display: inline-block;
  vertical-align: middle;
  color: #daa520;
}

.clipboard img {
  display: inline-block;
  vertical-align: middle;
}

.steps img {
  width: 32px;
  height: 32px;
}

.steps h5 {
  font-size: 24px;
  font-weight: 400;
}

.atm-bjb {
  padding-top: 40px;
  padding-bottom: 10px;
  display: flex;
  gap: 27rem;
  border-bottom: 1px solid #d0d5dd;
}

.mobile-banking-bjb {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  gap: 19.4rem;
  border-bottom: 1px solid #d0d5dd;
}

.internet-banking-bjb {
  padding-top: 10px;
  display: flex;
  gap: 18.8rem;
  border-bottom: 1px solid #d0d5dd;
}
</style>
