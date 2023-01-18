<script>
export default {
  props: {
    movie: Object,
  },
};
</script>
<template lang="">
  <!-- card movie -->
  <div class="card">
    <h4>Titolo:"{{ movie.title }}"</h4>
    <h5>Titolo originale:"{{ movie.original_title }}"</h5>
    <div>
      <p>
        <!-- lingua:{{ movie.original_language }} -->
        <img
          :src="
            movie.original_language == 'en'
              ? `https://www.countryflagicons.com/FLAT/64/GB.png`
              : `https://www.countryflagicons.com/FLAT/64/${movie.original_language.toUpperCase()}.png`
          "
          :alt="movie.original_language"
        />
      </p>
      <p>voto:"{{ movie.vote_average }}"</p>
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
