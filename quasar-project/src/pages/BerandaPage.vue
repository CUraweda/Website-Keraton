<template>
  <div>
    <navbar :isAdmin="false" />

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
        e,
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
      <q-video :ratio="16 / 9" :src="sectionData2?.xl1.data" />
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
            :src="sejarah.data"
            v-for="(sejarah, i) in sejarahImages"
            :key="i"
            style="width: 20rem; height: 20rem"
          />
        </div>

        <div class="flex items-center justify-center q-mt-xl">
          <q-btn
            no-caps
            icon-right="arrow_right_alt"
            label="Lihat Selengkapnya"
            @click="movePage(sectionData3?.xl1.data)"
            style="background: #123b32; color: white"
          />
        </div>
      </div>
    </section>

    <section
      :style="{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${eventImage})`,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        padding: '2.5rem 0',
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
            :src="events[eventIndex]?.image"
            spinner-color="white"
            v-for="eventIndex in showCounterEvent"
            :key="eventIndex"
            @mouseover="eventImage = events[eventIndex].image"
            class="rounded-borders hover-effect"
            style="width: 20rem; height: 20rem"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              {{ events[eventIndex]?.name }}
            </div>
          </q-img>
        </div>

        <div class="flex items-center justify-center q-mt-md">
          <div class="text-white text-center q-mx-lg" style="font-size: 1.2rem">
            {{ sectionData4?.xs2.data }}
          </div>
        </div>

        <div class="flex items-center justify-center q-mt-xl">
          <q-btn
            no-caps
            icon-right="arrow_right_alt"
            label="Lihat Selengkapnya"
            @click="movePage(sectionData4?.xl1.data)"
            style="background: #123b32; color: white"
          />
        </div>
      </div>
    </section>

    <section style="padding: 2rem 0" class="background-news">
      <div style="font-size: 1.75rem; text-align: center">Berita Terkini</div>

      <div class="q-gutter-md row justify-center">
        <q-card
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToDetail(slide.id)"
          class="q-mx-md q-my-lg cursor-pointer"
          style="width: 300px"
        >
          <img
            :src="slide.imageUrl"
            alt="Slide Image"
            style="width: 100%; height: 10rem"
          />
          <q-card-section>
            <div
              class="text-h6 text-bold"
              style="
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              "
            >
              {{ slide.title }}
            </div>
            <div
              class="text-subtitle2"
              style="
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: grey;
              "
            >
              {{ slide.summary }}
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="flex items-center justify-center q-mt-xl">
        <q-btn
          no-caps
          icon-right="arrow_right_alt"
          label="Lihat Selengkapnya"
          @click="movePage('/news')"
          style="background: #123b32; color: white"
        />
      </div>
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
          to="/booking"
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
        <q-list v-for="(faq, index) in faqs" :key="index" class="faqs">
          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <div style="font-size: 1rem">{{ faq.nomor + "." }}</div>
              </q-item-section>

              <q-item-section class="question-faqs">
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
import socket from "src/socket";

export default {
  components: { navbar, footerNew },
  data() {
    return {
      currentSlide: ref(1),
      sectionData: ref(),
      slides: ref([]),
      faqs: [],
      eventImage: ref(),
      showCounterEvent: ref(3),
      showCounterSejarah: ref(3),
      events: ref([]),
      sejarahImages: ref([]),
      slideAutoplay: ref(true),
    };
  },
  mounted() {
    this.fetchData();
    this.fetchNews();
    this.fetchEvents();
    this.socketConnection();
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ path: `/detail-news/${id}` });
    },
    socketConnection() {
      socket.connect();
      socket.on("dashboard", () => {
        this.fetchData();
      });
    },
    async fetchData() {
      try {
        const response = await this.$api.get("page/content/1");
        const dataRest = response?.data?.data[0];

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
        this.sejarahImages = this.formatImagesContext(
          dataRest.contents[3]?.context
        );

        this.sectionName4 = dataRest.contents[4]?.sectionName;
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
          });
        }
        faqs.shift();
        this.faqs = faqs;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchNews() {
      try {
        const response = await this.$api.get("news");
        this.slides = response.data.data.slice(0, 6).map((news) => ({
          id: news.id,
          imageUrl: news.image,
          link: news.link,
          title: news.title,
          summary: news.desc,
        }));
      } catch (err) {
        console.log(err);
      }
    },
    async fetchEvents() {
      try {
        const response = await this.$api.post("event/page", {});
        this.events = this.shuffleArray(response.data.data);
        this.eventImage = this.events[0].image;
      } catch (err) {
        console.log(err);
      }
    },
    formatImagesContext(context) {
      let formatedData = [],
        contextNames = Object.keys(context);
      for (let contextName of contextNames) {
        if (this.takeTwoChars(contextName) != "xi") continue;
        formatedData.push(context[contextName]);
      }
      return formatedData;
    },
    movePage(path) {
      this.$router.push(path);
    },
    takeTwoChars(str) {
      return str.slice(0, 2);
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
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

i.q-icon.notranslate.material-icons.q-expansion-item__toggle-icon {
  background: red;
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

.question-faqs {
  font-size: 1.5rem;
}

.faqs {
  margin: 0 5rem;
}

@media screen and (max-width: 600px) {
  .question-faqs {
    font-size: 0.8rem;
  }

  .faqs {
    margin: 0 1rem;
  }
}

.notify-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  width: auto;
  max-width: 300px;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.notify-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.notify-text {
  font-size: 0.875rem;
  color: #555;
}

.notify-success {
  border-color: #4caf50;
  background-color: #dff0d8;
}

.notify-error {
  border-color: #f44336;
  background-color: #f2dede;
}

.notify-warning {
  border-color: #ff9800;
  background-color: #fcf8e3;
}
</style>
