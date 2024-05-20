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
        <h1 class="image-text">BALUARTI KERATON</h1>
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
            Keraton Kasepuhan merupakan salah satu peninggalan sejarah yang penting
            di Cirebon
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
          :id="'card' + index"
          :class="{ cardd: true, active: index === currentIndex }"
        >
      </div>

      <div class="button-container">
        <button class="button-slider" @click="prevCard">&lt;</button>
        <div
          class="bulet"
          v-for="(bullet, index) in bullets"
          :key="index"
          :class="{ active: index === currentIndex }"
        ></div>
        <button class="button-slider" @click="nextCard">&gt;</button>
      </div>

      <div class="Tourist">
        <div class="top-tourist">
          <p>Top <span>Tourist</span> attraction</p>
        </div>
        <div class="arrow-tourist">
          <a class="arrow-down2" @click="scrollToContent2"
            ><img src="../assets/images/Frame.svg"
          /></a>
        </div>
      </div>

      <div class="Tourist-Container">
        <div class="Tourist-content">
          <a class="Hiasan"><img src="../assets/images/Tagline.svg" /></a>
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
          <a class="Hiasan"><img src="../assets/images/Content.svg" /></a>
        </div>
        <img alt="" class="image-Tourist" src="../assets/images/image 21.png" />
      </div>

      <div class="Tourist-Container">
        <div class="Tourist-content2">
          <a class="Hiasan2"><img src="../assets/images/Tagline2.svg" /></a>
          <p class="Dalem2">Masjid Agung Kasepuhan</p>
          <p class="Isi-Dalem2">
            Masjid Agung Kasepuhan merupakan salah satu masjid tertua di Cirebon
            dan merupakan salah satu bangunan bersejarah yang penting di kota ini.
            Masjid ini dibangun pada tahun 1480 oleh Sunan Gunung Jati, salah satu
            Wali Songo.
          </p>
        </div>
        <img alt="" class="image-Tourist2" src="../assets/images/image34.png" />
      </div>

      <div class="Tourist-Container">
        <div class="Tourist-content3">
          <a class="Hiasan"><img src="../assets/images/Tagline3.svg" /></a>
          <p class="Dalem">Museum Pusaka Kasepuhan</p>
          <p class="Isi-Dalem">
            Museum Pusaka Keraton Kasepuhan menyimpan berbagai koleksi benda
            bersejarah, seperti kereta kencana, gamelan, dan lukisan. Salah satu
            koleksi yang paling terkenal adalah kereta kencana Singa Barong, yang
            merupakan kereta kencana Sunan Gunung Jati.
          </p>
          <a class="Hiasan"><img src="../assets/images/Content.svg" /></a>
        </div>
        <img alt="" class="image-Tourist3" src="../assets/images/image 35.png" />
      </div>

      <div class="Lokasi-container">
        <div class="Lokasi">
          <p>Lokasi</p>
        </div>
        <div class="Lokasi-samping">
          <p>
            Dengan luas sekitar 13,5 hektar dan terdiri dari 2 komplek yaitu Dalem
            Agung Pakungwati dan kompleks Keraton Pakungwati.
          </p>
        </div>
      </div>

      <div class="Denah">
        <img src="../assets/images/Frame 80.png" />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3439357079596!2d108.5708669!3d-6.7278234999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee263eaaaaaab%3A0x20ea18cbfb1df195!2sKeraton%20Kasepuhan!5e0!3m2!1sid!2sid!4v1710081749605!5m2!1sid!2sid"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div class="Fasilitas">
        <p class="fasilitas">Fasilitas</p>
        <p class="Fasilitas-Text">
          Fasilitas di Keraton Kasepuhan Cirebon cukup lengkap untuk menunjang
          kegiatan wisata dan budaya.
        </p>
      </div>

      <div class="Fasilitas-Images">
        <div class="card">
          <p class="card-text">Area Parkir</p>
        </div>
        <div class="card2">
          <p class="card-text2">Tempat Ibadah</p>
        </div>
        <div class="Fasilitas-Images2">
          <div class="card3">
            <p class="card-text3">Toilet</p>
          </div>
          <div class="card4">
            <p class="card-text4">Tempat Penjualan Souvenir</p>
          </div>

          <div class="Kunjungan">
            <p>Kunjungan</p>
          </div>
          <div class="Kunjungan2">
            <p class="Kunjungan-Text">
              Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket
              wisata yang menarik.
            </p>
          </div>
          <a href="/#/booking">
            <button class="button-Kunjungan">Dapatkan Tiket Sekarang!</button></a
          >
          <a href="/#/booking">
            <div class="Paket">
              <img src="../assets/images/Frame 81.png" />
              <img src="../assets/images/Frame 82.png" />
              <img src="../assets/images/Frame 83.png" />
              <img src="../assets/images/Frame 84.png" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      cards: [
        { content: '../src/assets/images/image23.png' },
        { content: '../src/assets/images/image24.png' },
        { content: '../src/assets/images/image22.png' },
        { content: '../src/assets/images/keraton.png' },
        { content: '../src/assets/images/image25.png' },
        // Add more cards as needed
      ],
      currentIndex: 0,
    };
  },
  methods: {
    scrollToContent() {
      // Scroll to content implementation
    },
    scrollToContent2() {
      // Scroll to content2 implementation
    },
    prevCard() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
    nextCard() {
      if (this.currentIndex < this.cards.length - 1) {
        this.currentIndex += 1;
      }
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

.image-text {
  position: absolute;
  top: 33VW;
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

.image-text2 div{
  font-size: 1vw;
  font-weight: 600;
  padding: 1vw;
  text-align: left
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

.bawah-destinasi{
  text-align: center;
  margin: 0 auto;
  width: 67vw;
  color: #5E5E5E;
  font-size: 1.6vw;
  margin-top: 2vw;
}

.slider {
  display: flex;
  justify-content: center;
  overflow-x: auto;
}

.cardd {
  flex: 0 0 auto;
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 300px;
  text-align: center;
}

.active {
  border-color: blue;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-slider {
  margin: 0 10px;
}

.bulet {
  width: 10px;
  height: 10px;
  background-color: grey;
  border-radius: 50%;
  margin: 0 5px;
}

.bulet.active {
  background-color: blue;
}

.Tourist-Container {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.Tourist-content,
.Tourist-content2,
.Tourist-content3 {
  flex: 1;
  margin: 0 10px;
}

.image-Tourist,
.image-Tourist2,
.image-Tourist3 {
  width: 300px;
  height: auto;
}

.Lokasi-container {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.Lokasi {
  flex: 1;
  margin-right: 20px;
}

.Lokasi-samping {
  flex: 2;
}

.Fasilitas {
  text-align: center;
}

.Fasilitas-Images {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.Fasilitas-Images2 {
  display: flex;
  justify-content: space-around;
}

.Kunjungan {
  text-align: center;
}

.Kunjungan2 {
  text-align: center;
  margin: 10px 0;
}

.button-Kunjungan {
  display: block;
  margin: 10px auto;
}

.Paket {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .image-container {
    width: 100%;
  }

  .image {
    width: 100%;
    height: auto;
  }

  .Tourist-Container {
    flex-direction: column;
    align-items: center;
  }

  .image-Tourist,
  .image-Tourist2,
  .image-Tourist3 {
    width: 100%;
  }

  .Lokasi,
  .Fasilitas,
  .Kunjungan {
    margin-left: 20px;
  }

  .Lokasi-samping,
  .Fasilitas-Text,
  .Kunjungan-Text {
    margin-left: 20px;
    text-align: left;
  }

  .slider {
    margin-left: 0;
    overflow-x: scroll;
  }

  .cardd {
    width: 80%;
    margin: 0 auto;
  }

  .button-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>