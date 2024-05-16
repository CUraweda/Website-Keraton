import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import store from "src/stores/index.js";
import App from "./App.vue";
import router from "../src/router/routes";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(store);

app.mount("#app");
