<template>
  <div>
    <NavBar isWhiteText />

    <div class="body">
      <div class="image-container">
        <img
          alt="Area Keraton Image"
          class="image"
          src="../assets/images/Baluarti Keraton.png"
        />
        <h1 class="image-text">{{ wisataName }}</h1>
        <div class="image-text2">
          <div>
            Keraton Kasepuhan Cirebon adalah salah satu dari empat keraton di
            Cirebon, Jawa Barat.
          </div>
          <div>
            Didirikan pada tahun 1430 oleh Pangeran Cakrabuana, pendiri Kerajaan
            Cirebon.
          </div>
          <div>
            Keraton Kasepuhan merupakan salah satu peninggalan sejarah yang
            penting di Cirebon
          </div>
        </div>
        <a class="arrow-down" @click="scrollToContent"
          ><img src="../assets/images/Frame.svg"
        /></a>
      </div>

      <div class="Destinasi">
        Destinasi wisata yang <span>wajib</span> dikunjungi
      </div>
      <p class="bawah-destinasi">
        Menawarkan berbagai hal menarik untuk dilihat dan dipelajari, mulai dari
        sejarah, arsitektur, hingga budaya.
      </p>
      <div class="slider" ref="slider">
        <img
          v-for="(card, index) in cards"
          :src="card.content"
          :key="index"
          :id="'card-' + index"
          :class="{ cardd: true, active: index === currentIndex }"
        />
      </div>

      <div class="button-container">
        <img
          class="button-slider"
          @click="prevCard"
          src="../assets/svg/ArrowLeft.svg"
        />
        <div
          class="bulet"
          v-for="(bulet, index) in bullets"
          :key="index"
          :class="{ active: index === currentIndex }"
        ></div>
        <img
          class="button-slider"
          @click="nextCard"
          src="../assets/svg/ArrrowRight.svg"
        />
      </div>

      <div class="Tourist">
        <div class="Tourist2">
          <div class="top-tourist">
            <p>Top <span>Tourist</span> attraction</p>
          </div>
          <div class="arrow-tourist">
            <a class="arrow-down2" @click="scrollToContent2"
              ><img src="../assets/images/Frame.svg" class="img-arrow-down"
            /></a>
          </div>
        </div>
      </div>

      <div class="tourist-attraction">
        <div class="Tourist-Container Tourist-Container1">
          <div class="Tourist-content">
            <a class="Hiasan"
              ><img src="../assets/images/Tagline.svg" class="img-att-top"
            /></a>
            <p class="Dalem">Dalem Agung Pakungwati</p>
            <p class="Isi-Dalem">
              Dalem Agung Pakungwati merupakan kompleks bangunan utama<br />
              keraton. Kompleks ini terdiri dari berbagai bangunan, seperti
              pendopo,<br />
              masjid, dan museum. Masjid Agung Kasepuhan merupakan salah satu<br />
              masjid tertua di Cirebon dan merupakan salah satu bangunan
              bersejarah<br />
              yang penting di kota ini.
            </p>
            <a class="Hiasan"
              ><img src="../assets/images/Content.svg" class="img-att-down"
            /></a>
          </div>
          <img
            alt=""
            class="image-Tourist"
            src="../assets/images/image 21.png"
          />
        </div>
        <div class="Tourist-Container Tourist-Container2">
          <img
            alt=""
            class="image-Tourist2"
            src="../assets/images/image34.png"
          />
          <div class="Tourist-content2">
            <a class="Hiasan"
              ><img src="../assets/images/Tagline2.svg" class="img-att-top"
            /></a>
            <p class="Dalem">Masjid Agung Kasepuhan</p>
            <p class="Isi-Dalem2">
              Masjid Agung Kasepuhan merupakan salah satu masjid tertua di
              Cirebon dan merupakan salah satu bangunan bersejarah yang penting
              di kota ini. Masjid ini dibangun pada tahun 1480 oleh Sunan Gunung
              Jati, salah satu Wali Songo.
            </p>
          </div>
        </div>

        <div
          class="Tourist-Container Tourist-Container1"
          id="Tourist-Container3"
        >
          <div class="Tourist-content3">
            <a class="Hiasan"
              ><img src="../assets/images/Tagline3.svg" class="img-att-top"
            /></a>
            <p class="Dalem">Museum Pusaka Kasepuhan</p>
            <p class="Isi-Dalem Isi-dalem3">
              Museum Pusaka Keraton Kasepuhan menyimpan berbagai koleksi benda
              bersejarah, seperti kereta kencana, gamelan, dan lukisan. Salah
              satu koleksi yang paling terkenal adalah kereta kencana Singa
              Barong, yang merupakan kereta kencana Sunan Gunung Jati.
            </p>
            <a class="Hiasan"
              ><img src="../assets/images/Content.svg" class="img-att-down"
            /></a>
          </div>
          <img
            alt=""
            class="image-Tourist3"
            src="../assets/images/image 35.png"
          />
        </div>
      </div>
      <div class="Lokasi-container">
        <div class="Lokasi">Lokasi</div>
        <div class="Lokasi-samping">
          Dengan luas sekitar 13,5 hektar dan terdiri dari 2 komplek yaitu Dalem
          Agung Pakungwati dan kompleks Keraton Pakungwati
        </div>
      </div>

      <div class="denah-map">
        <div class="Denah">
          <img src="../assets/images/Frame 80.png" class="img-denah" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3439357079596!2d108.5708669!3d-6.7278234999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee263eaaaaaab%3A0x20ea18cbfb1df195!2sKeraton%20Kasepuhan!5e0!3m2!1sid!2sid!4v1710081749605!5m2!1sid!2sid"
          class="iframe"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="Lokasi-container" id="">
        <div class="Lokasi">Fasilitas</div>
        <div class="Lokasi-samping">
          Fasilitas di Keraton Kasepuhan Cirebon cukup lengkap untuk menunjang
          kegiatan wisata dan budaya.
        </div>
      </div>
      <div class="fasilitas-content1-1">
        <div
          class="fasilitas-content1"
          v-for="(imgFasilitas, index) in imgFasilitass"
          :key="index"
        >
          <img :src="imgFasilitas.img" class="img-fasilitas" alt="" />
          <div class="con-txt-img-fasilitas">
            <div class="txt-img-fasilitas">
              {{ imgFasilitas.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="fasilitas-content1-1">
        <div
          class="fasilitas-content1"
          v-for="(imgFasilitas2, index2) in imgFasilitass2"
          :key="index2"
        >
          <img :src="imgFasilitas2.img2" class="img-fasilitas" alt="" />
          <div class="con-txt-img-fasilitas">
            <div class="txt-img-fasilitas">
              {{ imgFasilitas2.text }}
            </div>
          </div>
        </div>
      </div>

      <div class="container-kunjungan-text">
        <div class="Lokasi kunjungan-text1">Kunjungan</div>
        <div class="Lokasi-samping kunjungan-text2">
          Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket
          wisata yang menarik
        </div>
      </div>
      <div class="btn-kunjungan-text">
        <q-btn
          no-caps
          to="/booking"
          class="button-dapatkan"
          label="Dapatkan Tiket Sekarang!"
        />
      </div>

      <div class="container-tiket-kunjungan">
        <div
          class="tiket-kunjungan"
          v-for="(element, index) in elementTiketKunjungan"
          :key="index"
        >
          <div class="text-tiket-kunjungan">
            <div class="text-tiket">{{ element.text1 }}</div>
            <p class="text-harga">{{ element.text2 }}</p>
            <p class="text-harga" id="text-area">{{ element.text3 }}</p>
          </div>
          <img
            class="img-tiket-kunjungan"
            src="../assets/images/tiketkunjungan.png"
            alt=""
          />
        </div>
      </div>
      <div class="foterr">
        <footerDesktop />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import { ref } from "vue"
</script>

<script>
const scrollToContent = () => {
  document.querySelector(".Destinasi").scrollIntoView({
    behavior: "smooth",
  });
};

const scrollToContent2 = () => {
  document.querySelector(".Lokasi-container").scrollIntoView({
    behavior: "smooth",
  });
};

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      cards: [
        { content: "../src/assets/images/objekwisataslider1.png" },
        { content: "../src/assets/images/objekwisataslider2.png" },
        { content: "../src/assets/images/objekwisataslider3.png" },
        { content: "../src/assets/images/objekwisataslider4.png" },
        { content: "../src/assets/images/objekwisataslider5.jpg" },
        // Add more cards as needed
      ],
      imgFasilitass: [
        { img: "../src/assets/images/areaparkir.png", text: "Area Parkir" },
        { img: "../src/assets/images/tempatibadah.png", text: "Tempat Ibadah" },
      ],
      imgFasilitass2: [
        { img2: "../src/assets/images/toilet.png", text: "Toilet" },
        {
          img2: "../src/assets/images/tempatpenjualan.png",
          text: "Tempat Penjualan Souvenir",
        },
      ],
      elementTiketKunjungan: [
        {
          text1: "Tiket Masuk Keraton Kasepuhan Cirebon",
          text2: "Rp. 10.000/orang",
          text3: "Area Keraton",
        },
        {
          text1: "Paket Wisata Silaturahmi",
          text2: "Rp. 85.000/orang (minimal 35 orang)",
          text3: "Area Keraton - Guide - Snack - Foto bersama Sultan",
        },
        {
          text1: "Paket Wisata Non Silaturahmi",
          text2: "Rp. 155.000/orang (minimal 40 orang)",
          text3: "Area Keraton - Guide - Snack - Kesenian",
        },
        {
          text1: "Paket Wisata Pelajar",
          text2: "Rp. 60.000/orang (minimal 50 orang)",
          text3: "Area Keraton - Guide - Nasi Dus - Sejarah & Kesenian",
        },
      ],
      wisataName: ref(),
      currentIndex: 2,
    };
  },
  computed: {
    bullets() {
      return Array(this.cards.length).fill("");
    },
  },
  mounted(){
    this.fetchData()
  },
  methods: {
    scrollToContent() {
      // Scroll to content implementation
    },
    scrollToContent2() {
      // Scroll to content2 implementation
    },
    prevCard() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.cards.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    nextCard() {
      if (this.currentIndex === this.cards.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    centerActiveCard() {
      const sliderWidth = this.$refs.slider.offsetWidth;
      const cardWidth = 250;
      const offset = (sliderWidth - cardWidth) / 2;
      const cardContainer = document.querySelector(".slider");
      const activeCard = document.querySelector(".cardd.active");

      if (activeCard && cardContainer) {
        const index = this.currentIndex;
        const newPosition = -index * cardWidth + offset;
        cardContainer.style.transform = `translateX(${newPosition}px)`;
      }
    },
    async fetchData(){
      try{
        const response = await this.$api.get('wisata/1')
        if(response.status != 200) throw Error(response.data.message)
        const { wisataData, orderData } = response.data.data
        this.wisataName = wisataData.label
        this.elementTiketKunjungan = orderData.map(order => ({
          img: order.image,
          text1: order.name,
          text2: order.price < 0 ? "Free" : `Rp. ${this.formatRupiah(order.price)} / ${order.units}`,
          text3: order.wisataDesc
        }))
      }catch(err){
        console.log(err)
      }
    },
    formatRupiah(price) {
      return (price / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 3,
      });
    },
  },
  watch: {
    currentIndex() {
      this.centerActiveCard();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

.image-container {
  position: relative;
  text-align: center;
}

.image {
  width: 100%;
  height: auto;
}

.footer {
  background-image: url(../assets/images/batik.png);
  margin-top: -10px;
}
.image-text {
  position: absolute;
  top: 33vw;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 5vw;
  font-weight: 600;
  width: max-content;
}

.image-text2 {
  display: flex;
  width: 88%;
  margin: 0 auto;
  margin-top: -15vw;
  color: white;
  padding-bottom: 10vw;
}

#Tourist-Container3 {
  padding-bottom: 10vw;
}

.image-text2 div {
  font-size: 1vw;
  font-weight: 600;
  padding: 1vw;
  text-align: left;
}

.arrow-down {
  position: absolute;
  bottom: 3vw;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  height: 2vw;
}

.Destinasi {
  margin-top: 7vw;
  text-align: center;
  font-size: 4vw;
}

.Destinasi span,
.top-tourist span {
  font-weight: bold;
}

.bawah-destinasi {
  text-align: center;
  margin: 0 auto;
  width: 67vw;
  color: #5e5e5e;
  font-size: 1.6vw;
  margin-top: 2vw;
}

.slider {
  display: flex;
  transition: transform 0.3s ease;
  align-items: center;
  margin-left: 70px;
}

.slider img {
  object-fit: cover;
}

.cardd {
  width: 211.86px;
  position: relative;
  height: 341.65px;
  background-color: #ccc;
  margin: 5px;
  margin-top: 50px;
  border: none;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
  background-size: cover;
  transition: transform 0.3s ease;
}

.cardd.active {
  width: 255.72px;
  height: 414px;
}

.button-container {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.button-slider {
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease;
}

.bulet {
  width: 6px;
  height: 2px;
  border-radius: 20%;
  background-color: #ccc;
}

.bulet.active {
  background-color: blue;
}

.top-tourist p,
.arrow-tourist {
  width: max-content;
  margin: 0 auto;
  color: white;
  font-size: 4vw;
}

.img-att-top {
  height: 1.7vw;
}
.img-att-down {
  height: 1vw;
}

.img-arrow-down {
  height: 2.5vw;
}

.Tourist2 {
  margin: 0 auto;
  margin-top: -10vw;
}

.Dalem {
  font-size: 3vw;
  font-weight: 600;
}

.Tourist {
  height: 40vw;
  margin-top: 10vw;
  background: linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, #212121 61.38%);
  display: flex;
  align-items: center;
}
.tourist-attraction {
  background-color: #212121;
  margin-top: -14vw;
}

.Tourist-Container {
  display: flex;
  padding: 5vw 7vw 0 7vw;
  color: white;
  align-items: center;
}

.Tourist-Container1 {
  justify-content: flex-end;
}

.Tourist-content,
.Tourist-content3 {
  width: 40vw;
}

.Tourist-content2 {
  text-align: right;
  width: 30vw;
  margin: 0 auto;
}

.Isi-Dalem,
.Isi-Dalem2 {
  margin-top: 5vw;
  font-size: 0.9vw;
  text-align: justify;
}

.Isi-dalem3 {
  width: 33.5vw;
  text-align: left !important;
}

.Isi-Dalem2,
.Lokasi-samping {
  direction: rtl; /* Arah teks dari kanan ke kiri */
}

.image-Tourist,
.image-Tourist2,
.image-Tourist3 {
  height: 42vw;
  width: 42vw;
  object-fit: cover;
}

.Lokasi-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15vw 5vw 10vw 10vw;
}

.Lokasi {
  flex: 2;
  font-size: 4vw;
}

.Lokasi-samping {
  flex: 1.8;
  font-size: 1.4vw;
  color: #5e5e5e;
}

.denah-map {
  width: 95%;
  margin: 0 auto;
  display: flex;
}

.img-denah {
  width: 100%;
  height: 60vw;
}

.iframe {
  flex: 1;
  width: 10vw;
  height: 60vw;
}

.Denah {
  flex: 1;
}
.fasilitas-content1-1 {
  display: flex;
  width: 95%;
  margin: 0 auto;
}

.fasilitas-content1 {
  flex: 1;
  padding: 0.7vw;
  height: 52vw;
}

.img-fasilitas {
  width: 100%;
}

.con-txt-img-fasilitas {
  margin-top: -14vw;
}

.txt-img-fasilitas {
  text-align: center;
  font-size: 3vw;
  color: white;
  font-weight: 600;
  width: 30vw;
  margin: 0 auto;
}

.container-kunjungan-text {
  padding-top: 13vw;
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 18vw;
}

.btn-kunjungan-text {
  width: 90%;
  margin: 0 auto;
}

.btn-kunjungan-text .button-dapatkan {
  float: right;
  padding: 0.5vw 1.3vw 0.5vw 1.3vw;
  border-radius: 0.3vw;
  border: 0;
  background-color: #123b32;
  color: white;
  font-size: 1.2vw;
}

.kunjungan-text1 {
  flex: 2 !important;
  margin-top: -1vw;
}
.kunjungan-text2 {
  flex: 1.7 !important;
  direction: rtl;
}

.container-tiket-kunjungan {
  width: 90%;
  margin: 0 auto;
  padding-top: 15vw;
}

.tiket-kunjungan {
  float: right;
  justify-content: flex-end;
  display: flex;
  width: 96%;
  padding-top: 1vw;
  padding-bottom: 0.7vw;
  border-bottom: 0.1vw solid #d0d5dd;
}

.img-tiket-kunjungan {
  height: 15vw;
  cursor: pointer;
}

.text-tiket-kunjungan {
  width: 100%;
  padding-top: 2vw;
  cursor: pointer;
}

.text-tiket {
  font-weight: 600;
  font-size: 1.7vw;
  height: min-content;
}

.text-harga {
  font-weight: 400;
  font-size: 1.7vw;
  color: #5e5e5e;
  margin-bottom: 0;
}

#text-area {
  font-size: 1.5vw;
  padding-top: 1vw;
  margin-top: 2vw;
}

.logo {
  font-size: 1.6vw;
  font-weight: 400;
  display: flex;
  margin-left: 1vw;
}

.logo img {
  height: 7vw;
  margin-right: 1vw;
}

li a {
  font-size: 1.4vw;
}

li {
  margin-bottom: 0.6vw !important;
  height: fit-content;
  width: fit-content;
}

ul {
  margin-top: 1vw;
  line-height: 2vw;
}

h4 {
  font-size: 2.3vw;
  line-height: 2.8vw;
}

.foterr {
  margin-top: 92vw;
}
</style>
