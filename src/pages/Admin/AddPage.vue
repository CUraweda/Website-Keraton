<template>
  <div class="text-center text-h6 text-bold q-mt-md">Edit Section {{ sectionName }}</div>
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

    <div v-for="(item, i) in textInputs" :key="i" class="flex full-width" style="gap: 5px">
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
      href="/#/"
      text-color="white"
      label="Save and Update"
      class="full-width q-mt-md"
    />
  </div>
</template>

<script>
import socket from "src/socket";
import { ref } from "vue";
export default {
  setup() {
    return {
      sectionName: ref(),
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
  methods:{
    async fetchData(){
      try{
        if(!this.contentId) return this.setUpDefault()
        const response = await this.$api.get(`/content/${this.contentId}`)
        if(response.status != 200) throw Error('Error occured')
        this.sectionName = response.data.data.sectionName
        this.sectionOrder = response.data.data.sectionOrder

        const contextKeys = Object.keys(response.data.data.context)
        let rawContext = { xs: [], xi: [], xl: [] }
        console.log(response.data.data.context)
        for(let context of contextKeys) rawContext[this.takeTwoChars(context)].push({
          ...response.data.data.context[context]
        })
        console.log(rawContext)
        this.textInputs = rawContext.xs
        this.imageInputs = rawContext.xi
        this.linkInputs = rawContext.xl
      }catch(err){
        console.log(err)
      }
    },
    async sendUpdate() {
    try {
        let textList = [], imageList = [], linkList = [];
        
        // Mengumpulkan data teks dari input
        for (let text of this.textInputs) textList.push(text);
        
        // Mengumpulkan data gambar dari input
        for (let image of this.imageInputs) {
            // Jika gambar ada, sertakan ke dalam daftar
            if (image.data) {
                imageList.push({
                    id: image.id, // Menyertakan ID gambar jika ada
                    data: image.data
                });
            }
        }

        // Mengumpulkan data link dari input
        for (let link of this.linkInputs) linkList.push(link.data);
        
        // Mengirimkan permintaan update dengan data yang dikumpulkan
        const linkIdentifier = this.contentId ? `edit/${this.contentId}` : 'create/';
        const response = await this.$api.post(`/content/${linkIdentifier}`, {
            pageId: 1,
            sectionName: this.sectionName,
            sectionOrder: this.sectionOrder,
            textList,
            imageList,
            linkList
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status != 200) throw Error('Error occurred');

        socket.emit('dashboard', {});
    } catch (err) {
        console.log(err);
    }
},

    setUpDefault(){
      this.sectionName = ""
      this.sectionOrder = 0
      this.addNewInput('text')
      this.addNewInput('image')
      this.addNewInput('link')
    },
    addNewInput(type){
      switch(type){
        case "text":
          this.textInputs.push({
            data: "",
            textSize: ""
          }) 
          break;
        case "image":
          this.imageInputs.push({
            data: ""
          })
          break;
        case "link":
          this.linkInputs.push({
            data: ""
          })
          break;
        default:
          break;
      }
    },
    handleUpload(image) {
      if (image){
       image.data = URL.createObjectURL(image)
      }
    },
    takeTwoChars(str) {
      return str.slice(0, 2);
    },
  },
};
</script>