<template>
  <div>
    <navbar />

    <section ref="section1" class="background-baluarti">
      <div class="text-h2 text-white text-bold text-center">
        {{ wisataName }}
      </div>

      <div
        class="flex items-center justify-center text-white q-gutter-md"
        style="margin-top: 10rem"
      >
        <div style="width: 20rem" class="text-weight-bold text-center">
          Museum Pusaka ini terletak di dalam kompleks Keraton Kasepuhan,
          Cirebon, Jawa Barat.
        </div>

        <div style="width: 20rem" class="text-weight-bold text-center">
          Didirikan pada tahun 1981 oleh Sultan Sepuh XIV, Pangeran Raja
          Mochamad Jayadiningrat.
        </div>

        <div style="width: 20rem" class="text-weight-bold text-center">
          Museum ini memiliki luas sekitar 1.200 meter persegi dan terdiri dari
          dua lantai.
        </div>
      </div>

      <div>
        <q-btn
          flat
          icon="arrow_downward"
          color="white"
          class="q-mt-xl"
          @click="scrollToNextSection"
        />
      </div>
    </section>

    <section ref="section2" class="flex items-center justify-center column">
      <div class="text-h3 text-center q-mt-md">
        <span class="text-bold">Mengenal</span> sejarah dan budaya Cirebon
      </div>

      <div class="text-h6 q-mt-md text-center">
        Museum ini menyimpan berbagai koleksi benda bersejarah, seperti kereta
        kencana, gamelan, dan lukisan.
      </div>

      <div class="q-mt-xl">
        <div class="flex items-center justify-center q-gutter-md">
          <q-img
            src="../assets/images/sejarahslider1.png"
            id="card-0"
            :class="{ cardd: true, active: currentIndex === 0 }"
            class="img-card"
          />
          <q-img
            src="../assets/images/sejarahslider2.png"
            id="card-1"
            :class="{ cardd: true, active: currentIndex === 1 }"
            class="img-card"
          />
          <q-img
            src="../assets/images/sejarahslider3.png"
            id="card-2"
            :class="{ cardd: true, active: currentIndex === 2 }"
            class="img-card"
          />
          <q-img
            src="../assets/images/sejarahslider4.png"
            id="card-3"
            :class="{ cardd: true, active: currentIndex === 3 }"
            class="img-card"
          />
          <q-img
            src="../assets/images/sejarahslider5.png"
            id="card-4"
            :class="{ cardd: true, active: currentIndex === 4 }"
            class="img-card"
          />
        </div>

        <div class="flex items-center justify-center q-mt-md">
          <q-btn flat icon="arrow_back" @click="prevImage" />
          <div class="indicators">
            <span
              :class="{ active: currentIndex === 0 }"
              @click="setCurrentIndex(0)"
            ></span>
            <span
              :class="{ active: currentIndex === 1 }"
              @click="setCurrentIndex(1)"
            ></span>
            <span
              :class="{ active: currentIndex === 2 }"
              @click="setCurrentIndex(2)"
            ></span>
            <span
              :class="{ active: currentIndex === 3 }"
              @click="setCurrentIndex(3)"
            ></span>
            <span
              :class="{ active: currentIndex === 4 }"
              @click="setCurrentIndex(4)"
            ></span>
          </div>
          <q-btn flat icon="arrow_forward" @click="nextImage" />
        </div>
      </div>
    </section>

    <section>
      <div
        class="flex items-center justify-between q-mx-md"
        style="margin-top: 4rem"
      >
        <div class="text-h3">Fasilitas</div>
        <div style="width: 30rem">
          Fasilitas di Keraton Kasepuhan Cirebon cukup lengkap untuk menunjang
          kegiatan wisata dan budaya.
        </div>
      </div>

      <div class="flex items-center justify-center q-gutter-md q-mt-xl">
        <div>
          <q-img src="../assets/images/image33.png" class="img-fasilitas">
            <div class="absolute-bottom text-subtitle1 text-center">
              Ruang Pameran
            </div>
          </q-img>
        </div>
        <div>
          <q-img src="../assets/images/card2.png" class="img-fasilitas">
            <div class="absolute-bottom text-subtitle1 text-center">
              Ruang Audio Visual
            </div>
          </q-img>
        </div>
        <div>
          <q-img src="../assets/images/card3.png" class="img-fasilitas">
            <div class="absolute-bottom text-subtitle1 text-center">
              Ruang Kelas
            </div>
          </q-img>
        </div>
        <div>
          <q-img src="../assets/images/card4Museum.png" class="img-fasilitas">
            <div class="absolute-bottom text-subtitle1 text-center">
              Tempat Penjualan Souvenir
            </div>
          </q-img>
        </div>
      </div>
    </section>

    <section>
      <div
        class="flex items-center justify-between q-mx-md"
        style="margin-top: 4rem"
      >
        <div class="text-h3">Kunjungan</div>
        <div>
          <div style="" class="text-right">
            Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket
            wisata yang menarik
          </div>
          <div class="btn-kunjungan-text">
            <q-btn
              no-caps
              to="/booking"
              class="button-dapatkan q-mt-md"
              label="Dapatkan Tiket Sekarang!"
            />
          </div>
        </div>
      </div>

      <div class="q-mx-md q-mt-md">
        <a href="/booking"
          ><div class="container-tiket-kunjungan">
            <div
              class="tiket-kunjungan"
              v-for="(element, index) in elementTiketKunjungan"
              :key="index"
            >
              <div class="text-tiket-kunjungan">
                <div class="text-h5 text-bold text-black text-1">
                  {{ element.text1 }}
                </div>
                <div class="text-h6 text-2">{{ element.text2 }}</div>
                <div class="text-h6 text-3" id="text-area">
                  {{ element.text3 }}
                </div>
              </div>
              <img class="img-tiket-kunjungan" :src="element.img" alt="" />
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import navbar from "../components/NavbarNew.vue";
export default {
  components: { navbar },
  data() {
    return {
      wisataName: ref(),
      currentIndex: 2,
      images: [
        { src: "../src/assets/images/sejarahslider2.png" },
        { src: "../src/assets/images/sejarahslider1.png" },
        { src: "../src/assets/images/sejarahslider3.png" },
        { src: "../src/assets/images/sejarahslider4.png" },
        { src: "../src/assets/images/sejarahslider5.png" },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    prevImage() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.images.length - 1
          : this.currentIndex - 1;
    },
    nextImage() {
      this.currentIndex =
        this.currentIndex === this.images.length - 1
          ? 0
          : this.currentIndex + 1;
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
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
    scrollToNextSection() {
      this.$refs.section2.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

div {
  font-family: Raleway;
}

.container-tiket-kunjungan {
  width: 100%;
}

a {
  text-decoration: none;
}

.tiket-kunjungan {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1vw;
  padding-bottom: 0.7vw;
  border-bottom: 0.1vw solid #d0d5dd;
}

.img-tiket-kunjungan {
  width: 15rem;
  height: 10rem;
  cursor: pointer;
}

.text-tiket-kunjungan {
  cursor: pointer;
  text-decoration: none;
}

.text-tiket {
  font-weight: 600;
  font-size: 1rem;
  height: min-content;
  text-decoration: none;
  color: black;
}

.text-harga {
  font-weight: 400;
  font-size: 0.7rem;
  color: #5e5e5e;
  margin-bottom: 0;
}

.btn-kunjungan-text {
  cursor: pointer;
}

.btn-kunjungan-text .button-dapatkan {
  float: right;
  border-radius: 0.3vw;
  background-color: #123b32;
  color: white;
  font-size: 1.2vw;
}

.background-baluarti {
  background: url("../assets/images/museumPusakaa.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  padding: 10rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cardd {
  opacity: 0.5;
  transition: opacity 0.5s ease;
}
.cardd.active {
  opacity: 1;
}

.indicators {
  display: flex;
  gap: 0.5rem;
}
.indicators span {
  display: inline-block;
  width: 0.7rem;
  border-radius: 1rem;
  height: 0.25rem;
  background-color: gray;
  cursor: pointer;
}
.indicators span.active {
  background-color: black;
}

.img-card {
  width: 14rem;
  height: 20.5rem;
  border-radius: 1rem;
}

.img-fasilitas {
  width: 35rem;
  height: 35rem;
  border-radius: 0.2rem;
}

.title-tourist {
  width: 35rem;
}

.subtitle-tourist {
  width: 35rem;
}

@media screen and (max-width: 1200px) {
  .img-card {
    width: 6rem;
    height: 8.5rem;
    border-radius: 1rem;
  }

  .img-fasilitas {
    width: 23rem;
    height: 23rem;
    border-radius: 0.2rem;
  }

  .title-tourist {
    width: 100%;
  }

  .subtitle-tourist {
    width: 100%;
  }

  .img-masjid {
    order: 2;
  }

  .content-masjid {
    order: 1;
  }

  .img-tiket-kunjungan {
    height: 5rem;
    width: 10rem;
  }

  .text-1 {
    font-size: 1rem;
  }

  .text-2 {
    font-size: 0.8rem;
  }

  .text-3 {
    font-size: 0.8rem;
  }
}
</style>
