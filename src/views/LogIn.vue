<template>
  <div class="log-in">
    <h1>Log in</h1>
    <form @submit.prevent="submitForm">
      <input type="email" name="username" v-model="username" /> <br />
      <input type="password" name="password" v-model="password" /> <br />
      <button type="submit" @click="submitForm">Submit</button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../stores/Store.js";

const store = useStore();
const router = useRouter();

const username = ref("");
const password = ref("");

function submitForm() {
  const formData = {
    username: username.value,
    password: password.value,
  };
  axios
    .post("/api/v1/token/login/", formData)
    .then((response) => {
      console.log(response);

      const token = response.data.auth_token;
      store.setToken(token);

      axios.defaults.headers.common["Authorization"] = "Token " + token;

      localStorage.setItem("token", token);

      router.push("/about");
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
