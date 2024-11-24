<template>
  <div>
    <navbar :isAdmin="false" />

    <section ref="section1" class="background-baluarti">
      <div class="text-h2 text-white text-bold text-center">Museum Ai</div>

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

    <footerNew class="background-footer" />
  </div>
</template>

<script>
import { ref } from "vue";
import navbar from "../components/NavbarNew.vue";
import footerNew from "../components/FooterNew.vue";

export default {
  components: { navbar, footerNew },
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
  },
};
</script>

<style scoped>
.background-footer {
  background-image: url("../assets/images/batik.png");
}
</style>
