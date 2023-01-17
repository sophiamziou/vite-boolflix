<script>
import AppSearch from "./AppSearch.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppSearch,
  },
};
</script>
<template>
  <header>
    <div class="row">
      <div class="col">
        <h1>BOOLFLIX</h1>
      </div>
      <div class="col">
        <AppSearch></AppSearch>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
header {
  background-color: black;
  color: white;
  padding: 20px;
}
</style>
