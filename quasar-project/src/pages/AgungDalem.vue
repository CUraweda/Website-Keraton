<template>
  <div>
    <nav>
      <navbar isWhiteText />
    </nav>
    <div class="container-title-top">
      <img
        src="../assets/images/dalemagungpakungwati.png"
        class="img-title"
        alt=""
      />
      <div class="container-title-text">
        <div class="texttitle-img">DALEM AGUNG PAKUNGWATI</div>
        <div class="container-subtitle">
          <p>
            Salah satu destinasi wisata yang wajib dikunjungi jika Anda
            berkunjung ke Cirebon.
          </p>
          <p>
            Dibangun pada tahun 1430 oleh Pangeran Cakrabuana, pendiri Kerajaan
            Cirebon.
          </p>
          <p>
            Memiliki koleksi benda bersejarah, seperti kereta kencana, gamelan,
            dan lukisan.
          </p>
        </div>
        <div class="container-arrowdown">
          <a class="arrow-down" @click="scrollToContent"
            ><img src="../assets/images/Frame.svg" class="img-arrow-down"
          /></a>
        </div>
      </div>
    </div>

    <div class="container-title2">
      <div><span>Mengapresiasi</span> nilai seni Cirebon</div>
      <p class="bawah-title2">
        Dalem Agung Pakungwati merupakan kompleks bangunan utama di Keraton
        Kasepuhan, Cirebon, Jawa Barat.
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
    </div>

    <div class="container-fasilitas">
      <div class="fasilitas-text">
        <div>Fasilitas</div>
        <div>
          Fasilitas di Keraton Kasepuhan Cirebon cukup lengkap untuk menunjang
          kegiatan wisata dan budaya.
        </div>
      </div>
      <div class="fasilitas-img1">
        <div v-for="(elemen, index) in fasilitaselement" :key="index">
          <img :src="elemen.img1" alt="" />
          <div class="text-fasilitas">
            {{ elemen.text1 }}
          </div>
        </div>
      </div>
      <div class="fasilitas-img1 fasilitas-img2">
        <div v-for="(elemen, index) in fasilitaselement" :key="index">
          <img :src="elemen.img2" alt="" />
          <div class="text-fasilitas">
            {{ elemen.text2 }}
          </div>
        </div>
      </div>
      <div>
        <div class="fasilitas-text kunjungan-text">
          <div>Kunjungan</div>
          <div>
            Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket
            wisata yang menarik.
          </div>
        </div>
        <div class="btn-kunjungan-text">
          <a href="#/booking"><button>Dapatkan Tiket Sekarang!</button></a>
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
            <img class="img-tiket-kunjungan" :src="element.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import navbar from "../components/NavBar.vue";
</script>

<script>
const scrollToContent = () => {
  document.querySelector(".container-title2").scrollIntoView({
    behavior: "smooth",
  });
};

