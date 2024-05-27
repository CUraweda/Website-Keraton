<template>
  <nav>
    <navbar border />
  </nav>
  <div class="body">
    <div class="group1">
      <div class="up">
      <div class="pesan-tiket-langsung">
        <div class="txt-pesan-tiket-langsung">
          <h4>Pesan Tiket Langsung</h4>
        </div>
      </div>
      <div class="group2">
        <div class="icon-group2">
          <img src="../assets/svg/Frame.svg" class="svg" alt="" />
        </div>
        <div class="txt-group1">
          <h6>Pastikan pesanan Anda BENAR sebelum checkout ya!</h6>
        </div>
      </div>
      <div class="border-bottom">
        <hr>
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

          <div class="akun">
            <div class="nama">
              <h6>John Doe</h6>
            </div>
            <div class="gmail">
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
                <img src="../assets/svg/iconTiket.svg" class="svg" alt="">
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
                <div class="waktu">
                  <input type="date" name="" id="tanggalPemesanan" :value="tanggalSekarang" disabled />
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
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1512_471)">
                      <path class="path" d="M3.33398 7.33337H12.6673V8.66671H3.33398V7.33337Z" fill="#B0BEC5" />
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
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1512_477)">
                      <path class="path"
                        d="M7.33398 7.33337V3.33337H8.66732V7.33337H12.6673V8.66671H8.66732V12.6667H7.33398V8.66671H3.33398V7.33337H7.33398Z"
                        fill="#B0BEC5" />
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
  padding-top: 70px; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}

nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #ffffff;
  z-index: 1000;
}

