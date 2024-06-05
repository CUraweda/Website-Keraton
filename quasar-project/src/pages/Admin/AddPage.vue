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
      <div class="col" style="height: fit-content; gap: 10px; width: 100%; display: inline-flex; padding: 10px 0;">
        <q-input filled v-model="sectionName" label="Section Name" color="black" bg-color="gray" class="full-width" />
        <q-input filled v-model="sectionOrder" type="number" label="Order" color="black" bg-color="gray" />
      </div>

      <div style="height: fit-content; gap: 10px; width: 100%; display: inlineflex; padding-bottom: 10px 0;">
        <div v-for="(item, itemIndex) in textInputs" :key="itemIndex" class="full-width" style="gap: 5px">
          <div>
            <q-separator style="margin: 10px 0;" />
            <q-input filled v-model="item.data" label="Text" color="black" bg-color="gray" style="padding-bottom: 10px;"
              class="full-width" />
          </div>
          <div v-for="(subData, subIndex) in item.subDatas" :key="subIndex">
            <q-input filled v-model="item.subDatas[subIndex]" label="Sub Name" color="black" bg-color="gray"
              style="padding-bottom: 10px;" />
            <q-input filled v-model="item[subData]" label="Value" color="black" bg-color="gray"
              style="padding-bottom: 10px;" />
            <q-btn @click="deleteInput('textInputs', itemIndex, true, subIndex)" label="Delete Sub Data" />
          </div>
          <q-btn @click="addNewSubInput('text', itemIndex)" label="Add Sub" />
          <q-btn @click="deleteInput('textInputs', itemIndex)" label="Delete Input"/>
        </div>
      </div>

      <div v-for="(link, itemIndex) in linkInputs" :key="itemIndex" class="flex full-width" style="gap: 5px">
        <div class="col-grow">
          <q-separator style="margin: 10px 0;" />
          <q-input filled v-model="link.data" label="Link" color="black" style="padding-bottom: 10px;"
            bg-color="gray" />
          <div v-for="(subData, subIndex) in link.subDatas" :key="subIndex">
            <q-input filled v-model="link.subDatas[subIndex]" label="Sub Name" color="black" bg-color="gray"
              style="padding-bottom: 10px;" />
            <q-input filled v-model="link[subData]" label="Value" color="black" bg-color="gray"
              style="padding-bottom: 10px;" />
            <q-btn @click="deleteInput('textInputs', itemIndex, true, subIndex)" label="Delete Sub Data" />
          </div>
          <q-btn @click="addNewSubInput('link', itemIndex)" label="Add Sub" />
          <q-btn @click="deleteInput('textInputs', itemIndex)" label="Delete Input"/>
        </div>
      </div>

      <div v-for="(image, itemIndex) in imageInputs" :key="itemIndex">
        <div class="col-grow">
          <q-separator style="margin: 10px 0;" />
          <q-file filled type="file" v-model="image.data" :label="image.data ? 'Ganti Image' : 'Tambah Image'"
            color="black" class="q-mt-md" @update:model-value="handleUpload(image.data)"
            style="padding-bottom: 10px;" />
          <q-img :src="image.data?.data || image.data" v-if="image.data" style="margin-bottom: 10px;" />
          <div v-for="(subData, subIndex) in image.subDatas" :key="subIndex">
            <q-input filled v-model="image.subDatas[subIndex]" label="Sub Name" color="black" bg-color="gray"
              style="padding-bottom: 10px;" />
            <q-input filled v-model="image[subData]" label="Value" color="black" bg-color="gray"
              style="padding-bottom: 10px;" />
            <q-btn @click="deleteInput('imageInputs', itemIndex, true, subIndex)" label="Delete Sub Data" />
          </div>
          <q-btn @click="addNewSubInput('image', itemIndex)" label="Add Sub" />
          <q-btn @click="deleteInput('imageInputs', itemIndex)" label="Delete Input"/>

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
import Notification from "../../components/NotificationAlert.vue"; // Make sure to adjust the path

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
    showNotif(mes, type) {
      this.notification.message = mes;
      this.notification.type = type;
      setTimeout(() => {
        this.notification.message = "";
        this.notification.type = "";
      }, 4000);
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

        console.log(this.imageInputs);
      } catch (err) {
        console.log(err);
      }
    },
    async sendUpdate() {
      try {
        let textList = [], imageList = [], linkList = [], imageSub = {}
        for (let text of this.textInputs) {
          delete text.subDatas
          textList.push(text)
        }
        for (let link of this.linkInputs) {
          delete link.subDatas
          linkList.push(link)
        }
        for (let imageIndex in this.imageInputs) {
          const imageData = this.imageInputs[imageIndex]
          imageList.push(imageData.data)
          const isAFile = imageData.data instanceof File ? true : false
          let subData = {}
          if (imageData.subDatas.length > 0) for (let subName of imageData.subDatas) subData[subName] = imageData[subName]
          imageSub[imageIndex] = {
            isAFile, subData
          }
        }
        console.log(textList, imageList, linkList, imageSub)
        const linkIdentifier = this.contentId ? `edit/${this.contentId}` : 'create/'
        const response = await this.$api.post(`/content/${linkIdentifier}`, {
          pageId: 1,
          sectionName: this.sectionName,
          sectionOrder: this.sectionOrder,
          textList,
          imageList,
          linkList,
          imageSub
        }, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        if (response.status != 200) throw Error("Error occured");
        socket.emit("dashboard", {});
        window.location.reload()
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
      console.log(this[type][i])
      if (!sub) return delete this[type][i]
      const subName = this[type][i].subDatas[subI]
      delete this[type][i][subName]
      this[type][i].subDatas.splice(subI, 1)
      console.log(this[type][i])
    },
    addNewSubInput(type, i) {
      console.log(type, i)
      switch (type) {
        case "text":
          this.textInputs[i][""] = undefined;
          this.textInputs[i].subDatas.push("");
          break;
        case "image":
          this.imageInputs[i][''] = undefined
          this.imageInputs[i].subDatas.push('');
          break;
        case "link":
          this.linkInputs[i][''] = undefined
          this.linkInputs[i].subDatas.push('');
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
            textSize: "",
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
