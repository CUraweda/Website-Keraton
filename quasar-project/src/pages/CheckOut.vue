<template>
  <nav>
    <navbar border />
  </nav>
  <div class="body">
    <div class="group1">
      <div class="pesan-tiket-langsung">
        <div class="txt-pesan-tiket-langsung">
          <h4>Pesan Tiket Langsung</h4>
        </div>
      </div>
      <div class="group2">
        <div class="icon-group2">
          <img src="../assets/svg/Frame.svg" alt="" />
        </div>
        <div class="txt-group1">
          <h6>Pastikan pesanan Anda BENAR sebelum checkout ya!</h6>
        </div>
      </div>

      <div class="container">
        <div id="detailPemesanan">
          <div class="atas">
            <div class="icon">
              <img src="../assets/svg/account.svg" alt="" />
            </div>
            <div class="txt-group17">
              <p>Detail Pemesanan</p>
            </div>
          </div>

          <div class="nama">
            <div class="john-doe">
              <h6>John Doe</h6>
            </div>
            <div class="johndoe">
              <h6>- (johndoe01@keraton.com)</h6>
            </div>
          </div>
          <div class="pilih-kategori">
            <div class="atas">
              <div class="icon">
                <img src="../assets/svg/Framecard.svg" alt="" />
              </div>
              <div class="txt-group17">
                <p>Pilih Kategori</p>
              </div>
            </div>
            <div class="radioBtn">
              <div class="umum">
                <label class="custom-radio-btn">
                  <input type="radio" name="pilih-kategori" id="umum" checked />
                  <span class="checkmark"></span>
                </label>
                <label for="umum">Umum</label>
              </div>
              <div class="pelajar">
                <label class="custom-radio-btn">
                  <input type="radio" name="pilih-kategori" id="pelajar" />
                  <span class="checkmark"></span>
                </label>
                <label for="pelajar">Pelajar</label>
              </div>
              <div class="mancanegara">
                <label class="custom-radio-btn">
                  <input type="radio" name="pilih-kategori" id="mancanegara" />
                  <span class="checkmark"></span>
                </label>
                <label for="mancanegara">Mancanegara</label>
              </div>
            </div>
          </div>
          <div class="detail-tiket">
            <div class="atas">
              <div class="icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M25 16C24.9998 16.9221 25.3182 17.816 25.9014 18.5303C26.4845 19.2447 27.2965 19.7356 28.2 19.92C28.4257 19.9661 28.6285 20.0886 28.7743 20.2669C28.92 20.4453 28.9998 20.6684 29 20.8988V24C29 24.2652 28.8946 24.5196 28.7071 24.7071C28.5196 24.8946 28.2652 25 28 25H12V7H28C28.2652 7 28.5196 7.10536 28.7071 7.29289C28.8946 7.48043 29 7.73478 29 8V11.1012C28.9998 11.3316 28.92 11.5547 28.7743 11.7331C28.6285 11.9114 28.4257 12.0339 28.2 12.08C27.2965 12.2644 26.4845 12.7553 25.9014 13.4697C25.3182 14.184 24.9998 15.0779 25 16Z"
                    fill="#DAA520"
                  />
                  <path
                    d="M28.3988 13.06C28.8505 12.9681 29.2567 12.7229 29.5484 12.366C29.8402 12.009 29.9998 11.5623 30 11.1012V8C30 7.46957 29.7893 6.96086 29.4142 6.58579C29.0391 6.21071 28.5304 6 28 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21072 6.96086 2 7.46957 2 8V11.1012C2.00026 11.5623 2.15977 12.009 2.45156 12.366C2.74335 12.7229 3.14949 12.9681 3.60125 13.06C4.27676 13.2001 4.88335 13.5687 5.31883 14.1038C5.75431 14.6388 5.99208 15.3076 5.99208 15.9975C5.99208 16.6874 5.75431 17.3562 5.31883 17.8912C4.88335 18.4263 4.27676 18.7949 3.60125 18.935C3.14865 19.0271 2.74186 19.273 2.44998 19.631C2.15809 19.9889 1.9991 20.4369 2 20.8988V24C2 24.5304 2.21072 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H28C28.5304 26 29.0391 25.7893 29.4142 25.4142C29.7893 25.0391 30 24.5304 30 24V20.8988C29.9998 20.4377 29.8402 19.9909 29.5484 19.634C29.2567 19.2771 28.8505 19.0319 28.3988 18.94C27.7232 18.7999 27.1167 18.4313 26.6812 17.8962C26.2457 17.3612 26.0079 16.6924 26.0079 16.0025C26.0079 15.3126 26.2457 14.6438 26.6812 14.1088C27.1167 13.5737 27.7232 13.2051 28.3988 13.065V13.06ZM4 20.9C5.12962 20.6699 6.14502 20.0565 6.8743 19.1637C7.60358 18.2708 8.00194 17.1534 8.00194 16.0006C8.00194 14.8478 7.60358 13.7304 6.8743 12.8376C6.14502 11.9448 5.12962 11.3314 4 11.1012V8H11V24H4V20.9ZM28 20.9V24H13V8H28V11.1C26.8704 11.3301 25.855 11.9435 25.1257 12.8363C24.3964 13.7292 23.9981 14.8466 23.9981 15.9994C23.9981 17.1522 24.3964 18.2696 25.1257 19.1624C25.855 20.0552 26.8704 20.6686 28 20.8988V20.9Z"
                    fill="#DAA520"
                  />
                </svg>
              </div>
              <div class="txt-group17">
                <p>Detail Tiket</p>
              </div>
            </div>
            <div class="date">
              <fieldset class="my-fieldset" @click.stop="focusInput">
                <legend class="my-legend">
                  <div class="tgl">
                    <small>Tanggal Pemesanan</small>
                  </div>
                </legend>
                <div class="test">
                  <input
                    type="date"
                    name=""
                    id="tanggalPemesanan"
                    :value="tanggalSekarang"
                    disabled
                  />
                  <div class="icon-date">
                    <img src="../assets/svg/Icondate.svg" alt="" />
                  </div>
                </div>
              </fieldset>
              <div class="supporting-text">
                <div class="supporting-txt">
                  <small>MM/DD/YY</small>
                </div>
              </div>
            </div>
            <div class="detail-tiket-masuk">
              <div class="nama-tiket">
                <h6>Tadarus di Langgar Alit</h6>
              </div>
              <div class="harga-tiket">
                <h6>Rp. {{ hargaStringTiket }}</h6>
              </div>
            </div>

            <div class="btn-tiket">
              <div class="">
                <button class="min" @click="kurang">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1512_471)">
                      <path
                        class="path"
                        d="M3.33398 7.33337H12.6673V8.66671H3.33398V7.33337Z"
                        fill="#B0BEC5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1512_471">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div class="count">
                <p>{{ count }}</p>
              </div>
              <div class="">
                <button class="plus" @click="tambah">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1512_477)">
                      <path
                        class="path"
                        d="M7.33398 7.33337V3.33337H8.66732V7.33337H12.6673V8.66671H8.66732V12.6667H7.33398V8.66671H3.33398V7.33337H7.33398Z"
                        fill="#B0BEC5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1512_477">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div class="pembayaran">
              <payment />
            </div>
          </div>
        </div>
        <div id="ringkasanBooking" :class="{ 'scroll-active': isScrollActive }">
          <h5>Ringkasan Booking</h5>
          <div class="totalPemesanan">
            <h6>Total Pemesanan</h6>
            <div class="totalHarga">
              <p>Total Harga ({{ count }} Tiket)</p>
              <p class="harga">Rp. {{ hargaString }}</p>
            </div>
          </div>
          <div class="biaya">
            <div class="biayaTransaksi">
              <h6>Biaya Transaksi</h6>
              <div class="totalHarga">
                <p>Biaya Layanan</p>
                <p class="harga">Rp. {{ layananString }}</p>
              </div>
              <div class="totalHarga">
                <p>Biaya Jasa Aplikasi</p>
                <p class="harga">Rp. {{ jasaAppString }}</p>
              </div>
            </div>
          </div>
          <hr />
          <div class="totalTagihan">
            <h5 class="txt-total-tagihan">Total Tagihan</h5>
            <h6 class="harga">Rp.{{ totalPemesanan }}</h6>
          </div>
          <div class="containerbtn">
            <button class="btn">
              <div class="btn-checkout">
                <div class="txt-checkout">
                  <p>Checkout</p>
                </div>
                <p><img src="../assets/svg/arrow-btn-checkout.svg" alt="" /></p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@500&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@500&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

