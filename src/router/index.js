import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import CreatePoll from "../views/CreatePoll.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/sign-up", name: "SignUp", component: SignUp },
  { path: "/log-in", name: "LogIn", component: LogIn },
  { path: "/create-poll", name: "CreatePoll", component: CreatePoll },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
