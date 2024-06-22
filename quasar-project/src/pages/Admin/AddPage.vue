<template>
  <div v-if="isAdmin" style="margin-top: 50px; justify-content: center">
    <div style="margin: auto" class="wrap">
      <div
        style="
          justify-content: space-between;
          display: flex;
          width: 100%;
          padding: auto;
          align-items: center;
        "
      >
        <div style="display: flex; align-items: center">
          <img
            style="width: 3.2rem; height: 100%; margin-inline: 10px"
            alt="icon-aplikasi"
            src="../../assets/images/logo_keraton 1.png"
            class="app-icon"
          />
          <section style="display: block">
            <div class="text-h6 text-bold">Edit Section {{ sectionName }}</div>
            <div class="">Ubah dan alur konten web Keraton</div>
          </section>
        </div>
        <div style="padding: auto; height: 100%">
          <!-- <q-btn auto-close flat size="15px" round icon="more_vert">
            <q-menu>
              <q-list style="align-content: flex-end; width: 200px">
                <q-btn
                  icon="add"
                  color="green"
                  flat
                  no-caps
                  @click="addNewInput('text')"
                  label="Add Text Input"
                  class="full-width"
                  style="width: 100%; justify-content: flex-start"
                />
                <q-btn
                  icon="add"
                  flat
                  color="green"
                  no-caps
                  @click="addNewInput('link')"
                  label="Add Link Input"
                  class="full-width"
                  style="width: 100%; text-align: left"
                />
                <q-btn
                  icon="add"
                  color="green"
                  flat
                  no-caps
                  @click="addNewInput('image')"
                  label="Add Image Input"
                  class="full-width"
                  style="width: 100%; text-align: left"
                />
              </q-list>
            </q-menu>
          </q-btn> -->
        </div>
      </div>
      <div
        class="col"
        style="
          height: fit-content;
          gap: 10px;
          width: 100%;
          display: inline-flex;
          padding: 10px 0;
          margin-top: 20px;
        "
      >
        <q-input
          filled
          v-model="sectionName"
          label="Section Name"
          color="black"
          bg-color="gray"
          class="full-width"
        />
        <q-input
          filled
          v-model="sectionOrder"
          type="number"
          label="Order"
          color="black"
          bg-color="gray"
        />
      </div>

      <div
        style="height: fit-content; gap: 10px; width: 100%; padding-top: 40px"
      >
        <q-btn
          icon="add_circle"
          color="green"
          no-caps
          flat
          @click="addNewInput('text')"
          label="Add Text Input"
        />

        <div
          v-for="(item, itemIndex) in textInputs"
          :key="itemIndex"
          class="full-width"
          style="gap: 5px"
        >
          <div>
            <q-separator style="margin: 10px 0" />
            <section
              style="
                height: fit-content;
                gap: 10px;
                width: 100%;
                display: inline-flex;
              "
            >
              <q-input
                filled
                v-model="item.data"
                label="Text"
                color="black"
                bg-color="gray"
                style="margin-bottom: 5px"
                class="full-width"
              />
              <q-btn
                @click="deleteInput('textInputs', itemIndex)"
                icon="delete"
                flat
                color="red"
                no-caps
                style="
                  margin-bottom: 5px;
                  background-color: rgba(255, 0, 0, 0.102);
                "
              />
            </section>
          </div>
          <div v-for="(subData, subIndex) in item.subDatas" :key="subIndex">
            <section
              style="
                height: fit-content;
                gap: 10px;
                width: 100%;
                display: inline-flex;
              "
            >
              <q-input
                filled
                v-model="item.subDatas[subIndex]"
                label="Sub Name"
                color="black"
                bg-color="gray"
                style="margin-bottom: 10px"
              />
              <q-input
                filled
                v-model="item[subData]"
                label="Value"
                class="full-width"
                color="black"
                bg-color="gray"
                style="margin-bottom: 10px"
              />
              <q-btn
                @click="deleteInput('textInputs', itemIndex, true, subIndex)"
                icon="delete"
                flat
                color="red"
                no-caps
                style="
                  margin-bottom: 10px;
                  background-color: rgba(255, 0, 0, 0.102);
                "
              />
            </section>
          </div>
          <q-btn
            @click="addNewSubInput('text', itemIndex)"
            label="Add Sub"
            color="green"
            no-caps
            style="margin: 5px"
          />
        </div>
      </div>

      <div
        style="height: fit-content; gap: 10px; width: 100%; padding-top: 20px"
      >
        <q-btn
          icon="add_link"
          color="green"
          no-caps
          flat
          @click="addNewInput('link')"
          label="Add Link Input"
          class="q-mt-xl"
        />
        <div
          v-for="(link, itemIndex) in linkInputs"
          :key="itemIndex"
          class="full-width"
          style="gap: 5px"
        >
          <div class="col-grow">
            <q-separator style="margin: 10px 0" />
            <section
              style="
                height: fit-content;
                gap: 10px;
                width: 100%;
                display: inline-flex;
              "
            >
              <q-input
                filled
                v-model="link.data"
                label="Text"
                color="black"
                bg-color="gray"
                style="margin-bottom: 10px"
                class="full-width"
              />
              <q-btn
                @click="deleteInput('linkInputs', itemIndex)"
                icon="delete"
                flat
                color="red"
                no-caps
                style="
                  margin-bottom: 10px;
                  background-color: rgba(255, 0, 0, 0.102);
                "
              />
            </section>
            <div v-for="(subData, subIndex) in link.subDatas" :key="subIndex">
              <section
                style="
                  height: fit-content;
                  gap: 10px;
                  width: 100%;
                  display: inline-flex;
                "
              >
                <q-input
                  filled
                  v-model="link.subDatas[subIndex]"
                  label="Sub Name"
                  color="black"
                  bg-color="gray"
                  style="margin-bottom: 10px"
                />
                <q-input
                  filled
                  v-model="link[subData]"
                  label="Value"
                  color="black"
                  bg-color="gray"
                  class="full-width"
                  style="margin-bottom: 10px"
                />
                <q-btn
                  @click="deleteInput('linkInputs', itemIndex, true, subIndex)"
                  icon="delete"
                  flat
                  color="red"
                  no-caps
                  style="
                    margin-bottom: 10px;
                    background-color: rgba(255, 0, 0, 0.102);
                  "
                />
              </section>
            </div>
            <q-btn
              @click="addNewSubInput('link', itemIndex)"
              label="Add Sub"
              color="green"
              no-caps
              style="margin: 5px"
            />
          </div>
        </div>
      </div>

      <div
        style="height: fit-content; gap: 10px; width: 100%; padding-top: 50px"
      >
        <q-btn
          icon="add_photo_alternate"
          color="green"
          flat
          no-caps
          @click="addNewInput('image')"
          label="Add Image Input"
        />

        <div v-for="(image, itemIndex) in imageInputs" :key="itemIndex">
          <q-separator style="margin: 10px 0" />
          <div class="col-grow">
            <section
              style="
                height: fit-content;
                gap: 10px;
                width: 100%;
                display: inline-flex;
              "
            >
              <q-file
                filled
                type="file"
                v-model="image.data"
                class="full-width"
                :label="image?.data ? 'Ganti Image' : 'Tambah Image'"
                color="black"
                @update:model-value="handleUpload(image?.data)"
                style="margin-bottom: 10px"
              />
              <q-btn
                @click="deleteInput('imageInputs', itemIndex)"
                icon="delete"
                flat
                color="red"
                no-caps
                style="
                  margin-bottom: 10px;
                  background-color: rgba(255, 0, 0, 0.102);
                "
              />
            </section>
            <div
              style="
                padding: auto;
                justify-content: center;
                margin-bottom: 10px;
              "
            >
              <q-img
                :src="image.data?.data || image.data"
                v-if="image.data"
                style="
                  margin: auto;
                  display: flex;
                  width: 100%;
                  height: 200px;
                  border-radius: 8px;
                "
              />
            </div>
            <div v-for="(subData, subIndex) in image.subDatas" :key="subIndex">
              <section
                style="
                  height: fit-content;
                  gap: 10px;
                  width: 100%;
                  display: inline-flex;
                "
              >
                <q-input
                  filled
                  v-model="image.subDatas[subIndex]"
                  label="Sub Name"
                  color="black"
                  bg-color="gray"
                  style="margin-bottom: 10px"
                />
                <q-input
                  filled
                  v-model="image[subData]"
                  label="Value"
                  class="full-width"
                  color="black"
                  bg-color="gray"
                  style="margin-bottom: 10px"
                />
                <q-btn
                  @click="deleteInput('imageInputs', itemIndex, true, subIndex)"
                  no-caps
                  icon="delete"
                  flat
                  style="
                    margin-bottom: 10px;
                    background-color: rgba(255, 0, 0, 0.102);
                  "
                  color="red"
                />
              </section>
            </div>
            <q-btn
              @click="addNewSubInput('image', itemIndex)"
              label="Add Sub"
              color="green"
              no-caps
            />
          </div>
        </div>
      </div>

      <q-btn
        no-caps
        @click="sendUpdate"
        style="background: #123b32"
        text-color="white"
        label="Save and Update"
        class="full-width q-my-md"
      />
    </div>
    <Notification
      v-if="notification.message"
      :message="notification.message"
      :type="notification.type"
    />
  </div>
