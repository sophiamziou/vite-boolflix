<script>
export default {
  props: {
    movie: Object,
  },
  computed: {
    stars() {
      let stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < Math.round(this.movie.vote_average / 2)) {
          stars.push(i);
        }
      }
      return stars;
    },
    emptystars() {
      let emptystars = [];
      for (let i = 0; i < 5 - Math.round(this.movie.vote_average / 2); i++) {
        emptystars.push(i);
      }
      return emptystars;
    },
  },
};
</script>
<template lang="">
  <!-- card movie -->
  <div class="card">
    <!-- div info -->
    <div>
      <h4>Titolo:"{{ movie.title }}"</h4>
      <h5>Titolo originale:"{{ movie.original_title }}"</h5>
      <div>
        <p>
          <!-- lingua:{{ movie.original_language }} -->
          <img
            :src="
              movie.original_language == 'en'
                ? `https://www.countryflagicons.com/FLAT/64/GB.png`
                : tv.original_language == 'ja'
                ? `https://www.countryflagicons.com/FLAT/64/JP.png`
                : `https://www.countryflagicons.com/FLAT/64/${movie.original_language.toUpperCase()}.png`
            "
            :alt="movie.original_language"
          />
        </p>
        <!-- <p>voto:"{{ movie.vote_average }}"</p> -->
        <p>
          voto:
          <!-- <span v-for="n in stars"> * </span> -->
          <fa v-for="n in stars" :icon="['fas', 'star']" />
          <fa v-for="n in emptystars" :icon="['far', 'star']" />
        </p>
      </div>
    </div>
    <!-- div image -->
    <div>
      <img
        :src="`http://image.tmdb.org/t/p/w342/${movie.poster_path}`"
        :alt="movie.original_title"
      />
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
