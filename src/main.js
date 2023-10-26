import "./style.css";
import config from "../config.json" assert { type: "json" };

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/index.js";
import axios from "axios";

axios.defaults.baseURL = config.devapi;

createApp(App).use(createPinia()).use(router, axios).mount("#app");
