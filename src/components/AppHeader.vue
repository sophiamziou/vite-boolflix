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
  <div class="container">
    <div class="row d-flex align-items-center">
      <div class="col-9">
        <div>
          <h1 class="m-0 text-danger">BOOLFLIX</h1>
        </div>
      </div>
      <div class="col-3">
        <AppSearch></AppSearch>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
header {
  background-color: black;
  color: white;
  padding: 20px;
}
</style>
