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
          Salah satu destinasi wisata yang wajib dikunjungi jika Anda berkunjung
          ke Cirebon.
        </div>

        <div style="width: 20rem" class="text-weight-bold text-center">
          Dibangun pada tahun 1430 oleh Pangeran Cakrabuana, pendiri Kerajaan
          Cirebon.
        </div>

        <div style="width: 20rem" class="text-weight-bold text-center">
          Memiliki koleksi benda bersejarah, seperti kereta kencana, gamelan,
          dan lukisan.
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
        <span class="text-bold">Mengapresiasi</span> nilai seni Cirebon
      </div>

      <div class="text-h6 q-mt-md text-center">
        Dalem Agung Pakungwati merupakan kompleks bangunan utama di Keraton
        Kasepuhan, Cirebon, Jawa Barat.
      </div>

      <div class="q-mt-xl">
        <div class="flex items-center justify-center q-gutter-md">
          <q-img
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            :id="'card-' + index"
            :class="{ cardd: true, active: index === currentIndex }"
            class="img-card"
          />
        </div>

        <div class="flex items-center justify-center q-mt-md">
          <q-btn flat icon="arrow_back" @click="prevImage" />
          <div class="indicators">
            <span
              v-for="(image, index) in images"
              :key="index"
              :class="{ active: index === currentIndex }"
              @click="setCurrentIndex(index)"
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
        <div v-for="(item, index) in imgFasilitas" :key="index">
          <q-img :src="item.img" class="img-fasilitas">
            <div class="absolute-bottom text-subtitle1 text-center">
              {{ item.text }}
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
                <div class="text-tiket">{{ element.text1 }}</div>
                <p class="text-harga">{{ element.text2 }}</p>
                <p class="text-harga" id="text-area">{{ element.text3 }}</p>
              </div>
              <img class="img-tiket-kunjungan" :src="element.img" alt="" />
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script scoped>
import { ref } from "vue";
import navbar from "../components/NavbarNew.vue";
export default {
  components: { navbar },
  data() {
    return {
      wisataName: ref(),
      currentIndex: 2,
      images: [
        { src: "../src/assets/images/nilaisenislider1.png" },
        { src: "../src/assets/images/nilaisenislider2.png" },
        { src: "../src/assets/images/nilaisenislider3.png" },
        { src: "../src/assets/images/nilaisenislider4.png" },
        { src: "../src/assets/images/nilaisenislider5.png" },
      ],

      imgFasilitas: [
        {
          img: "../src/assets/images/panggungsanggabuwana.png",
          text: "Panggung Sanggabuwana",
        },
        {
          img: "../src/assets/images/masjidagungkasepuhan.png",
          text: "Masjid Agung Kasepuhan",
        },
        {
          img: "../src/assets/images/pendopoagungpakungwati.png",
          text: "Pendopo Agung Pakungwati",
        },
        {
          img: "../src/assets/images/museumpusakakeraton.png",
          text: "Museum Pusaka Keraton Kasepuhan",
        },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
    async fetchData() {
      try {
        const response = await this.$api.get("wisata/3");
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

<style>
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
  background: url("../assets/images/dalemagungpakungwati.png");
  display: flex;
  padding: 9.5rem 0;
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

@media screen and (max-width: 600px) {
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
}
</style>
