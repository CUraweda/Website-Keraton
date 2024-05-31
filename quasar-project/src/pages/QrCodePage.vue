<template>
  <div
    class="q-mx-auto q-my-auto items-center justify-center z-10 flex flex-col"
  >
    <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoad"
      style="width: 20rem"
    ></StreamBarcodeReader>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: { StreamBarcodeReader },
};
</script>

<style></style>
