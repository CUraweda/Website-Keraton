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
          Keraton Kasepuhan Cirebon adalah salah satu dari empat keraton di
          Cirebon, Jawa Barat.
        </div>

        <div style="width: 20rem" class="text-weight-bold text-center">
          Didirikan pada tahun 1430 oleh Pangeran Cakrabuana, pendiri Kerajaan
          Cirebon.
        </div>

        <div style="width: 20rem" class="text-weight-bold text-center">
          Keraton Kasepuhan merupakan salah satu peninggalan sejarah yang
          penting di Cirebon
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
        Destinasi wisata yang <span class="text-bold">wajib</span> dikunjungi
      </div>

      <div class="text-h6 q-mt-md text-center">
        Menawarkan berbagai hal menarik untuk dilihat dan dipelajari, mulai dari
        sejarah, arsitektur, hingga budaya.
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

    <section
      style="
        background: linear-gradient(
          to bottom,
          rgba(33, 33, 33, 0) 0%,
          #212121 15.38%
        );
        min-height: 100vh;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      "
    >
      <div class="text-h2 text-center text-center text-white q-mt-xl">
        Top <span class="text-bold">Tourist</span> Attraction
      </div>

      <div style="margin-top: 10rem">
        <div class="flex items-center justify-between" style="gap: 1rem 15rem">
          <div>
            <div class="flex items-center q-gutter-md">
              <div
                style="
                  width: 3rem;
                  height: 0.15rem;
                  background: #fae084;
                  border-radius: 1rem;
                "
              ></div>
              <div style="color: #fae084">01</div>
            </div>

            <div class="text-white text-h4 q-mt-sm title-tourist">
              Dalem Agung Pangkuwati
            </div>

            <div class="q-mt-xl text-white subtitle-tourist">
              Dalem Agung Pakungwati merupakan kompleks bangunan utama keraton.
              Kompleks ini terdiri dari berbagai bangunan, seperti pendopo,
              masjid, dan museum. Masjid Agung Kasepuhan merupakan salah satu
              masjid tertua di Cirebon dan merupakan salah satu bangunan
              bersejarah yang penting di kota ini.
            </div>
          </div>

          <div>
            <q-img
              src="../assets/images/image 21.png"
              style="width: 22rem; height: 20rem"
            />
          </div>
        </div>

        <div class="flex items-center q-mt-md" style="gap: 1rem 15rem">
          <div class="img-masjid">
            <q-img
              src="../assets/images/image34.png"
              style="width: 22rem; height: 20rem"
            />
          </div>

          <div class="content-masjid">
            <div class="flex items-center q-gutter-md">
              <div style="color: #fae084">02</div>
              <div
                style="
                  width: 3rem;
                  height: 0.15rem;
                  background: #fae084;
                  border-radius: 1rem;
                "
              ></div>
            </div>

            <div class="text-white text-h4 q-mt-sm title-tourist">
              Masjid Agung Kasepuhan
            </div>

            <div class="q-mt-xl text-white subtitle-tourist">
              Masjid Agung Kasepuhan merupakan salah satu masjid tertua di
              Cirebon dan merupakan salah satu bangunan bersejarah yang penting
              di kota ini. Masjid ini dibangun pada tahun 1480 oleh Sunan Gunung
              Jati, salah satu Wali Songo.
            </div>
          </div>
        </div>

        <div class="flex items-center q-mt-md" style="gap: 1rem 15rem">
          <div>
            <div class="flex items-center q-gutter-md">
              <div
                style="
                  width: 3rem;
                  height: 0.15rem;
                  background: #fae084;
                  border-radius: 1rem;
                "
              ></div>
              <div style="color: #fae084">03</div>
            </div>

            <div class="text-white text-h4 q-mt-sm title-tourist">
              Museum Pusaka Kasepuhan
            </div>

            <div class="q-mt-xl text-white subtitle-tourist">
              Museum Pusaka Keraton Kasepuhan menyimpan berbagai koleksi benda
              bersejarah, seperti kereta kencana, gamelan, dan lukisan. Salah
              satu koleksi yang paling terkenal adalah kereta kencana Singa
              Barong, yang merupakan kereta kencana Sunan Gunung Jati.
            </div>
          </div>

          <div>
            <q-img
              src="../assets/images/image 35.png"
              style="width: 22rem; height: 20rem"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="flex items-center justify-between q-mx-md"
        style="margin-top: 4rem"
      >
        <div class="text-h3">Lokasi</div>
        <div style="width: 30rem">
          Dengan luas sekitar 13,5 hektar dan terdiri dari 2 komplek yaitu Dalem
          Agung Pakungwati dan kompleks Keraton Pakungwati
        </div>
      </div>

      <div class="flex items-center justify-center q-gutter-x-md q-mt-xl">
        <q-img
          src="../assets/images/Frame 80.png"
          style="width: 38rem; height: 40rem"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3439357079596!2d108.5708669!3d-6.7278234999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee263eaaaaaab%3A0x20ea18cbfb1df195!2sKeraton%20Kasepuhan!5e0!3m2!1sid!2sid!4v1710081749605!5m2!1sid!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style="width: 38rem; height: 40rem"
        />
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
        { src: "../src/assets/images/objekwisataslider1.png" },
        { src: "../src/assets/images/objekwisataslider2.png" },
        { src: "../src/assets/images/objekwisataslider3.png" },
        { src: "../src/assets/images/objekwisataslider4.png" },
        { src: "../src/assets/images/objekwisataslider5.jpg" },
      ],

      imgFasilitas: [
        { img: "../src/assets/images/areaparkir.png", text: "Area Parkir" },
        { img: "../src/assets/images/tempatibadah.png", text: "Tempat Ibadah" },
        { img: "../src/assets/images/toilet.png", text: "Toilet" },
        {
          img: "../src/assets/images/tempatpenjualan.png",
          text: "Tempat Penjualan Souvenir",
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
        const response = await this.$api.get("wisata/1");
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
  background: url("../src/assets/images/Baluarti Keraton.png");
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