.custom-radio-btn {
  width: 1.5vw;
  height: 1.5vw;
  border: 0.2vw solid goldenrod;
  border-radius: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-radio-btn .checkmark {
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  background-color: goldenrod;
  border-radius: 2vw;
  display: inline-block;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.custom-radio-btn input {
  display: none;
}

.custom-radio-btn input:checked+.checkmark {
  display: inline-block;
  opacity: 1;
}

.container {
  gap: 7vw;
  display: flex;
}

.group1 {
  margin-top: 4vw;
  position: relative;
}

.group2 {
  margin-top: 1vw;
  width: 45vw;
  display: flex;
  gap: 0.5vw;
  align-items: center;  
}

.icon-group2 {
  margin-left: 2vw;
}

.txt-group2 {
  width: 495px;
  height: 28px;
  top: 203px;
  left: 144px;
}

.txt-group1 h6 {
  font-family: "Raleway";
  font-size: 1.5vw;
  font-weight: 400;
  /* line-height: 28px; */
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;
  height: 2vw;
  /* background-color: white; */
}

.pesan-tiket-langsung {
  width: 40vw;
  height: 4vw;
  margin-top: 3vw;
  display: flex;
  align-items: center;
  background-color: white;
}

.txt-pesan-tiket-langsung h4 {
  font-weight: 400;
  font-size: 2.2vw;
  line-height: 40px;
  color: #000000;
  font-family: "Raleway";
  display: flex;
  align-items: center;
  height: 3vw
}

#detailPemesanan {
  width: 40vw;
  height: 45vw;
  /* margin-left: 88px; */
  /* top: 295px; */
  margin-top: 4.5vw;
  /* margin-right: 40px; */
  /* right: 670px; */
  /* gap: 37px; */
  background: none;
}

/* .group17 {
  width: 346px;
  height: 62px;
  background-color: yellow;
} */

.border-bottom hr{
  display: none;
  align-items: center;
  /* display: none; */
  border: 0.3vw solid #d9d9d9;
}
.atas {
  align-items: center;
  display: flex;
  gap: 0.1vw;
  width: 30vw;
  height: 4vw;
}
.icon img {
  max-width: 2.3vw;
}
.svg {
  max-width: 2.3vw;
}
.pembayaran {
  margin-top: 37px;
  align-items: center;
  display: flex;
  gap: 6px;
}

.txt-group17 {
  display: flex;
  align-items: center;
  font-family: "Raleway";
  font-size: 1.2vw;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  height: 1.8vw;
  background-color: white;
  padding: 0;
  margin: 0;
}

.txt-group17 p {
  width: 20vw;
  height: 1.8vw;
  color: #5e5e5e;
  margin: 0;
  display: flex;
  align-items: center;
}

.akun {
  display: flex;
  align-items: center;
  text-align: center;
}

.nama {
  width: 7vw;
  height: 28px;
  top: 34px;
}

.nama h6 {
  font-family: "Raleway";
  font-size: 1.5vw;
  font-weight: 700;
  line-height: 2vw;
  letter-spacing: 0em;
  text-align: left;
}

.gmail {
  width: 20vw;
  height: 28px;
  top: 34px;
  left: 94px;
}

.gmail h6 {
  font-family: "Raleway";
  font-size: 1.5vw;
  font-weight: 400;
  line-height: 2vw;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 0.2vw;
}

.pilih-kategori {
  margin-top: 3.5vw;
  width: 40vw;
  height: 82px;
}

.radioBtn {
  display: flex;
  gap: 2vw;
  margin-top: 1.5vw;
  margin-left: 1.5vw;
}


.umum {
  display: flex;
  justify-content: center;
  width: 10vw;
  height: 40vw;
  top: 133px;
  /* margin-right: 2vw; */
}

.pelajar {
  justify-content: center;
  display: flex;
  width: 10vw;
  height: 4vw;
  top: 133px;
  left: 149px;
  padding: 12px, 20px, 12px, 20px;
  /* margin-right: 27px; */
}

.mancanegara {
  justify-content: center;
  display: flex;
  width: 12vw;
  height: 4vw;
  /* top: 133px; */
  /* left: 301px; */
  /* padding: 12px, 20px, 12px, 20px; */
}

.umum,
.pelajar,
.mancanegara,
label {
  font-family: "Manrope";
  font-size: 1.2vw;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  gap: 1vw;
  /* margin-left: 10px; */
  color: #212121;
  cursor: pointer;
  height: 1.5vw;
  display: flex;
  justify-content: left;
  align-items: center;
}

.detail-tiket {
  margin-top: 3vw;
  width: 30vw;
  height: 20vw;
  border-radius: 4px, 4px, 0px, 0px;
}

.date {
  color: #999999;
  opacity: 0.5;
}

.icon-date img{
  width: 2vw;
  height: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5vw;
}

.waktu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

fieldset {
  width: 20vw;
  height: 4.5vw;
  border: 1.5px solid #999999;
  opacity: 0.5;
  border-radius: 0.5vw;
  /* color: #999999; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.2vw;
  font-family: "Roboto";
}

legend {
  display: flex;
  height: 2vw;
  padding-left: 0.2vw;
  padding-right: 0.2vw;
}

input[type="date"] {
  width: 20vw;
  height: 4vw ;
  font-family: "Roboto";
  font-size: 1.2vw;
  font-weight: 400;
  line-height: 2vw;
  letter-spacing: 0.2vw;
  text-align: left;
  border: none;
  background: transparent;
}

input[type="date"]:focus {
  outline: none;
}

.supporting-text {
  width: 30vw;
  height: 1vw;
  color: #999999;
}

.supporting-txt {
  width: 20vw;
  height: 1vw;
}

.supporting-txt small {
  font-family: "Roboto";
  font-size: 0.9vw;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 1vw;
}

.nama-tiket {
  width: 30vw;
  height: 2vw;
}

.nama-tiket h6 {
  margin-top: 1vw;
  font-family: "Raleway";
  font-size: 1.5vw;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
}

.harga-tiket {
  width: 20vw;
  height: 2vw;
  top: 402px;
}

.harga-tiket h6 {
  margin-top: 0.4vw;
  font-family: "Raleway";
  font-size: 1.5vw;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
}

.btn-tiket {
  margin-top: 1vw;
  align-items: center;
  display: flex;
  gap: 0.5vw;
}

.btn-tiket p {
  width: 3vw;
  height: 1.5vw;
  font-family: "Manrope";
  font-size: 1.2vw;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
}

.min {
  width: 1.7vw;
  height: 1.7vw;
  border: 1.5px solid #d5d5d5;
  background: transparent;
  border-radius: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plus {
  width: 1.7vw;
  height: 1.7vw;
  border: 1.5px solid #d5d5d5;
  background: transparent;
  border-radius: 0.5vw;
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

.count {
  height: 24px;
}

#ringkasanBooking {
  width: 40vw;
  height: 21vw;
  /* padding-right: 5rem; */
  /* margin-left: 8rem; */
  margin-top: 4.5vw;
  left: 650px;
  border-radius: 1vw;
  /* padding: 20px, 23px,20px, 23px; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1.5vw;
  gap: 8px;
  background-color: #ffffff;
  transition: top .3s ease  ;
}

/* #ringkasanBooking.sticky {
  position: fixed;
  top: 40vh;
  transform: translateY(-50%);
  transition: top .3s ease;
} */


.btn {
  width: 40vw;
  top: 295px;
  left: 650px;
  height: 3vw;
  margin-top: 2vw;
  /* padding: 1vw; */
  gap: 10px;
  border-radius: 1vw;
  border: none;
  background-color: #daa520;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.btn:hover {
  background-color: #ffc122;
}

.containerbtn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
}

.btn-checkout {
  align-items: center;
  display: flex;
  justify-content: space-between;
  /* background-color: green; */
  text-align: center;
  width: 40vw;
  height: 3vw;
  padding-top: 1vw;
  border-radius: 2vw;
}
.btn-checkout img {
  max-width: 2.5vw;
  margin-top: 0.5vw;
  margin-right: 1vw;
  position: relative;
  background-color: skyblue;
}
.txt-checkout {
  /* margin-left: 10px; */
  width: 7vw;
  height: 2vw;
  margin-bottom: 1vw;
}

.txt-checkout p {
  color: white;
  font-size: 1.2vw;
  font-weight: 700;
  font-family: "Raleway";
}

h5 {
  font-size: 2vw;
  font-weight: 400;
  line-height: 2.5vw;
  font-family: "Raleway";
  color: #000000;
}
.totalPemesanan {
  padding-top: 1.5vw; 

}
.totalPemesanan h6{
  /* padding-top: 2vw; */
  height: 2vw;
  display: flex;
  align-items: center;
}

h6 {
  font-size: 1.5vw;
  font-weight: bold;
  line-height: 28px;
  color: #000000;
  font-family: "Raleway";
}

.totalTagihan {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 2vw;
  /* line-height: 0.3vw; */
}

.txt-total-tagihan {
  font-family: "Raleway";
  font-weight: bold;
  font-size: 2vw;
  display: flex;
  align-items: center;
  /* background-color: red; */
  /* line-height: 0.3vw; */

}
.harga {
  line-height: 0.3vw;
}
h6.harga {
  margin-top: 1vw;
}
.totalHarga {
  /* height: 1.5vw; */
  display: flex;
  justify-content: space-between;
  /* margin-top: 0.vw; */
  font-family: "Raleway";
  color: #000000;
  font-size: 1vw;
}


hr {
  margin-top: 1vw;
}
.biayaTransaksi{
  padding-top: 1.5vw; 
}
.biayaTransaksi h6{
  /* margin-top: 0.5vw; */
  height: 2vw;
  display: flex;
  align-items: center;
}


@media (max-width: 600px) {
  .container {
    display: grid;
    align-items: center;
    justify-content: center;
    transform: scale(2);
    margin-top: 50vw;
  }
  .border-bottom hr {
    margin-top: -1vw;
    display: block;
  }
  
  .up {
    margin-top: 30vw;
    transform: scale(2)
  }
  /* .txt-pesan-tiket-langsung {
    transform: scale(2);
    margin-top: 30vw;
  }
  */
  .txt-group1 p{
    background-color: red;
    height: 5vw;
    width: 30vw
  }
  .body {
    padding: 0;
  }
  #ringkasanBooking {
    margin-top: 20vw
  }
  .radioBtn {
    display: grid;
    align-items: left;
    justify-content: left
  }

  
  .pelajar, .umum, .mancanegara {
    margin: 0
  }
}
</style>

<script setup>
import { ref, computed, onMounted } from "vue";
import navbar from "../components/NavBar.vue";
import payment from "../components/PembayaranComponent.vue";
import SelectPopup from "../components/SelectPopup.vue";

const isScrollActive = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const ringkasanBooking = document.getElementById('ringkasanBooking');
  const threshold = window.innerHeight / 2; 
  const topDistance = ringkasanBooking.getBoundingClientRect().top;

  if (topDistance < threshold && window.scrollY > 0) {
    if (!ringkasanBooking.classList.contains('sticky')) {
      ringkasanBooking.classList.add('sticky');
      isScrollActive.value = true;
    }
  } else {
    if (ringkasanBooking.classList.contains('sticky')) {
      ringkasanBooking.classList.remove('sticky');
      isScrollActive.value = false;
    }
  }
};

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