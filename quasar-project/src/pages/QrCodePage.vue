<template>
  <div class="q-mx-auto q-my-auto items-center justify-center z-10 flex flex-col">
    <StreamBarcodeReader @decode="onDecode" style="width: 500px;"></StreamBarcodeReader>
  </div>
  <q-dialog v-model="openLog" seamless position="right">
    <p v-for="(data, i) in logs" :key="i">{{ data.data }}</p>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  data() {
    return {
      openLog: ref(false),
      logs: ref([]),
      delayLogs: ref({})
    }
  },
  components: { StreamBarcodeReader },
  mounted() {
    window.addEventListener('keydown', this.openDialog)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.openDialog);
  },
  methods: {
    openDialog(event) {
      if (event.ctrlKey && event.key === '/') {
        event.preventDefault()
        this.openLog = !this.openLog
      }
    },
    async onDecode(text) {
      try {
        if(this.delayLogs[text]){
          const currentTime = new Date()
          const logsExist = new Date(this.delayLogs[text])
          console.log(logsExist)
          const differenceInMilliseconds = currentTime.getTime() - logsExist.getTime();
          if (differenceInMilliseconds < 2000) throw Error('Please wait a second nigga')
        }

        const response = await this.$api.post('qr/use', {
          data: text
        })
        if (response.status != 200) throw Error(response.data.message)
        const { data } = response.data
        this.delayLogs[text] = new Date().toISOString()
        this.logs.push({
          data: `${data.id} - ${data.remainingUses}`
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
};
</script>

<style></style>
