<script>
export default {
  props: {
    tv: Object,
  },
  methods: {
    calcStars() {
      return Math.round(this.tv.vote_average / 2);
    },
  },
};
</script>
<template lang="">
    <div class="cards">
      <img
      class="cover"
        :src="
          tv.poster_path == null
            ? `https://i.imgflip.com/2q4b0y.png`
            : `http://image.tmdb.org/t/p/w342/${tv.poster_path}`
        "
        :alt="tv.original_name"
      />
      <div class="info">
        <h2>{{ tv.name }}</h2>
        <p>
          <h5>Titolo originale:"{{ tv.original_name }}"</h5>
          <p class="info-movie">{{tv.overview}}</p>
          <p>
            voto:
            <fa v-for="n in calcStars()" :icon="['fas', 'star']" />
            <fa v-for="n in 5 - calcStars()" :icon="['far', 'star']" />
          </p>
          <img
          class="flag"
              :src="
                tv.original_language == 'en'
                  ? `https://www.countryflagicons.com/FLAT/48/GB.png`
                  : tv.original_language == 'ja'
                  ? `https://www.countryflagicons.com/FLAT/48/JP.png`
                  : tv.original_language == 'ko'
                  ? `https://www.countryflagicons.com/FLAT/48/KR.png`
                  : `https://www.countryflagicons.com/FLAT/48/${tv.original_language.toUpperCase()}.png`
              "
              :alt="tv.original_language"
            />
        </p>
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
