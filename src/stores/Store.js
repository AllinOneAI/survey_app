import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  //state
  const token = ref("");
  const isAuthenticated = ref(false);

  //mutations
  function initializeStore() {
    if (localStorage.getItem("token")) {
      token.value = localStorage.getItem("token");
      isAuthenticated.value = true;
    } else {
      token.value = "";
      isAuthenticated.value = false;
    }
  }

  function setToken(_token) {
    token.value = _token;
    isAuthenticated.value = true;
  }

  function removeToken() {
    token.value = "";
    isAuthenticated.value = false;
  }

  return { token, isAuthenticated, initializeStore, setToken, removeToken };
});
