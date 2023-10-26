<template>
  <div class="sign-up">
    <h1>Sign up</h1>
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

const router = useRouter();

const username = ref("");
const password = ref("");

function submitForm() {
  const formData = {
    username: username.value,
    password: password.value,
  };
  axios
    .post("/api/v1/users/", formData)
    .then((response) => {
      console.log(response);
      router.push("/log-in");
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