.body {
  width: 1280px;
  height: 906px;
  margin-top: 146px;
}

nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #ffffff;
  z-index: 1000;
}

.custom-radio-btn {
  width: 20px;
  height: 20px;
  border: 2px solid goldenrod;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-radio-btn .checkmark {
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  background-color: goldenrod;
  border-radius: 50%;
  display: inline-block;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.custom-radio-btn input {
  display: none;
}

.custom-radio-btn input:checked + .checkmark {
  display: inline-block;
  opacity: 1;
}

.container {
  display: flex;
}

.group1 {
  /* top: 146px; */
  margin-top: 42px;
  position: relative;
}

.group2 {
  display: flex;
  text-align: center;
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;
}

.icon-group2 {
  margin-left: 108px;
}

.txt-group2 {
  width: 495px;
  height: 28px;
  top: 203px;
  left: 144px;
}

.txt-group1 h6 {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}

.pesan-tiket-langsung {
  width: 305px;
  height: 40px;
  margin-left: 88px;
  margin-top: 42px;
}

.txt-pesan-tiket-langsung h4 {
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  color: #000000;
  font-family: "Raleway";
}

#detailPemesanan {
  width: 522px;
  height: 582px;
  margin-left: 88px;
  top: 295px;
  margin-top: 64px;
  margin-right: 40px;
  right: 670px;
  gap: 37px;
  background: none;
}

.group17 {
  width: 346px;
  height: 62px;
}

.atas {
  align-items: center;
  display: flex;
  gap: 6px;
}

.pembayaran {
  margin-top: 37px;
  align-items: center;
  display: flex;
  gap: 6px;
}

.txt-group17 {
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.txt-group17 p {
  width: 135px;
  height: 24px;
  left: 38px;
  color: #5e5e5e;
}

.nama {
  display: flex;
  align-items: center;
  text-align: center;
}

.john-doe {
  width: 90px;
  height: 28px;
  top: 34px;
}

.john-doe h6 {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}

.johndoe {
  width: 252px;
  height: 28px;
  top: 34px;
  left: 94px;
}

.johndoe h6 {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}

.pilih-kategori {
  margin-top: 37px;
  width: 476px;
  height: 82px;
}

.radioBtn {
  display: flex;
  gap: 27px;
  margin-top: 18px;
}

input[type="radio"] {
  width: 24px;
  height: 24px;
  background-color: #daa520;
  cursor: pointer;
}

.umum {
  display: flex;
  justify-content: center;
  width: 122px;
  height: 48px;
  top: 133px;
  padding: 12px, 20px, 12px, 20px;
  margin-right: 27px;
}

.pelajar {
  justify-content: center;
  display: flex;
  width: 125px;
  height: 48px;
  top: 133px;
  left: 149px;
  padding: 12px, 20px, 12px, 20px;
  margin-right: 27px;
}

.mancanegara {
  justify-content: center;
  display: flex;
  width: 175px;
  height: 48px;
  top: 133px;
  left: 301px;
  padding: 12px, 20px, 12px, 20px;
}

.umum,
.pelajar,
.mancanegara,
label {
  font-family: "Manrope";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 10px;
  color: #212121;
  cursor: pointer;
  height: 20px;
}

.detail-tiket {
  margin-top: 37px;
  width: 375px;
  height: 256px;
  border-radius: 4px, 4px, 0px, 0px;
}

.date {
  color: #999999;
  opacity: 0.5;
}
.icon-date {
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.test {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
fieldset {
  width: 312px;
  height: 66px;
  top: 266px;
  border: 1.5px solid #999999;
  opacity: 0.5;
  border-radius: 4px;
  /* color: #999999; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  font-family: "Roboto";
}

legend {
  display: flex;
  height: 16px;
  padding-left: 4px;
  padding-right: 4px;
  margin-left: 16px;
  margin-top: 12px;
}
input[type="date"] {
  width: 248px;
  height: 48px;
  padding: 4px 0px 4px 0px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-align: left;
  border: none;
  background: transparent;
  margin-left: 16px;
  margin-top: 4px;
  margin-bottom: 4px;
}

input[type="date"]:focus {
  outline: none;
}

.supporting-text {
  width: 312px;
  height: 20px;
  padding: 4px, 16px, 0px, 16px;
  gap: 10px;
  color: #999999;
}

.supporting-txt {
  width: 280px;
  height: 16px;
}

.supporting-txt small {
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 16px;
}

.nama-tiket {
  width: 375px;
  height: 28px;
  top: 370px;
}

.nama-tiket h6 {
  margin-top: 10px;
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
}

.harga-tiket {
  width: 200px;
  height: 28px;
  top: 402px;
}

.harga-tiket h6 {
  margin-top: 4px;
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
}

.btn-tiket {
  margin-top: 20px;
  align-items: center;
  display: flex;
  gap: 5px;
}

.btn-tiket p {
  width: 30px;
  height: 22px;
  font-family: "Manrope";
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
}

.min {
  width: 24px;
  height: 24px;
  border: 1.5px solid #d5d5d5;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plus {
  width: 24px;
  height: 24px;
  border: 1.5px solid #d5d5d5;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d5d5d5;
}
.min:hover,
.plus:hover {
  border: none;
  background-color: #000000;
  cursor: pointer;
}
.min:hover .path {
  fill: white;
}
.plus:hover .path {
  fill: white;
}

#ringkasanBooking {
  width: 542px;
  height: 348px;
  margin-right: 88px;
  margin-left: 98px;
  top: 295px;
  position: static;
  margin-top: 64px;
  left: 650px;
  border-radius: 15px;
  /* padding: 20px, 23px,20px, 23px; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  gap: 8px;
  background-color: #ffffff;
}

.scroll-active #ringkasanBooking {
  position: fixed;
  top: 0;
}

.btn {
  width: 542px;
  top: 295px;
  left: 650px;
  height: 43.93px;
  margin-top: 22px;
  padding: 5px;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background-color: #daa520;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  cursor: pointer;
}

.btn:hover {
  background-color: #ffc122;
}

.containerbtn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;
}

.btn-checkout {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.txt-checkout {
  margin-left: 10px;
  width: 74px;
  height: 24px;
}

.txt-checkout p {
  color: white;
  font-size: 16px;
  font-weight: 700;
  font-family: "Raleway";
}

h5 {
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  font-family: "Raleway";
  color: #000000;
}

.totalPemesanan {
  padding-top: 20px;
}

h6 {
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  color: #000000;
  font-family: "Raleway";
}

.totalTagihan {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}

.txt-total-tagihan {
  font-family: "Raleway";
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
}

.totalHarga {
  width: 496px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-family: "Raleway";
  color: #000000;
}

.biaya {
  width: 496px;
  height: 122px;
  padding: 15px, 0px, 15px, 0px;
}

hr {
  margin-top: 15px;
}

.biayaTransaksi {
  margin-top: 8px;
  padding-top: 20px;
}

@media only screen and (max-width: 1280px) {
  #ringkasanBooking {
    margin-left: 0px;
  }
}

@media screen and (min-width: 1440px) {
  #ringkasanBooking {
    margin-left: 188px;
  }
}
@media screen and (max-width: 1200px) {
  .container {
    flex-direction: column;
  }

  #ringkasanBooking {
    margin-top: 20px;
    margin-left: 230px;
  }
  #detailPemesanan {
    margin-left: 230px;
  }
}
</style>

<script setup>
import { ref, computed } from "vue";
import navbar from "../components/NavBar.vue";
import payment from "../components/PembayaranComponent.vue";
import SelectPopup from "../components/SelectPopup.vue";

const selectPopup = ref(null);

const count = ref(1);
const layanan = 2500;
const jasaApp = 1000;
const harga = ref(10000);

const hargaTiket = harga.value.toLocaleString("id-ID", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const hargaStringTiket = ref(hargaTiket);

const hargaString = ref(harga.value.toLocaleString("id-ID"));
const layananString = layanan.toLocaleString("id-ID");
const jasaAppString = jasaApp.toLocaleString("id-ID");

const totalPemesanan = computed(() =>
  (harga.value + layanan + jasaApp).toLocaleString("id-ID")
);

const tambah = () => {
  count.value++;
  harga.value = 10000 * count.value;
  hargaString.value = harga.value.toLocaleString("id-ID");
};

const kurang = () => {
  if (count.value > 1) {
    count.value--;
    harga.value = 10000 * count.value;
    hargaString.value = harga.value.toLocaleString("id-ID");
  }
};
const tanggalSekarang = new Date().toISOString().substr(0, 10);

const focusInput = () => {
  const input = document.getElementById("tanggalPemesanan").focus();
  input.focus();
  input.click();
};
</script>
