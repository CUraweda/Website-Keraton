<script setup>
import { ref, computed } from "vue";
import navbar from "../components/NavBar.vue";
import Payment from "../components/PembayaranComponent.vue";
import KreditPopup from "../components/kreditPopup.vue";
import SelectPopup from "../components/SelectPopup.vue";

const count = ref(1);
const layanan = 2500;
const jasaApp = 1000;
const harga = ref(10000);
const showPopup = ref(false);

const selectPopup = ref(null);

const focusinput = () => {
  const input = document.getElementById("showPopup");
  input.focus();
  input.click();
};

const showPopup1 = () => {
  showPopup.value = true;
};

const hargaTiket = harga.value.toLocaleString("id-ID", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});
const tanggalSekarang = new Date().toISOString().substr(0, 10);
const datelabel = ref(tanggalSekarang);

const hargaStringTiket = ref(hargaTiket);

const hargaString = computed(() => harga.value.toLocaleString("id-ID"));
const layananString = layanan.toLocaleString("id-ID");
const jasaAppString = jasaApp.toLocaleString("id-ID");

const totalPemesanan = computed(() =>
  (harga.value + layanan + jasaApp).toLocaleString("id-ID")
);

const tambah = () => {
  count.value++;
  harga.value = 10000 * count.value;
};

const kurang = () => {
  if (count.value > 1) {
    count.value--;
    harga.value = 10000 * count.value;
  }
};

const kreditPopup = ref(null);

const showSelectPopup = () => {
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};

const showkreditPopup = () => {
  kreditPopup.value.showKreditPopup();
};

defineExpose({
  showSelectPopup,
});
</script>

<style lang="css"></style>

