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
    duration: {
      type: Number,
      default: 3000, // Default duration is 3 seconds
    },
  },
  data() {
    return {
      isVisible: true,
    };
  },
  mounted() {
    this.applyAnimation();
  },
  methods: {
    applyAnimation() {
      this.$nextTick(() => {
        gsap.fromTo(
          this.$el,
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
        );

        setTimeout(this.closeNotification, this.duration);
      });
    },
    closeNotification() {
      gsap.to(this.$el, {
        x: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          this.isVisible = false;
        },
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  word-wrap: break-word;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #ccc;
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
  margin-left: 10px;
  font-size: 1.2em;
}

@media (max-width: 600px) {
  .notification {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    font-size: 0.9em;
  }
  
  .notification button {
    font-size: 1em;
  }
}
</style>
