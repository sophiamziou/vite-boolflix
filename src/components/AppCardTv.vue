<script>
export default {
  props: {
    tv: Object,
  },
};
</script>
<template lang="">
  <!-- card tv -->
  <div class="card">
    <h4 class="text-danger">Titolo serie tv: "{{ tv.name }}"</h4>
    <h5>Titolo originale:"{{ tv.original_name }}"</h5>
    <div>
      <p>
        <img
          :src="
            tv.original_language == 'en'
              ? `https://www.countryflagicons.com/FLAT/64/GB.png`
              : `https://www.countryflagicons.com/FLAT/64/${tv.original_language.toUpperCase()}.png`
          "
          :alt="tv.original_language"
        />
      </p>
      <p>voto:"{{ tv.vote_average }}"</p>
    </div>
  </div>
</template>
<style lang="scss">
.card {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}
</style>
