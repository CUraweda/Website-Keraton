<template>
  <navbar :isAdmin="false" />

  <section style="padding: 2rem 0" class="background-news">
    <div style="font-size: 1.75rem; text-align: center; font-weight: bold">
      Berita Terkini
    </div>

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
          style="width: 100%; height: 10rem; object-fit: cover"
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
  </section>

  <footerNew class="background-footer" />
</template>

<script>
import navbar from "../components/NavbarNew.vue";
import footerNew from "../components/FooterNew.vue";

export default {
  components: { navbar, footerNew },

  data() {
    return {
      slides: [],
    };
  },
  async mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const response = await this.$api.get("news");
        this.slides = response.data.data.map((news) => ({
          id: news.id,
          imageUrl: news.image,
          link: news.link,
          title: news.title,
          summary: news.desc,
        }));
      } catch (err) {
        console.error("Gagal memuat berita:", err);
      }
    },
    goToDetail(id) {
      this.$router.push({ name: "DetailBerita", params: { id } });
    },
  },
};
</script>

<style scoped>
.background-news {
  background-color: #f4f4f4;
}

.q-card {
  transition: transform 0.2s ease-in-out;
}

.q-card:hover {
  transform: scale(1.05);
}
</style>
