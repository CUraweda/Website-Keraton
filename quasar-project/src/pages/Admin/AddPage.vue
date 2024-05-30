<template>
  <div v-if="isAdmin">
    <div class="text-center text-h6 text-bold q-mt-md">
      Edit Section {{ sectionName }}
    </div>
    <div class="text-center q-mt-sm">Ubah dan alur konten web Keraton</div>

    <div style="padding-inline: 300px; margin-top: 120px">
      <div class="col-grow">
        <q-input
          filled
          v-model="sectionName"
          label="Section Name"
          color="black"
          bg-color="gray"
        />
      </div>
      <q-input
        filled
        v-model="sectionOrder"
        type="number"
        label="Order"
        color="black"
        bg-color="gray"
      />

      <q-btn
        no-caps
        @click="addNewInput('text')"
        label="Tambahkan Text Input"
      />
      <q-btn
        no-caps
        @click="addNewInput('link')"
        label="Tambahkan Link Input"
      />
      <q-btn
        no-caps
        @click="addNewInput('image')"
        label="Tambahkan Image Input"
      />

      <div
        v-for="(item, i) in textInputs"
        :key="i"
        class="flex full-width"
        style="gap: 5px"
      >
        <div class="col-grow">
          <q-input
            filled
            v-model="item.data"
            label="Text"
            color="black"
            bg-color="gray"
          />
        </div>
        <q-input
          filled
          v-model="item.textSize"
          label="Size"
          color="black"
          bg-color="gray"
        />
      </div>

      <div
        v-for="(link, i) in linkInputs"
        :key="i"
        class="flex full-width q-mt-md"
        style="gap: 5px"
      >
        <div class="col-grow">
          <q-input
            filled
            v-model="link.data"
            label="Link"
            color="black"
            bg-color="gray"
          />
        </div>
      </div>

      <div v-for="(image, i) in imageInputs" :key="i">
        <q-file
          filled
          type="file"
          v-model="image.data"
          :label="image.data ? 'Ganti Image' : 'Tambah Image'"
          color="black"
          class="q-mt-md"
          @update:model-value="handleUpload(image.data)"
        />
        <q-img :src="image.data?.data || image.data" v-if="image.data" />
      </div>

      <q-btn
        no-caps
        @click="sendUpdate"
        style="background: #123b32"
        text-color="white"
        label="Save and Update"
        class="full-width q-mt-md"
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
        console.log(error)
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
        let textList = [],imageList = [],linkList = [], imageSub = []
        for (let text of this.textInputs) textList.push(text);
        for (let image of this.imageInputs) imageList.push(image.data)
        for (let link of this.linkInputs) linkList.push({ data: link.data, sub: "" })
        const linkIdentifier = this.contentId ? `edit/${this.contentId}` : 'create/'
        console.log(imageList)
        const response = await this.$api.post(`/content/${linkIdentifier}`, { pageId: 1, sectionName: this.sectionName, sectionOrder: this.sectionOrder, textList, imageList, linkList }, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        if (response.status != 200) throw Error("Error occured");
        socket.emit("dashboard", {});
        window.location.reload()
      } catch (err) {
        this.showNotif("fatal error please contact the developer immediately", "error")
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
