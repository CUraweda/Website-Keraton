<template>
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

    <q-btn no-caps @click="addNewInput('text')" label="Tambahkan Text Input" />
    <q-btn no-caps @click="addNewInput('link')" label="Tambahkan Link Input" />
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
        :name="'imageList'"
        :label="image.data ? 'Ganti Image' : 'Tambah Image'"
        color="black"
        class="q-mt-md"
        @update:model-value="(file) => handleUpload(file, i)"
      />
      <q-img :src="image.preview" v-if="image.preview" />
      <q-img :src="image.data" v-else />
    </div>

    <q-btn
      no-caps
      @click="sendUpdate"
      style="background: #123b32"
      text-color="white"
      label="Save and Update"
      class="full-width q-mt-md"
      href="/#/"
    />
  </div>
</template>

<script>
import socket from "src/socket";
import { ref } from "vue";

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
    };
  },
  mounted() {
    this.fetchData();
    socket.connect();
  },
  beforeUnmount() {
    socket.disconnect();
  },
  methods: {
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
        let formData = new FormData();

        formData.append("pageId", 1);
        formData.append("sectionName", this.sectionName);
        formData.append("sectionOrder", this.sectionOrder);

        // Append text inputs
        this.textInputs.forEach((text, index) => {
          formData.append(`textList[${index}].data`, text.data);
          formData.append(`textList[${index}].textSize`, text.textSize);
        });

        // Append image inputs
        this.imageInputs.forEach((image, index) => {
          if (image.data) {
            formData.append(`imageList`, image.data); // Ensure this matches the backend
          }
        });

        // Append link inputs
        this.linkInputs.forEach((link, index) => {
          formData.append(`linkList[${index}].data`, link.data);
        });

        const linkIdentifier = this.contentId
          ? `edit/${this.contentId}`
          : "create/";
        const response = await this.$api.post(
          `/content/${linkIdentifier}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status != 200) throw Error("Error occurred");

        socket.emit("dashboard", {});
      } catch (err) {
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
            data: null,
            preview: null,
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
    handleUpload(file, index) {
      if (file) {
        this.imageInputs[index].data = file;
        this.imageInputs[index].preview = URL.createObjectURL(file);
      }
    },
    takeTwoChars(str) {
      return str.slice(0, 2);
    },
  },
};
</script>