</template>

<script>
import { verifyToken } from "src/auth/auth";
import socket from "src/socket";
import { ref } from "vue";
import SimpleNotify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

export default {
  setup() {
    return {
      sectionName: ref(""),
      sectionOrder: ref(0),
      textInputs: ref([]),
      imageInputs: ref([]),
      linkInputs: ref([]),
      dynamicTitle: ref(["title1", "title2"]),
    };
  },
  data() {
    return {
      contentId: this.$route.params.id,
      isAdmin: null,
      notification: {
        message: "",
        type: "info",
      },
    };
  },
  components: {
    Notification,
  },
  async mounted() {
    this.fetchData();
    this.isAdmin = (await verifyToken()).isAdmin;
    socket.connect();
  },
  beforeUnmount() {
    socket.disconnect();
  },
  methods: {
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
    async verifyAdmin() {
      try {
        this.isAdmin = await verifyTokenAdmin.call(this);

        if (!this.isAdmin) {
          return this.$router.replace("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchData() {
      try {
        if (!this.contentId) return this.setUpDefault();
        const response = await this.$api.get(`/content/${this.contentId}`);
        if (response.status != 200) throw Error("Error occurred");

        const { sectionName, sectionOrder, context } = response.data.data;
        this.sectionName = sectionName;
        this.sectionOrder = sectionOrder;

        const contextKeys = Object.keys(context);
        let rawContext = { xs: [], xi: [], xl: [] };

        for (let contextKey of contextKeys) {
          rawContext[this.takeTwoChars(contextKey)].push({
            ...context[contextKey],
            subDatas: Object.keys(context[contextKey]).filter(
              (key) => key !== "data"
            ),
          });
        }

        this.textInputs = rawContext.xs;
        this.imageInputs = rawContext.xi;
        this.linkInputs = rawContext.xl;
      } catch (err) {
        console.log(err);
      }
    },
    async sendUpdate() {
      try {
        let textList = [],
          imageList = [],
          linkList = [],
          imageSub = {};
        for (let text of this.textInputs) {
          delete text.subDatas;
          textList.push(text);
        }
        for (let link of this.linkInputs) {
          delete link.subDatas;
          linkList.push(link);
        }
        for (let imageIndex in this.imageInputs) {
          const imageData = this.imageInputs[imageIndex];
          imageList.push(imageData.data);
          const isAFile = imageData.data instanceof File ? true : false;
          let subData = {};
          if (imageData.subDatas && imageData.subDatas.length > 0)
            for (let subName of imageData.subDatas)
              subData[subName] = imageData[subName];
          imageSub[imageIndex] = {
            isAFile,
            subData,
          };
        }
        const linkIdentifier = this.contentId
          ? `edit/${this.contentId}`
          : "create/";
        const response = await this.$api.post(
          `/content/${linkIdentifier}`,
          {
            pageId: 1,
            sectionName: this.sectionName,
            sectionOrder: this.sectionOrder,
            textList,
            ...(imageList.length > 0 && {
              imageList,
              imageSub,
            }),
            linkList,
          },
          {
            ...(imageList.length > 0 && {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }),
          }
        );
        if (response.status == 200) {
          this.showNotif(response.data.message, "success");
        }
        if (response.status != 200) throw Error("Error occured");
        socket.emit("dashboard", {});
        // window.location.reload();
      } catch (err) {
        this.showNotif(
          "fatal error please contact the developer immediately",
          "error"
        );
        console.log(err);
      }
    },
    setUpDefault() {
      this.sectionName = "";
      this.sectionOrder = 0;
      this.addNewInput("text");
      this.addNewInput("image");
      this.addNewInput("link");
    },
    deleteInput(type, i, sub = false, subI) {
      if (!sub) return this[type].splice(i, 1);
      const subName = this[type][i].subDatas[subI];
      delete this[type][i][subName];
      if (this[type][i].subDatas.length - 1 < 1)
        return (this[type][i].subDatas = []);
      this[type][i].subDatas.splice(subI, 1);
    },
    addNewSubInput(type, i) {
      console.log(type, i);
      switch (type) {
        case "text":
          this.textInputs[i][""] = undefined;
          if (!this.textInputs[i].subDatas) this.textInputs[i].subDatas = [];
          this.textInputs[i].subDatas.push("");
          break;
        case "image":
          this.imageInputs[i][""] = undefined;
          if (!this.imageInputs[i].subDatas) this.imageInputs[i].subDatas = [];
          this.imageInputs[i].subDatas.push("");
          break;
        case "link":
          this.linkInputs[i][""] = undefined;
          if (!this.linkInputs[i].subDatas) this.linkInputs[i].subDatas = [];
          this.linkInputs[i].subDatas.push("");
          break;
        default:
          break;
      }
    },
    addNewInput(type) {
      switch (type) {
        case "text":
          this.textInputs.push({
            data: "",
          });
          break;
        case "image":
          this.imageInputs.push({
            data: "",
          });
          break;
        case "link":
          this.linkInputs.push({
            data: "",
          });
          break;
        default:
          break;
      }
    },
    handleUpload(image) {
      if (image) {
        image.data = URL.createObjectURL(image);
      }
    },
    takeTwoChars(str) {
      return str.slice(0, 2);
    },
  },
};
</script>
<style>
.button-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.button-container section {
  display: flex;
  flex-wrap: wrap;
}

.wrap {
  width: 80%;
}

@media (max-width: 600px) {
  .wrap {
    width: 90%;
  }
}

@media (max-width: 400px) {
  .button-container {
    flex-direction: column;
  }

  .button-container section {
    justify-content: left;
  }

  .wrap {
    width: 95%;
  }
}
</style>
