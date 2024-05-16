<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}

header {
  width: 60vw;
  height: 40vw;
  background-color: white;
  box-shadow: 0px 2px 0px rgb(51, 51, 51);
  padding: 15px;
  margin-left: 20vh;
  margin-top: 10vh;
}
</style>
