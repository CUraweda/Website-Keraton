<template>
  <div>
    <navbar />

    <section
      :style="{
        'min-height': '100vh',
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${sectionimg})`,
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center',
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
      }"
    >
      <div class="text-h5 text-center" style="color: #fae084">
        {{ sectionName }}
      </div>
      <div class="text-h2 text-white text-center q-mx-lg">
        {{ sectionData?.xs1?.data }}
      </div>
    </section>

    <section
      :style="{
        'background-image': `linear-gradient(transparent, #fff9a0, #ffe96e),url(${sectionimg1})`,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        display: 'flex',
        'justify-content': 'center',
        'text-align': 'center',
      }"
    >
      <div
        style="
          width: 40rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 8rem 0;
        "
      >
        <div style="color: #daa520" class="text-h5">
          {{ sectionName1 }}
        </div>
        <div class="text-h2 text-black">
          {{ sectionData1?.xs1?.data }}
        </div>
        <div class="text-black q-mt-md q-mx-lg">
          {{ sectionData1?.xs2?.data }}
        </div>
      </div>
    </section>

    <section>
      <q-video
        :ratio="16 / 9"
        src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
      />
    </section>

    <section
      style="
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
      class="background-section-4"
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem 0;
        "
      >
        <div style="color: #d9a520" class="text-h5">
          {{ sectionName3 }}
        </div>
        <div class="text-h3 text-center">
          {{ sectionData3?.xs1.data }}
        </div>

        <div class="flex q-gutter-xl q-mt-md justify-center">
          <q-img
            class="rounded-borders hover-effect"
            :src="sectionData3?.xi1.data"
            style="width: 20rem; height: 20rem"
          />

          <q-img
            class="rounded-borders hover-effect"
            :src="sectionData3?.xi2.data"
            style="width: 20rem; height: 20rem"
          />

          <q-img
            class="rounded-borders hover-effect"
            :src="sectionData3?.xi3.data"
            style="width: 20rem; height: 20rem"
          />
        </div>

        <div class="flex items-center justify-center q-mt-xl">
          <q-btn
            no-caps
            icon-right="arrow_right_alt"
            label="Lihat Selengkapnya"
            style="background: #123b32; color: white"
          />
        </div>
      </div>
    </section>

    <section
      :style="{
        'min-height': '100vh',
        'background-image': `url(${currentBackground})`,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'padding-top': '2.5rem',
      }"
    >
      <div>
        <div style="color: #d9a520" class="text-h5 text-center">
          {{ sectionName4 }}
        </div>
        <div class="text-h3 text-center text-white">
          {{ sectionData4?.xs1.data }}
        </div>

        <div class="flex items-center justify-center q-gutter-md q-mt-xl">
          <q-img
            :src="sectionData4?.xi1?.data"
            spinner-color="white"
            class="rounded-borders hover-effect"
            style="width: 20rem; height: 20rem"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Caption
            </div>
          </q-img>

          <q-img
            :src="sectionData4?.xi2?.data"
            spinner-color="white"
            class="rounded-borders hover-effect"
            style="width: 20rem; height: 20rem"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Caption
            </div>
          </q-img>

          <q-img
            :src="sectionData4?.xi3?.data"
            class="rounded-borders hover-effect"
            style="width: 20rem; height: 20rem"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Caption
            </div>
          </q-img>
        </div>

        <div class="flex items-center justify-center q-mt-md">
          <div class="text-white text-center q-mx-lg" style="font-size: 1.2rem">
            Hingga saat ini, Keraton Kasepuhan Cirebon tetap mempertahankan
            keaslian dan tradisi turun menurun dengan rutin melaksanakan upacara
            adat tradisi mereka.
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 2rem 0" class="background-news">
      <div style="font-size: 1.75rem; text-align: center">Berita Terkini</div>

      <q-carousel
        arrows
        animated
        height="400px"
        v-model="currentSlide"
        class="q-mt-md q-mx-lg"
      >
        <q-carousel-slide
          v-for="(slide, index) in slides"
          :img-src="slide.imageUrl"
          :key="index"
          :name="slide.id"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">{{ slide.title }}</div>
            <div class="text-subtitle1">{{ slide.summary }}</div>
          </div>
        </q-carousel-slide>

        <!-- <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          /> -->
      </q-carousel>
    </section>

    <section
      :style="{
        'background-image': `url(${sectionimg1})`,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
      }"
    >
      <div
        style="padding: 3rem 0"
        class="flex items-center justify-center column"
      >
        <div style="color: #d9a520" class="text-h5">
          {{ sectionName5 }}
        </div>
        <div class="text-h4 text-center" style="width: 25rem">
          {{ sectionData5?.xs1.data }}
        </div>
      </div>
    </section>

    <section
      style="
        background: linear-gradient(
          90deg,
          rgba(218, 165, 32, 0.5) 0%,
          rgba(18, 59, 50, 0.5) 100%
        );
      "
    >
      <div style="padding: 2rem 0" class="q-mx-md">
        <div style="font-size: 1.2rem">
          {{ sectionData5?.xs2.data }}
        </div>
        <q-btn
          no-caps
          label="Dapatkan Tiket Sekarang!"
          style="background: #123b32; color: white"
          class="q-mt-xl"
        />
      </div>
    </section>

    <section
      :style="{
        'background-image': `url(${sectionimg1})`,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        padding: '2rem 0',
      }"
    >
      <div style="color: #d9a520" class="text-h5 text-center">
        {{ sectionName6 }}
      </div>
      <div class="text-h5 text-center q-mt-sm">
        {{ sectionData6?.xs1.data }}
      </div>
      <div class="q-mt-lg">
        <q-list
          v-for="(faq, index) in faqs"
          :key="index"
          style="margin: 0 5rem"
        >
          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <div style="font-size: 1rem">{{ faq.nomor }}</div>
              </q-item-section>

              <q-item-section style="font-size: 1.5rem">
                {{ faq.pertanyaan }}
              </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                {{ faq.jawaban }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </section>

    <section>
      <footerNew class="background-footer" />
    </section>
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
      currentSlide: ref(1),
      sectionData: ref(),
      slides: ref([]),
      faqs: [],
    };
  },
  mounted() {
    this.fetchData();
    this.fetchNews();
  },
  methods: {
    async fetchData() {
      let rawSection = {};
      try {
        const response = await this.$api.get("page/content/1");
        const dataRest = response?.data?.data[0];

        // Section data assignments
        this.sectionimg = dataRest.contents[0]?.context?.xi1?.data;
        this.sectionData = dataRest.contents[0]?.context;
        this.sectionName = dataRest.contents[0]?.sectionName;

        this.sectionimg1 = dataRest.contents[1]?.context?.xi1?.data;
        this.sectionName1 = dataRest.contents[1]?.sectionName;
        this.sectionData1 = dataRest.contents[1]?.context;

        this.sectionName2 = dataRest.contents[2]?.sectionName;
        this.sectionData2 = dataRest.contents[2]?.context;
        this.sectionimg2 = dataRest.contents[2]?.context?.xi1?.data;

        this.sectionName3 = dataRest.contents[3]?.sectionName;
        this.sectionData3 = dataRest.contents[3]?.context;

        this.sectionName4 = dataRest.contents[4]?.sectionName;
        this.sectionimg4 = dataRest.contents[4]?.context?.xi1?.data;
        this.sectionData4 = dataRest.contents[4]?.context;

        this.sectionName5 = dataRest.contents[5]?.sectionName;
        this.sectionData5 = dataRest.contents[5]?.context;

        this.sectionName6 = dataRest.contents[6]?.sectionName;
        this.sectionData6 = dataRest.contents[6]?.context;

        const faqsDatas = Object.values(dataRest.contents[6]?.context);
        let faqs = [];
        for (let faqIndex in faqsDatas) {
          const faqData = faqsDatas[faqIndex];
          faqs.push({
            nomor: faqIndex,
            pertanyaan: faqData?.data,
            jawaban: faqData?.sub,
            active: false,
          });
        }
        faqs.shift();
        this.faqs = faqs;
        this.currentBackground = this.sectionimg4;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchNews() {
      try {
        const response = await this.$api.get("news");
        console.log(response.data.data);
        this.slides = response.data.data.map((news) => ({
          imageUrl: news.image,
          link: news.link,
          title: news.title,
          summary: news.desc,
        }));

        console.log(this.slides);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap");

* {
  font-family: Raleway;
}

.hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-effect:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.background-news {
  background-image: url("../assets/images/batik.png"),
    linear-gradient(0deg, #fff9a021, #ffe96e);
}

.background-footer {
  background-image: url("../assets/images/batik.png");
}

.background-section-4 {
  background-image: url("../assets/images/batik.png");
}
</style>
