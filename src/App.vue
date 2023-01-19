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
  // rimuovere dopo perché non serve e cancellare harry potter in selectedmovie
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      let myUrl = `${store.url}&query=${store.selectedMovie}`;
      axios.get(myUrl).then((response) => {
        store.moviesList = response.data.results;
      });
      let myUrlTv = `${store.urltv}&query=${store.selectedMovie}`;
      axios.get(myUrlTv).then((response) => {
        store.tvList = response.data.results;
      });
    },
  },
};
</script>

<template>
  <header>
    <AppHeader @filter="getMovies"></AppHeader>
  </header>
  <main class="bg-black">
    <AppMain></AppMain>
  </main>
</template>

<style lang="scss">
@use "./styles/generals.scss" as *;
</style>
