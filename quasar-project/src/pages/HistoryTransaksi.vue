<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";

const detail = ref(false);
const cara = ref(false);
const selectedStatus = ref("sudahDigunakan");
const statusSelected = ref(false);

const openDetailTransaksi = () => {
  detail.value = !detail.value;
};

const closeDetailTransaksi = () => {
  detail.value = false;
};

const openMenungguPembayaran = () => {
  cara.value = !cara.value;
};

const closeMenungguPembayaran = () => {
  cara.value = false;
};

const transactions = [
  {
    status: "sudahDigunakan",
    label: "Sudah digunakan",
    class: "sudah__digunakan",
    cardClass: "card-1",
    actions: [
      { label: "Lihat detail transaksi", handler: openDetailTransaksi },
      { label: "|" },
      { label: "Bantuan", handler: null }, // Handler bisa diisi sesuai kebutuhan
    ],
  },
  {
    status: "dapatDigunakan",
    label: "Dapat digunakan",
    class: "dapat__digunakan",
    cardClass: "card-2",
    actions: [
      { label: "Lihat detail transaksi", handler: openDetailTransaksi },
      { label: "|" },
      { label: "Bantuan", handler: null }, // Handler bisa diisi sesuai kebutuhan
    ],
  },
  {
    status: "expired",
    label: "Expired",
    class: "expired",
    cardClass: "card-3",
    actions: [
      { label: "Lihat detail transaksi", handler: openDetailTransaksi },
      { label: "|" },
      { label: "Bantuan", handler: null }, // Handler bisa diisi sesuai kebutuhan
    ],
  },
  {
    status: "menungguPembayaran",
    label: "Menunggu pembayaran",
    class: "menunggu__pembayaran",
    cardClass: "card-4",
    actions: [
      { label: "Lihat detail", handler: openDetailTransaksi },
      { label: "|" },
      { label: "Cara Pembayaran", handler: openMenungguPembayaran },
    ],
  },
];
</script>

