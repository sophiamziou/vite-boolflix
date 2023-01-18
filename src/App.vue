<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      let myUrl = `${store.url}${store.selectedMovie}`;
      axios.get(myUrl).then((response) => {
        store.moviesList = response.data.results;
      });
    },
  },
};
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <main class="bg-secondary">
    <AppMain></AppMain>
  </main>
</template>

<style lang="scss">
@use "./styles/generals.scss" as *;
</style>
