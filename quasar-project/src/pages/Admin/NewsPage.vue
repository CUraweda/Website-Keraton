<template>
  <div>
    <navbar />
    <q-btn label="Create News" @click="handleDialog" />
    <div class="q-gutter-xs q-mt-md">
      <div
        class="flex col-grow q-gutter-md"
        style="
          overflow-x: auto;
          flex-wrap: nowrap;
          -ms-overflow-style: none;
          scrollbar-width: none;
        "
      >
        <div v-for="(data, i) in newsDatas" :key="i">
          <q-card class="my-card" flat bordered style="width: 20rem">
            <q-img :src="data.image" style="height: 15rem" />

            <q-card-section>
              <div class="text-h5">{{ data.title }}</div>
              <div class="text-caption text-grey">
                {{ data.desc }}
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                no-caps
                dense
                color="green"
                label="Link"
                :href="data.link"
              />
              <q-space />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <q-dialog v-model="newsDialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add New Event</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="flex q-gutter-md">
          <div>
            <q-input
              filled
              v-model="newsData.name"
              label="Title"
              color="black"
              bg-color="gray"
            />
            <q-input
              filled
              v-model="newsData.desc"
              label="Description"
              color="black"
              bg-color="gray"
              class="q-mt-md"
            />
            <q-input
              filled
              v-model="newsData.link"
              label="Link"
              color="black"
              bg-color="gray"
              class="q-mt-md"
            />
          </div>

          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            "
          >
            <div>
              <q-file
                filled
                type="file"
                v-model="newsData.image"
                label="Tambahkan Image"
                color="black"
                class="ellipsis"
                style="width: 10rem"
                @update:model-value="handleUploadNews()"
              />
              <q-img :src="imgURLNews" v-if="imgURLNews" />
            </div>
            <div>
              <q-btn label="Create" @click="createUpdateData" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

  <!-- <Notification
    v-if="notification.message"
    :message="notification.message"
    :type="notification.type"
  /> -->
</template>

<script>
import { ref } from "vue";
import navbar from "../../components/NavbarAdmin.vue";
import cookieHandler from "src/cookieHandler";
import env from "src/stores/environment";
// import Notification from "components/NotificationAlert.vue";

export default {
  components: {
    // Notification,
    navbar,
  },
  data() {
    return {
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
      newsDatas: ref(),
      newsData: ref({
        link: null,
        name: null,
        desc: null,
        image: null,
      }),
      iterationsDatas: ref(),
      newsDialog: ref(false),
      currentId: undefined,
      notification: {
        // Tambahkan properti notification ke dalam objek data
        message: "",
        type: "",
      },
    };
  },
  watch: {
    newsDialog: {
      handler(val) {
        if (!val) this.resetDefault();
      },
    },
  },
  mounted() {
    this.fethcData();
  },
  methods: {
    handleUploadNews() {
      if (this.newsData.image) {
        this.imgURLNews = URL.createObjectURL(this.newsData.image);
      }
    },
    async fethcData() {
      try {
        const responseNews = await this.$api.get("news");
        if (responseNews.status != 200) throw Error(responseNews.data.message);
        this.newsDatas = responseNews.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async createUpdateData() {
      try {
        let url = "news";
        if (this.currentId) url += `/${this.currentId}`;
        const response = await this.$api.post(url, { ...this.newsData });
        if (response.status != 200) throw Error(response.data.message);
        this.newsDialog = false;
        this.showNotif(response.data.message, success);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteData() {
      try {
        const response = await this.$api.delete(`news/${this.currentId}`);
        if (response.status != 200) throw Error(response.data.message);
        this.showNotif(response.data.message, success);
      } catch (err) {
        console.log(err);
      }
    },
    showNotif(mes, type) {
      this.notification.message = mes;
      this.notification.type = type;
      setTimeout(() => {
        this.notification.message = "";
        this.notification.type = "";
      }, 4000);
    },
    handleDialog() {
      this.newsDialog = !this.newsDialog;
      if (!this.newsDialog) this.currentId = undefined;
    },
    resetDefault() {
      this.newsData = {
        iterationId: null,
        price: null,
        name: null,
        desc: null,
        image: null,
      };
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.form-group textarea {
  resize: vertical;
}
.form-group button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.form-group button:hover {
  background-color: #0056b3;
}
</style>
