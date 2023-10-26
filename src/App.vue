<script setup>
import { onBeforeMount } from "vue";
import axios from "axios";
import { useStore } from "./stores/Store.js";

const store = useStore();

onBeforeMount(() => {
  store.initializeStore();
  console.log("store initialized");

  const token = store.token;
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Token" + token;
    console.log("user token is: " + token);
  } else {
    axios.defaults.headers.common["Authorization"] = "";
    console.log("user is not authorised");
  }
});
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/create-poll">Create Poll </router-link> |
    <router-link to="/sign-up">Sign up</router-link> |
    <router-link to="/log-in">Log in</router-link>
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