export default {
  components: {
    navbar,
  },
  data() {
    return {
      cards: [
        { content: "../src/assets/images/nilaisenislider1.png" },
        { content: "../src/assets/images/nilaisenislider2.png" },
        { content: "../src/assets/images/nilaisenislider3.png" },
        { content: "../src/assets/images/nilaisenislider4.png" },
        { content: "../src/assets/images/nilaisenislider5.png" },
        // Add more cards as needed
      ],
      fasilitaselement: [
        {
          img1: "../src/assets/images/panggungsanggabuwana.png",
          img2: "../src/assets/images/masjidagungkasepuhan.png",
          text1: "Panggung Sanggabuwana",
          text2: "Masjid Agung Kasepuhan",
        },
        {
          img1: "../src/assets/images/pendopoagungpakungwati.png",
          img2: "../src/assets/images/museumpusakakeraton.png",
          text1: "Pendopo Agung Pakungwati",
          text2: "Museum Pusaka Keraton Kasepuhan",
        },
      ],
      elementTiketKunjungan: [
        {
          img: "../src/assets/images/imgtiketagungdalem.png",
          text1: "Tiket Masuk Keraton Kasepuhan Cirebon",
          text2: "Rp. 10.000/orang",
          text3: "Area Keraton",
        },
      ],

      currentIndex: 2,
    };
  },
  computed: {
    bullets() {
      return Array(this.cards.length).fill("");
    },
  },
  methods: {
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
  },
  watch: {
    currentIndex() {
      this.centerActiveCard();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
</style>

<style scoped>
.img-title {
  width: 100%;
  height: 120%;
  background-size: cover;
  position: relative;
  filter: brightness(70%);
}

.texttitle-img {
  width: fit-content;
  font-size: 4vw;
  font-weight: 600;
  margin: 0 auto;
  padding-top: 1vw;
  position: relative;
}

.container-subtitle {
  display: flex;
  width: 90%;
  margin: 0 auto;
  font-weight: 600;
  padding-top: 15vw;
  font-size: 1vw;
  position: relative;
}

.container-subtitle p {
  margin-bottom: 0;
  flex: 1;
  padding: 2vw;
  font-weight: 500;
  position: relative;
}

.container-title-text {
  margin-top: -38vw;
  color: white;
}

.container-title2 div span {
  font-weight: bold;
}

.container-title2 div:first-child {
  font-size: 3.6vw;
  width: fit-content;
  margin: 0 auto;
}

.bawah-title2 {
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
  background-color: rgb(0, 0, 0);
}

.button-slider.active {
  background-color: rgb(0, 0, 0);
}

.container-arrowdown {
  margin-top: 3vw;
  display: flex;
  justify-content: center;
}

.arrow-down {
  height: 2.5vw;
}

.img-arrow-down {
  position: relative;
  height: 2.5vw;
  cursor: pointer;
}

.container-title2 div:last-child {
  width: 67vw;
  text-align: center;
  font-size: 1.5vw;
  margin: 0 auto;
  color: #5e5e5e;
  margin-top: 1vw;
}

.container-title2 {
  margin-top: 10vw;
}

.img-pagination {
  width: 100%;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-fasilitas {
  margin-top: 15vw;
}

.fasilitas-text {
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 4vw;
}

.fasilitas-text div:first-child {
  flex: 1;
  font-size: 4vw;
}

.fasilitas-text div:last-child {
  flex: 0.8;
  font-size: 1.4vw;
  text-align: right;
  color: #5e5e5e;
}

.fasilitas-img1 {
  display: flex;
  margin: 0 auto;
  width: 95%;
}

.fasilitas-img2 {
  margin-top: 5vw;
}

.fasilitas-img1 img {
  width: 100%;
  object-fit: cover;
  height: 50vw;
  border-radius: 3vw;
  opacity: 75%;
  position: relative;
}

.fasilitas-img1 > div {
  flex: 1;
  padding: 0.5vw;
}

.fasilitas-img1 div div {
  margin: -13vw auto 0 auto;
  width: 30vw;
  color: white;
  font-size: 2.5vw;
  font-weight: 600;
  text-align: center;
}

.text-fasilitas {
  position: relative;
}

.kunjungan-text {
  margin-top: 20vw;
  padding-bottom: 0;
}

.kunjungan-text div:last-child {
  height: fit-content;
}

.btn-kunjungan-text {
  width: 90%;
  margin: -1vw auto 0 auto;
}

.btn-kunjungan-text button {
  float: right;
  padding: 0.5vw 1.3vw 0.5vw 1.3vw;
  border-radius: 5px;
  border: 0;
  background-color: #123b32;
  color: white;
  font-size: 1.2vw;
}

.container-tiket-kunjungan {
  width: 90%;
  margin: 0 auto;
  padding-top: 10vw;
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

.img-tiket-kunjungan {
  height: 15vw;
  cursor: pointer;
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

.footerr {
  margin-top: 42vw;
}

@media screen and (max-width: 600px) {
  .img-title {
    width: 300%;
    margin-left: -100vw;
  }

  .container-title-top {
    overflow: hidden;
  }

  .texttitle-img {
    font-size: 7vw;
    text-align: center;
    margin-top: -110vw;
  }

  .container-subtitle p:first-child {
    padding-top: 33vw;
    font-size: 4vw;
  }

  .container-subtitle p:not(:first-child) {
    display: none;
  }

  /* .fasilitas-img1 .fasilitas-img2 {
    display: flex;
    margin-top: 200px;
} */

  .arrow-down,
  .img-arrow-down {
    height: 8vw;
  }

  .container-title2 div:first-child,
  .container-title2 div:last-child {
    width: 70vw;
    text-align: center;
  }

  .container-title2 div:first-child {
    margin: 23vw auto 5vw auto;
    font-size: 7vw;
  }

  .container-title2 div:last-child,
  .btn-kunjungan-text button {
    font-size: 3.5vw;
  }

  .fasilitas-text,
  .fasilitas-text div:last-child {
    display: block;
    text-align: center;
  }

  .fasilitas-text div:first-child,
  .fasilitas-img1 div div {
    font-size: 5vw;
  }

  .fasilitas-text div:last-child {
    font-size: 4vw;
    width: 70vw;
    margin: 5vw auto 10vw auto;
  }

  .fasilitas-img1 {
    display: flex;
    flex-direction: column;
    gap: 5vw;
  }

  .fasilitas-img2 {
    margin-top: 5vw;
  }

  .fasilitas-img1 div div {
    margin: -25vw auto 12vw auto;
    width: 55vw;
  }

  .btn-kunjungan-text {
    width: fit-content;
  }

  .kunjungan-text div:last-child {
    margin-bottom: 3vw;
  }

  .btn-kunjungan-text button {
    padding: 1vw 4vw 1vw 4vw;
  }
}
</style>