<template>
  <div>
    <nav class="navbar">
      <navbar border />
    </nav>

    <div class="block1">
      <div class="title">
        <div class="header">Pesan Tiket Langsung</div>
        <div class="txt">
          <img src="../assets/svg/Frame.svg" />
          <div>
            <h6 class="pstikan">
              pastikan pesanan anda BENAR sebelum checkout ya!
            </h6>
          </div>
        </div>
      </div>
      <div class="component">
        <div>
          <div class="content-1">
            <div class="txt2">
              <img src="../assets/svg/account.svg" class="img-user" />
              <p class="det-pemesan">Detail Pemesan</p>
            </div>
            <div class="det-profil">
              <h6 class="nm-user">John Doe</h6>
              <h6 class="email-user">- (johndoe01@keraton.com)</h6>
            </div>
          </div>
          <div class="content-2">
            <!-- <div class="txt3">
              <img src="../assets/svg/Framecard.svg" />
              <p class="pil-kategori">Pilih Kategori</p>
            </div>
            <div class="btn-pilih">
              <div class="umum">
                <label class="custom-radio-btn">
                  <input type="radio" name="pilih-kategori" id="umum" />
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
            </div> -->
            <div class="content-3">
              <div class="txt4">
                <img src="../assets/svg/det-tiket.svg" class="img-det-tiket" />
                <p class="det-tiket">Detail Tiket</p>
              </div>
              <q-btn-dropdown
                flat
                outlined
                rounded
                class="text-capitalize dropdown-date rounded-btn q-pa-sm"
                :label="datelabel"
                icon="event"
                color
                style="border: 2px goldenrod solid; color: #daa520"
                dropdown-icon="arrow_drop_down"
              >
                <div>
                  <q-date v-model="datelabel" />
                </div>
              </q-btn-dropdown>
              <div>
                <div class="content-4">
                  <div>
                    <h6 class="tiket-masuk">
                      {{ cart.name }}
                    </h6>
                  </div>
                  <div>
                    <h6 class="hrg">Rp. {{ cart.price }}</h6>
                  </div>
                </div>
                <div class="tmbh-brg">
                  <div class="input-tiket1">
                    <button @click="kurang" class="kurang">
                      <img src="../assets/svg/iconKurang.svg" />
                    </button>
                    <p class="input-tiket2">{{ cart.quantity }}</p>
                    <button @click="tambah" class="tambah">
                      <img src="../assets/svg/iconTambah.svg" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="content-5">
                <!-- <payment /> -->
                <div class="payment">
                  <div class="atas">
                    <div class="icon">
                      <img src="../assets/svg/Framewallet.svg" alt="" />
                    </div>
                    <div class="txt-group17">
                      <p>Pilih Pembayaran</p>
                    </div>
                  </div>
                  <div class="select" @click.stop="focusinput">
                    <div class="svg-select">
                      <svg
                        class="danger"
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.79688 6.45313V3.28125C5.79688 3.16108 5.84462 3.04582 5.9296 2.96085C6.01457 2.87587 6.12983 2.82813 6.25 2.82813C6.37018 2.82813 6.48544 2.87587 6.57041 2.96085C6.65539 3.04582 6.70313 3.16108 6.70313 3.28125V6.45313C6.70313 6.57331 6.65539 6.68856 6.57041 6.77354C6.48544 6.85851 6.37018 6.90625 6.25 6.90625C6.12983 6.90625 6.01457 6.85851 5.9296 6.77354C5.84462 6.68856 5.79688 6.57331 5.79688 6.45313ZM12.1406 3.93545V8.06455C12.141 8.18361 12.1177 8.30155 12.0721 8.41152C12.0265 8.5215 11.9595 8.62131 11.875 8.70516L8.95516 11.625C8.87131 11.7095 8.7715 11.7765 8.66152 11.8221C8.55155 11.8677 8.43361 11.891 8.31455 11.8906H4.18545C4.0664 11.891 3.94846 11.8677 3.83848 11.8221C3.72851 11.7765 3.6287 11.7095 3.54485 11.625L0.625024 8.70516C0.540505 8.62131 0.473495 8.5215 0.427892 8.41152C0.382288 8.30155 0.358999 8.18361 0.35938 8.06455V3.93545C0.358999 3.8164 0.382288 3.69846 0.427892 3.58848C0.473495 3.47851 0.540505 3.3787 0.625024 3.29485L3.54485 0.375024C3.6287 0.290505 3.72851 0.223495 3.83848 0.177892C3.94846 0.132288 4.0664 0.108999 4.18545 0.10938H8.31455C8.43361 0.108999 8.55155 0.132288 8.66152 0.177892C8.7715 0.223495 8.87131 0.290505 8.95516 0.375024L11.875 3.29485C11.9595 3.3787 12.0265 3.47851 12.0721 3.58848C12.1177 3.69846 12.141 3.8164 12.1406 3.93545ZM11.2344 3.93545L8.31455 1.01563H4.18545L1.26563 3.93545V8.06455L4.18545 10.9844H8.31455L11.2344 8.06455V3.93545ZM6.25 7.8125C6.11557 7.8125 5.98416 7.85237 5.87239 7.92705C5.76062 8.00174 5.6735 8.10789 5.62206 8.23209C5.57061 8.35628 5.55715 8.49294 5.58338 8.62479C5.6096 8.75664 5.67434 8.87775 5.76939 8.9728C5.86445 9.06786 5.98556 9.13259 6.1174 9.15882C6.24925 9.18504 6.38591 9.17158 6.51011 9.12014C6.63431 9.0687 6.74046 8.98158 6.81514 8.86981C6.88983 8.75803 6.92969 8.62662 6.92969 8.49219C6.92969 8.31193 6.85808 8.13905 6.73062 8.01158C6.60315 7.88411 6.43027 7.8125 6.25 7.8125Z"
                          fill="#E32626"
                        />
                      </svg>
                    </div>

                    <div class="label-select">
                      <label for="">Anda belum memilih metode pembayaran</label>
                    </div>

                    <div @click="showPopup1" id="showPopup">
                      <svg
                        width="13"
                        height="8"
                        class="svg"
                        viewBox="0 0 13 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8354 1.5855L7.21055 7.21031C7.15831 7.26261 7.09628 7.30409 7.02799 7.3324C6.95971 7.36071 6.88652 7.37528 6.8126 7.37528C6.73868 7.37528 6.66548 7.36071 6.5972 7.3324C6.52892 7.30409 6.46688 7.26261 6.41464 7.21031L0.789838 1.5855C0.684294 1.47996 0.625 1.33681 0.625 1.18755C0.625 1.03829 0.684294 0.895138 0.789838 0.789594C0.895382 0.68405 1.03853 0.624756 1.18779 0.624756C1.33706 0.624756 1.4802 0.68405 1.58575 0.789594L6.8126 6.01715L12.0394 0.789594C12.0917 0.737334 12.1537 0.695879 12.222 0.667596C12.2903 0.639313 12.3635 0.624756 12.4374 0.624756C12.5113 0.624756 12.5845 0.639313 12.6528 0.667596C12.7211 0.695879 12.7831 0.737334 12.8354 0.789594C12.8876 0.841854 12.9291 0.903896 12.9574 0.972177C12.9856 1.04046 13.0002 1.11364 13.0002 1.18755C13.0002 1.26146 12.9856 1.33464 12.9574 1.40292C12.9291 1.4712 12.8876 1.53324 12.8354 1.5855Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- <SelectPopup ref="selectPopup" /> -->
                <div v-if="showPopup" class="popup">
                  <div class="popup-inner">
                    <div class="nav-popup">
                      <div class="txt-nav-popup">
                        <h6>Pilih Pembayaran</h6>
                      </div>
                      <div class="icon-close">
                        <span @click="closePopup"
                          ><img src="../assets/svg/Frameclose.svg"
                        /></span>
                      </div>
                    </div>
                    <div class="kredit">
                      <div class="txt-kredit-popup">
                        <h6>Kartu Kredit/Debit</h6>
                      </div>
                      <div class="icon-kredit">
                        <span @click="showkreditPopup"
                          ><img src="../assets/svg/FrameVector-Right.svg"
                        /></span>
                      </div>
                    </div>
                    <div class="kredit">
                      <div class="txt-kredit-popup">
                        <h6>Bank BJB</h6>
                      </div>
                      <div class="icon">
                        <img
                          src="../assets/svg/logobank.svg"
                          alt=""
                          class="image"
                        />
                        <span @click="toTransfer"
                          ><img
                            class="image"
                            src="../assets/svg/FrameVector-Right.svg"
                        /></span>
                      </div>
                    </div>
                    <div class="kredit">
                      <div class="txt-kredit-popup">
                        <h6>Cash</h6>
                      </div>
                      <div class="icon">
                        <span @click="toCash"
                          ><img
                            class="image"
                            src="../assets/svg/FrameVector-Right.svg"
                        /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <KreditPopup ref="kreditPopup" />
              </div>
            </div>
          </div>
        </div>
        <div id="ringkasanBooking">
          <h5>Ringkasan Booking</h5>
          <div class="totalPemesanan">
            <h6 class="ringkasan">Total Pemesanan</h6>
            <div class="totalHarga">
              <p>Total Harga ({{ count }} Tiket)</p>
              <p class="harga">Rp.{{ hargaString }}</p>
            </div>
          </div>
          <div class="biaya">
            <div class="biayaTransaksi">
              <h6 class="ringkasan">Biaya Transaksi</h6>
              <div class="totalHarga">
                <p>Biaya Layanan</p>
                <p class="harga">Rp.{{ layananString }}</p>
              </div>
              <div class="totalHarga">
                <p>Biaya Jasa Aplikasi</p>
                <p class="harga">Rp.{{ jasaAppString }}</p>
              </div>
            </div>
          </div>
          <hr />
          <div class="totalTagihan">
            <h5 class="txt-total-tagihan">Total Tagihan</h5>
            <h6 class="ringkasan">Rp.{{ totalPemesanan }}</h6>
          </div>
          <div class="containerbtn">
            <button class="btn">
              <div class="btn-checkout">
                <div class="txt-checkout">
                  <p class="text-center">Checkout</p>
                </div>
                <p style="margin: auto 0">
                  <img src="../assets/svg/arrow-btn-checkout.svg" alt="" />
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from 'stores/carts'
import cookieHandler from "src/cookieHandler";
import env from 'stores/environment'
const cartModel = new Cart()
export default {
  data() {
    return {
      carts: ref(),
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME)
    }
  },
  mounted() {
    this.setCartData().then(() => {
      this.validateCartData()
    })
  },
  methods: {
    async setCartData() {
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
    async validateCartData() {
      try {
        const response = await this.$api.post('cart/validate', {
          carts: this.carts
        })
        if (response.status != 200) throw Error(response.data.message)
        this.carts = response.data.data
      } catch (err) {
        console.log(err)
      }
    },
    async checkOut() {
      try {
        const response = await this.$api.post('trans/', {
          carts: this.carts,
          plannedData: "2024-05-24T07:02:31Z",
          method: "CASH"
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if(response.status != 200) throw Error(response.data.message)
        this.$router.replace(-1)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.block1 {
  width: 100%;
  padding: 120px 90px 0px;
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

.date {
  justify-content: center;
}

.pstikan {
  font-family: "Raleway";
  color: black;
  height: 28px;
  top: 203px;
  left: 144px;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background-image: url(../assets/svg/icon.svg);
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.plh-pembayaran {
  margin-top: 5px;
  margin-left: 6px;
  color: #5e5e5e;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.met-pembayaran {
  display: flex;
}

.content-5 {
  margin-top: 37px;
  width: 100%;
}

.input-tiket1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
}

.tmbh-brg {
  margin-top: 20px;
}

.tambah,
.kurang {
  width: 24px;
  height: 24px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.tmbh-brg {
  margin-top: 20px;
}

.tambah {
  border: solid 1.5px #b0bec5;
  color: #b0bec5;
  background-color: #ffffff;
  margin-left: 3%px;
}

.kurang {
  border: solid 1.5px #b0bec5;
  color: #b0bec5;
  background-color: #ffffff;
}

.tambah:hover,
.kurang:hover {
  border: none;
  color: #ffffff;
  background-color: #000000;
}

.tambah:hover img,
.kurang:hover img {
  filter: brightness(0) invert(1);
}

.input-tiket2 {
  color: #000000;
  font-family: "Manrope";
  font-weight: 600;
  font-size: 16px;
  line-height: 21.86px;
  margin: auto;
}

.hrg {
  margin-top: 4px;
  color: #000000;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}

.content-4 {
  margin-top: 28px;
}

.tiket-masuk {
  color: #000000;
  font-weight: 400;
  font-size: large;
  line-height: 28px;
}

.mm-dd-yyy {
  color: #49454f;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-left: 16px;
}

.tgl-pemesan {
  font-family: "Roboto";
  margin-bottom: -14px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #daa520;
}

fieldset {
  width: 312px;
  height: 56px;
  border: solid 3px;
  border-radius: 4px;
  gap: 10px;
  border-color: #daa520;
}

.date-tgl {
  border: none;
  font-family: "Roboto";
  background: transparent;
  font-size: 16px;
  width: 290px;
  height: 48px;
  line-height: 24px;
}

.date-tgl:focus {
  outline: transparent;
}

.content-3 {
  margin-top: 37px;
}

.txt4 {
  display: flex;
}

.det-tiket {
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 6px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5e5e5e;
}

.btn-pilih {
  margin-top: 6px;
  display: flex;
}

.umum,
.pelajar,
.mancanegara {
  display: flex;
  align-items: center;
}

.umum {
  margin-left: 27px;
  width: 122px;
  height: 48px;
  top: 133px;
  padding: 12px, 20px, 12px, 20px;
}

.pelajar {
  margin-left: 27px;
  width: 125px;
  height: 48px;
  top: 133px;
  left: 149px;
  padding: 12px, 20px, 12px, 20px;
}

.mancanegara {
  margin-left: 27px;
  width: 175px;
  height: 48px;
  top: 133px;
  left: 301px;
  padding: 12px, 20px, 12px, 20px;
}

input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: yellow;
}

label {
  color: black;
  margin-left: 10px;
}

.nav2 {
  align-items: center;
  position: absolute;
  width: 522px;
  height: 600px;
  top: 295px;
  left: 88px;
  gap: 37px;
}

.pil-kategori {
  color: #5e5e5e;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 5px;
  margin-left: 6px;
}

.email-user {
  color: black;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}

.det-profil {
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nm-user {
  font-family: "Raleway";
  color: black;
  width: 95px;
  height: 28px;
  top: 34px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
}

.det-pemesan {
  color: #5e5e5e;
  width: 128px;
  height: 24px;
  top: 4px;
  left: 38px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 5px;
  margin-left: 5px;
}

h1 {
  color: black;
}

body {
  background-color: white;
  font-family: "Raleway";
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
}

.txt-tiket {
  font-family: "Raleway";
  color: black;
  width: 305px;
  height: 40px;
  top: 146px;
  left: 88px;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
}

.title {
  position: relative;
  /* top: 146px;
  left: 88px; */
}

.image-koin {
  display: flex;
  margin: auto;
}

.img-user {
  display: flex;
}

.txt2 {
  display: flex;
}

.txt3 {
  display: flex;
}

.content-1 {
  padding-top: 50px;
  /* height: 62px; */
}

.content-2 {
  margin-top: 37px;
  /* width: 476px; */
  /* height: 82px; */
}

.txt {
  display: flex;
  margin-top: 13px;
}

.txt img {
  margin-right: 5px;
}

/* ...................................................................................... */
.text {
  /* width: 305px; */
  height: 40px;
  background-color: yellow;
  top: 14.6%;
  left: 88px;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  color: #000000;
}

#ringkasanBooking {
  margin-left: 40px;
  position: absolute;
  margin-right: 88px;
  width: 542px;
  height: 348px;
  top: 255px;
  left: 950px;
  border-radius: 15px;
  /* padding: 20px, 23px,20px, 23px; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  background-color: #ffffff;
}

.header {
  font-size: x-large;
}

@media (max-width: 900px) {
  #ringkasanBooking {
    position: relative;
    margin: 20px auto;
    width: auto;
    max-width: 100%;
    height: auto;
    top: auto;
    left: auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 20px;
    background-color: #ffffff;
  }
}

/* Responsif untuk layar dengan lebar maksimum 640px */
@media (max-width: 640px) {
  .header {
    font-size: x-large;
  }

  .pstikan {
    font-size: medium;
  }

  .block1 {
    width: 100%;
    padding: 200px 20px;
  }

  .content-5 {
    width: 100%;
  }

  .btn-pilih {
    display: block;
  }
}

.containerbtn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;
}

.btn {
  width: 100%;
  top: 295px;
  left: 650px;
  height: fit-content;
  margin-top: 22px;
  padding: 5px;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background-color: #daa520;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.btn-checkout {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.text-center {
  margin: auto;
  height: 100%;
}

.txt-checkout {
  margin-left: 10px;
  width: 74px;
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

.ringkasan {
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
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-family: "Raleway";
  color: #000000;
}

.biaya {
  width: 100%;
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

/*-------------> Laptop L <------------- */
@media screen and (min-width: 1440px) {
  #ringkasanBooking {
    margin-left: 100px;
  }
}

#showPopup {
  /* background-color: rebeccapurple; */
  align-items: center;
}

#showPopup .svg {
  text-align: right;
}

.atas {
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

.svg-select {
  margin: auto;
}

.select {
  background-color: #ffffff;
  /* padding-left: 20px;
  padding-bottom: 17.75px;
  padding-right: 20px;
  padding-top: 17.75px; */
  width: fit-content;
  height: 44.75px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.25);
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* .danger{
    align-items: center;
    margin: 7px;
  } */
}

@media (max-width: 900px) {
  .select {
    width: 100%;
  }
  .danger {
    margin-inline: 10px;
  }
  .svg-select {
    margin: 0%;
  }
}
.danger {
  margin-inline: 15px;
}

svg {
  margin-top: 1px;
}

label {
  font-size: 14px;
}

.svg {
  margin-inline: 15px;
}

/* selectpopup */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 25%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-inner {
  display: flex;
  background: #ffffff;
  width: 100%;
  height: 100%;
}

.popup-inner {
  background: #ffffff;
  width: 90%;
  max-width: 536px;
  height: auto;
  border-radius: 10px;
  margin: 0 auto;
}

.nav-popup {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 24px 30px;
  border-bottom: 1px solid #d0d5dd;
  align-items: center;
}

@media (max-width: 640px) {
  .popup-inner {
    padding: 24px;
  }

  .nav-popup {
    padding: 16px;
  }
}

.image {
  margin: auto 0;
  height: 100%;
}
.icon {
  padding: auto;
}

.popup-inner span:hover {
  cursor: pointer;
}

.txt-nav-popup h5 {
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
}

.icon-close {
  justify-content: right;
  margin: auto 0;
}

.kredit {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding-inline: 20px;
  border-bottom: 1px solid #d0d5dd;
  align-items: center;
}

.txt-kredit-popup h6 {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}

.transfer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding-inline: 20px;
  border-bottom: 1px solid #d0d5dd;
  align-items: center;
}
.txt-bank {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}

.transfer .txt-bank h6 {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  display: flex;
  padding-inline: 20px;
  line-height: -28px;
  letter-spacing: 0em;
  text-align: left;
  width: 132px;
  height: 28px;
}

.bank {
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #d0d5dd;
  justify-content: right;
}

.bank p {
  font-family: "Inter";
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 9px;
}

.bank .logo-bank {
  display: flex;
}

.bank .logo-bank .logo-bjb {
  margin-left: 8px;
}
</style>
