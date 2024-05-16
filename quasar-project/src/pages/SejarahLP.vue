<template>
  <div class="desktop">
    <SejarahKeraton></SejarahKeraton>
  </div>
  <div class="handphone">
    <Sejarah></Sejarah>
  </div>
</template>

<script>
import Sejarah from "./SejarahPage.vue";
import SejarahKeraton from "../pages/SejarahKeraton.vue";

export default {
  components: {
    SejarahKeraton,
    Sejarah,
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .desktop {
    display: none;
  }

  .handphone {
    display: block;
  }
}

@media screen and (min-width: 601px) {
  .desktop {
    display: block;
  }

  .handphone {
    display: none;
  }
}
</style>
