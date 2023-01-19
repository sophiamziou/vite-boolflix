<script>
export default {
  props: {
    movie: Object,
  },
  methods: {
    calcStars() {
      return Math.round(this.movie.vote_average / 2);
    },
  },
};
</script>
<template lang="">
  <div class="wrapper">
    <div class="cards">
      <img
      class="cover"
        :src="
          movie.poster_path == null
            ? `https://i.imgflip.com/2q4b0y.png`
            : `http://image.tmdb.org/t/p/w342/${movie.poster_path}`
        "
        :alt="movie.original_title"
      />
      <div class="info">
        <h2>{{ movie.title }}</h2>
        <p>
          <h5>Titolo originale:"{{ movie.original_title }}"</h5>
          <p class="info-movie">{{movie.overview}}</p>
          <p>
            voto:
            <fa v-for="n in calcStars()" :icon="['fas', 'star']" />
            <fa v-for="n in 5 - calcStars()" :icon="['far', 'star']" />
          </p>
          <img
          class="flag"
              :src="
                movie.original_language == 'en'
                  ? `https://www.countryflagicons.com/FLAT/48/GB.png`
                  : movie.original_language == 'ja'
                  ? `https://www.countryflagicons.com/FLAT/48/JP.png`
                  : movie.original_language == 'ko'
                  ? `https://www.countryflagicons.com/FLAT/48/KR.png`
                  : `https://www.countryflagicons.com/FLAT/48/${movie.original_language.toUpperCase()}.png`
              "
              :alt="movie.original_language"
            />
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
</style>
