<script lang="js">
import AppCard from "./AppCard.vue";
import AppCardTv from "./AppCardTv.vue";
import { store } from "../store.js";

export default {
  components: {
    AppCard,
    AppCardTv
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template lang="">
  <div class="container">
    <div class="row">
      <div class="col m-3">
        <AppCard
          v-for="(item, index) in store.moviesList"
          :key="index"
          :movie="item"
        />
        <AppCardTv
          v-for="(item, index) in store.tvList"
          :key="index"
          :tv="item"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;
</style>
