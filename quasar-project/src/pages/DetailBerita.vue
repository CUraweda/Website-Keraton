<template>
  <navbar :isAdmin="false" />

  <div class="q-pa-md">
    <div
      class="text-h3 text-bold q-my-lg text-center"
      style="line-height: 1.4; max-width: 800px; margin: 0 auto"
    >
      {{ article.title }}
    </div>

    <div class="q-my-lg">
      <img
        :src="article.imageUrl"
        alt="Article Image"
        style="
          width: 100%;
          max-height: 450px;
          object-fit: cover;
          border-radius: 8px;
        "
      />
    </div>

    <div
      class="text-body1 text-justify q-my-lg"
      style="line-height: 1.8; max-width: 800px"
    >
      {{ article.desc }}
    </div>
  </div>

  <footerNew class="background-footer" />
</template>

<script>
import { ref } from "vue";
import navbar from "../components/NavbarNew.vue";
import footerNew from "../components/FooterNew.vue";

export default {
  components: { navbar, footerNew },

  data() {
    return {
      article: {
        title: ref(""),
        desc: ref(""),
        imageUrl: ref(""),
        publishDate: ref(""),
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const articleId = this.$route.params.id;

        const response = await this.$api.get(`news/${articleId}`);

        this.article = {
          title: response.data.data.title,
          desc: response.data.data.desc,
          imageUrl: response.data.data.image,
          publishDate: response.data.data.publishDate,
        };
      } catch (error) {
        console.error("Gagal memuat data artikel:", error);
      }
    },
  },
};
</script>

<style>
.text-justify {
  text-align: justify;
}

.text-center {
  text-align: center;
}
</style>
