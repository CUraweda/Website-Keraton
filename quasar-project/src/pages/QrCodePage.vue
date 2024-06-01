<template>
  <div class="q-mx-auto q-my-auto items-center justify-center z-10 flex flex-col">
    <StreamBarcodeReader @decode="onDecode" style="width: 500px"></StreamBarcodeReader>
  </div>
  <q-dialog v-model="openLog">
    
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  data() {
    return {
      openLog: ref(false),
      logs: ref([])
    }
  },
  components: { StreamBarcodeReader },
  methods: {
    async onDecode(text) {
      try {
        const response = await this.$api.post('qr/use', {
          data: text
        })
        if (response.status != 200) throw Error(response.data.message)
        this.logs.push({})
      } catch (err) {
        console.log(err)
      }
    }
  }
};
</script>

<style></style>
