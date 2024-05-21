<template>
  <div>
    <button id="scrollToTopBtn" @click="scrollToTop" title="Go to top">
      <img style="width: 60px" src="../assets/images/btn1.png" />
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, defineComponent } from "vue";

export default defineComponent({
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      const scrollToTopBtn = document.getElementById("scrollToTopBtn");
      if (window.scrollY > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

#scrollToTopBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: none;
  padding: 0;
  scroll-behavior: smooth;
}

#scrollToTopBtn img {
  width: 40px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#scrollToTopBtn:hover img {
  background-color: #555;
  border-radius: 50%;
}
</style>
