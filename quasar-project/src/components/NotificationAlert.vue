<template>
  <div class="notification" :class="type">
    <span>{{ message }}</span>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info",
    },
  },
  mounted() {
    this.applyAnimation();
  },
  methods: {
    applyAnimation() {
      this.$nextTick(() => {
        gsap.fromTo(
          this.$el, // Elanimasiemen target 
          { x: 20, opacity: 0 }, // Properti awal
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" } // Properti akhir
        );
      });
    },
  },
};
</script>

<style scoped>
.notification {
  padding: 16px;
  position: fixed;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}
.notification.info {
  background-color: #2196f3;
  color: white;
}
.notification.error {
  background-color: #f44336;
  color: white;
}
.notification button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
