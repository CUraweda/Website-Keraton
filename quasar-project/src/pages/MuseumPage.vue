<template>
  <div>
    <nav>
      <navbar isWhiteText />
    </nav>
    <div class="container-title-top">
      <img src="../assets/images/museumPusakaa.png" class="img-title" alt="" />
      <div class="container-title-text">
        <div class="texttitle-img">{{ wisataName }}</div>
        <div class="container-subtitle">
          <p>
            Museum Pusaka ini terletak di dalam kompleks Keraton Kasepuhan,
            Cirebon, Jawa Barat.
          </p>
          <p>
            Didirikan pada tahun 1981 oleh Sultan Sepuh XIV, Pangeran Raja
            Mochamad Jayadiningrat.
          </p>
          <p>
            Museum ini memiliki luas sekitar 1.200 meter persegi dan terdiri
            dari dua lantai.
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
      <div><span>Mengenal</span> sejarah dan budaya Cirebon</div>
      <p class="bawah-title2">
        Museum ini menyimpan berbagai koleksi benda bersejarah, seperti kereta
        kencana, gamelan, dan lukisan.
      </p>
      <div class="container-slider">
        <div class="slider" ref="slider">
          <img
            v-for="(card, index) in cards"
            :src="card.content"
            :key="index"
            :id="'card-' + index"
            :class="{ cardd: true, active: index === currentIndex }"
          />
        </div>
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

      <div class="fasilitas-text kunjungan-text">
        <div>Kunjungan</div>
        <div>
          Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket
          wisata yang menarik.
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

      <a href="/#/booking"
        ><div class="container-tiket-kunjungan">
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
          </div></div
      ></a>
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
        { content: "../src/assets/images/sejarahslider1.png" },
        { content: "../src/assets/images/sejarahslider2.png" },
        { content: "../src/assets/images/sejarahslider3.png" },
        { content: "../src/assets/images/sejarahslider4.png" },
        { content: "../src/assets/images/sejarahslider5.png" },
        // Add more cards as needed
      ],
      fasilitaselement: [
        {
          img1: "../src/assets/images/image33.png",
          img2: "../src/assets/images/card2.png",
          text1: "Ruang Pameran",
          text2: "Ruang Audio Visual",
        },
        {
          img1: "../src/assets/images/card3.png",
          img2: "../src/assets/images/card4Museum.png",
          text1: "Ruang Kelas",
          text2: "Tempat Penjualan Souvenir",
        },
      ],
      elementTiketKunjungan: [
        {
          img: "../src/assets/images/museumPaket.png",
          text1: "Tiket Masuk Museum Pusaka",
          text2: "Rp. 15.000/orang",
          text3: "Area Museum Pusaka",
        },
      ],
      wisataName: "",
      currentIndex: 2,
    };
  },
  computed: {
    bullets() {
      return Array(this.cards.length).fill("");
    },
  },
  mounted() {
    this.fetchData();
  },
  mounted() {
    this.fetchData();
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
      const cardWidth = 205;
      const offset = (sliderWidth - cardWidth) / 2;
      const cardContainer = document.querySelector(".slider");
      const activeCard = document.querySelector(".cardd.active");

      if (activeCard && cardContainer) {
        const index = this.currentIndex;
        const newPosition = -index * cardWidth + offset;
        cardContainer.style.transform = `translateX(${newPosition}px)`;
      }
    },
    async fetchData() {
      try {
        const response = await this.$api.get("wisata/2");
        if (response.status != 200) throw Error(response.data.message);
        const { wisataData, orderData } = response.data.data;
        this.wisataName = wisataData.label;
        this.elementTiketKunjungan = orderData.map((order) => ({
          img: order.image,
          text1: order.name,
          text2:
            order.price < 0
              ? "Free"
              : `Rp. ${this.formatRupiah(order.price)} / ${order.units}`,
          text3: order.wisataDesc,
        }));
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
.fasilitas-text {
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 4vw;
}

.Lokasi {
  flex: 2;
  font-size: 4vw;
}

.container-kunjungan-text {
  padding-top: 13vw;
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 18vw;
}
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
  padding-top: 10vw;
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
  margin-top: -46vw;
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

.container-slider {
  width: 95vw;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  height: 40vw;
  align-items: center;
  margin-left: -3vw;
}

.slider {
  display: flex;
  transition: transform 0.3s ease;
  align-items: center;
  margin-left: 11vw;
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
  margin-top: 20vw;
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
  margin-top: 9vw;
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

.btn-kunjungan-text .button-dapatkan {
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
  color: black;
  text-decoration: none;
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

.foterr {
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
