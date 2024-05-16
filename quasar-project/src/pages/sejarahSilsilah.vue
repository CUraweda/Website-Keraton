<template>
  <div class="desktop">
    <silsilahDesktop></silsilahDesktop>
  </div>
  <div class="handphone">
    <silsilahMobile></silsilahMobile>
  </div>
</template>

<script>
import silsilahDesktop from "../pages/silsilahDesktop.vue";
import silsilahMobile from "../pages/silsilahMobile.vue";

export default {
  components: {
    silsilahDesktop,
    silsilahMobile,
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
