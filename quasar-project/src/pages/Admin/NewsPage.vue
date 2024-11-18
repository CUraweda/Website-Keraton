<template>
  <div>
    <navbar :isAdmin="true" />
    <q-btn class="q-mx-md" label="Create News" @click="handleDialog" />
    <div class="q-gutter-xs q-mt-md q-mx-md">
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
              <div
                class="text-h5"
                style="
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                {{ data.title }}
              </div>
              <div
                class="text-caption text-grey"
                style="
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                {{ data.desc }}
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn flat @click="handleDialog(data)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="green"
                >
                  <path
                    d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
                  />
                </svg>
              </q-btn>
              <q-btn flat @click="confirmDelete(data.id)"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="red"
                >
                  <path
                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
                  />
                </svg>
              </q-btn>
              <q-space />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <q-dialog v-model="newsDialog" persistent>
      <q-card class="custom-dialog-card">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add New Event</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-gutter-md">
          <div>
            <q-input
              filled
              v-model="newsData.title"
              label="Title"
              color="black"
              bg-color="gray-2"
              :rules="[(val) => (val && val.length > 0) || 'Title is required']"
            />

            <q-input
              filled
              v-model="newsData.desc"
              label="Description"
              color="black"
              bg-color="gray-2"
              class="q-mt-md"
              :rules="[
                (val) => (val && val.length > 0) || 'Description is required',
              ]"
            />

            <q-input
              filled
              v-model="newsData.link"
              label="Link (optional)"
              color="black"
              bg-color="gray-2"
              class="q-mt-md"
            />
          </div>

          <div
            class="q-mt-md"
            style="display: flex; flex-direction: column; gap: 1rem"
          >
            <q-file
              filled
              v-model="newsData.image"
              label="Upload Image"
              color="black"
              class="ellipsis"
              style="max-width: 15rem"
              :rules="[(val) => val || 'Please upload an image']"
              @update:model-value="handleUploadNews"
            />
            <q-img
              :src="imgURLNews"
              v-if="imgURLNews"
              class="q-mt-sm"
              style="max-width: 100%; border-radius: 8px"
            />

            <q-btn
              :label="currentId ? 'Update News' : 'Create News'"
              color="primary"
              class="q-mt-md"
              @click="createUpdateData"
              :disable="!newsData.title || !newsData.desc || !newsData.image"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import navbar from "../../components/NavbarNew.vue";
import cookieHandler from "src/cookieHandler";
import env from "src/stores/environment";
import SimpleNotify from "simple-notify";
import "simple-notify/dist/simple-notify.css";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      imgURLNews: ref(),
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
      newsDatas: ref(),
      newsData: ref({
        link: null,
        title: null,
        desc: null,
        image: null,
      }),
      iterationsDatas: ref(),
      newsDialog: ref(false),
      currentId: undefined,
      notification: {
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
    this.fetchData();
  },
  methods: {
    confirmDelete(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteData(id);
        }
      });
    },
    showNotif(msg, status) {
      const myNotify = new SimpleNotify({
        text: `${msg}`,
        status: `${status}`,
        autoclose: false,
      });
      setTimeout(() => {
        myNotify.close();
      }, 3000);
    },
    handleUploadNews() {
      if (this.newsData.image) {
        this.imgURLNews = URL.createObjectURL(this.newsData.image);
      }
    },
    async fetchData() {
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
        let url = "news/action";
        if (this.currentId) url += `/${this.currentId}`;
        console.log(this.newsData);
        const requestBody = {
          link: this.newsData.link,
          desc: this.newsData.desc,
          title: this.newsData.title,
          image: this.newsData.image,
        };
        const response = await this.$api.post(url, requestBody, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status != 200) throw Error(response.data.message);
        this.newsDialog = false;
        this.fetchData();
        this.showNotif(response.data.message, "success");
      } catch (err) {
        this.showNotif(
          err.response ? err.response.data.message : err.message,
          "error"
        );
        console.log(err);
      }
    },
    async deleteData(id) {
      try {
        const response = await this.$api.delete(`news/${id}`);
        if (response.status != 200) throw Error(response.data.message);
        this.fetchData();
        this.showNotif(response.data.message, "success");
      } catch (err) {
        this.showNotif(
          err.response ? err.response.data.message : err.message,
          "error"
        );
        console.log(err);
      }
    },
    handleDialog(data) {
      this.newsDialog = !this.newsDialog;
      this.currentId = data ? data.id : undefined;
      if (data) {
        this.newsData = { ...data };
        this.imgURLNews = data.image;
      }
    },
    resetDefault() {
      this.imgURLNews = undefined;
      this.currentId = undefined;
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

.custom-dialog-card {
  max-width: 800px;
  width: 100%;
  margin: auto;
}
</style>
