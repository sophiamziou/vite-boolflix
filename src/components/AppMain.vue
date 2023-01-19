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
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2 class="subtitle">Lista Film</h2>
        <div class="slider d-flex">
          <AppCard
            v-for="(item, index) in store.moviesList"
            :key="index"
            :movie="item"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2 class="subtitle">Lista Serie</h2>
        <div class="slider d-flex my-4">
          <AppCardTv
            v-for="(item, index) in store.tvList"
            :key="index"
            :tv="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;
.slider {
  overflow-x: scroll;
}
.subtitle {
  margin: 20px;
  color: rgb(188, 4, 4);
}
</style>