<template>
  <div class="all-content">
    <div>
      <nav class="navbar">
        <NavBar border />
      </nav>
      <div class="content">
        <div>
          <h1 class="title">History transaksi</h1>
        </div>
        <div class="container">
          <div class="form-input">
            <div class="search">
              <label for="search" class="search-label">
                <img src="../assets/svg/search.svg" class="search-icon" />
                <input
                  type="search"
                  v-model="searchQuery"
                  id="search"
                  name="search"
                  placeholder="Cari transaksi"
                  class="Pencarian"
                />
              </label>
            </div>
            <div class="date">
              <input
                value="Pilih tanggal"
                type="date"
                class="tanggal"
                placeholder="Pilih tanggal"
              />
            </div>
            <div class="status">
              <select
                name="Status"
                placeholder="status"
                value="Status"
                v-model="selectedStatus"
                @change="statusSelected = true"
                class="custom-select"
              >
                <option value="sudahDigunakan">Sudah digunakan</option>
                <option value="dapatDigunakan">Dapat digunakan</option>
                <option value="expired">Expired</option>
                <option value="menungguPembayaran">Menunggu pembayaran</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="transaction in transactions"
        :key="transaction.status"
        class="tabel"
      >
        <div :class="transaction.cardClass">
          <div class="tiket">
            <div class="tiket__header-container">
              <img
                src="../assets/images/Vector.png"
                alt="icon-tiket"
                class="icon-tiket"
              />
              <p>Tiket</p>
              <label>17 Agu 2023</label>
              <p :class="transaction.class">{{ transaction.label }}</p>
            </div>
            <div class="tiket__content">
              <img src="../assets/images/img-1.jpg" alt="" />
              <div class="tiket__content-details">
                <h6>Tiket Masuk Keraton Kasepuhan Cirebon+Museum+...</h6>
                <div class="label">
                  <label class="labelharga">1 tiket x Rp. 10.000</label><br />
                  <label>+2 tiket lainnya</label>
                </div>
                <div class="total">
                  <div class="info">
                    <p class="total__belanja">Total belanja</p>
                    <p class="hrga">Rp. 33.500</p>
                  </div>
                  <div class="actions">
                    <a
                      v-for="(action, index) in transaction.actions"
                      :key="index"
                      @click="action.handler"
                      class="detail"
                    >
                      <p class="bantu">{{ action.label }}</p>
                    </a>
                    <a
                      href=""
                      class="bantuan"
                      v-if="transaction.status !== 'menungguPembayaran'"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- popup -->
      <section class="detail-transaksi" v-if="detail">
        <div class="popup">
          <div class="popup-content">
            <div class="header">
              <h1 class="p">Detail Transaksi</h1>
              <span class="close" @click="closeDetailTransaksi"
                ><img src="../assets/images/close.png" class="Icon"
              /></span>
            </div>
            <div class="isi">
              <small class="label-card1">Sudah digunakan</small>
              <div class="info__details">
                <div class="flex-container">
                  <div>
                    <h6>No. Transaksi</h6>
                    <p>INV/20230817/MPL/3721648145</p>
                  </div>
                  <div>
                    <h6>Tanggal Pembelian</h6>
                    <p>15 Agustus 2023, 10:00 WIB</p>
                  </div>
                </div>
                <h6 class="detailtiket">Detail tiket</h6>
                <div class="detail-tiket">
                  <img src="../assets/svg/gambarKraton.svg" alt="" />
                  <div class="info-detail-tiket">
                    <p>Tiket Masuk Keraton Kasepuhan (UMUM)</p>
                    <label class="harga">17 Agu 2023; 10:00; </label>
                    <label class="harga">1 x Rp. 10.000</label>
                  </div>
                </div>
                <div class="all-tiket">
                  <small
                    >Lihat semua tiket
                    <img src="../assets/svg/panahBawah.svg" alt=""
                  /></small>
                </div>
                <h6 class="info-pembayaran">Info pembayaran</h6>
                <div class="status-pembayaran">
                  <h6>Status pembayaran</h6>
                  <small>Berhasil</small>
                </div>
                <div class="pemesan">
                  <h6>Pemesan</h6>
                  <p>John Doe<label>/johndoe@keraton.com</label></p>
                </div>
                <div class="metode-pmbayaran">
                  <h6>Metode Pembayaran</h6>
                  <p>BJB Virtual Account</p>
                </div>
                <div class="total-harga-3-Tiket">
                  <h6>Total Harga(3 Tiket)</h6>
                  <p>Rp. 30.000</p>
                </div>
                <div class="biaya-layanan">
                  <h6>Biaya Layanan</h6>
                  <p>Rp. 3.500</p>
                </div>
                <div class="line"></div>
                <div class="total-biaya">
                  <h6>Total Biaya</h6>
                  <p>Rp. 33.500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="detail-transaksi" v-if="cara">
        <div class="popup">
          <div class="popup-content">
            <div class="header">
              <h1 class="p">Cara Pembayaran</h1>
              <span class="close" @click="closeMenungguPembayaran"
                ><img src="../assets/images/close.png" class="Icon"
              /></span>
            </div>
            <div class="isi">
              <div class="bjb">
                <h4>BJB Virtual Account</h4>
                <img src="../assets/svg/GKL7_Bank BJB Logo.svg" alt="" />
              </div>
              <div class="nomor-virtual-account">
                <div class="nva">
                  <h6>Nomor Virtual Account</h6>
                  <h5>8883xxxxxxxxxx</h5>
                </div>
                <div class="clipboard">
                  <p>
                    Salin <img src="../assets/svg/ClipboardText.svg" alt="" />
                  </p>
                </div>
              </div>
              <div class="nomor-virtual-account">
                <div class="nva">
                  <h6>Total Pembayaran</h6>
                  <h5>Rp. 33.500</h5>
                </div>
                <div class="clipboard">
                  <p>
                    Salin <img src="../assets/svg/ClipboardText.svg" alt="" />
                  </p>
                </div>
              </div>
              <div class="steps">
                <div class="atm-bjb">
                  <h5>ATM BJB</h5>
                  <img src="../assets/svg/CaretDown.svg" alt="" />
                </div>
                <div class="mobile-banking-bjb">
                  <h5>Mobile Banking BJB</h5>
                  <img src="../assets/svg/CaretDown.svg" alt="" />
                </div>
                <div class="internet-banking-bjb">
                  <h5>Internet Banking BJB</h5>
                  <img src="../assets/svg/CaretDown.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

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
  width: 779px;
  height: fit-content;
  border-radius: 12px;
  box-shadow: 0 9px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Mengatur margin horizontal secara otomatis untuk memusatkan */
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
  justify-content: space-between; /* Mendorong elemen ke tepi kiri dan kanan */
}

.info {
  padding-top: 25px;
  display: flex;
  flex-direction: column; /* Menyusun paragraf total belanja dan harga secara vertikal */
  gap: 0.5rem; /* Jarak antara paragraf */
}

.actions {
  color: #333;
  padding-top: 45px;
  display: flex;
  gap: 0.5rem; /* Jarak antara paragraf */
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
  left: 15px; /* Sesuaikan posisi gambar */
  transform: translateY(-50%);
  width: 15px; /* Sesuaikan lebar gambar */
  height: auto; /* Sesuaikan tinggi gambar jika diperlukan */
}

.Pencarian {
  padding-left: 30px; /* Sesuaikan padding kiri agar input tidak tumpang tindih dengan gambar */
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

.flex-container > div {
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
  flex-direction: column; /* Menyusun elemen dalam satu kolom */
}

.info-detail-tiket p,
.info-detail-tiket label {
  margin-right: auto; /* Memindahkan teks ke pinggir kanan */
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
  background-image: repeating-linear-gradient(
    to right,
    #d9d9d9,
    #d9d9d9 7px,
    transparent 5px,
    transparent 10px
  );
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
