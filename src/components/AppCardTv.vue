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
  <!-- card tv -->
  <div class="card">
    <div>
      <h4 class="text-danger">Titolo serie tv: "{{ tv.name }}"</h4>
      <h5>Titolo originale:"{{ tv.original_name }}"</h5>
      <div>
        <p>
          <img
            :src="
              tv.original_language == 'en'
                ? `https://www.countryflagicons.com/FLAT/64/GB.png`
                : tv.original_language == 'ja'
                ? `https://www.countryflagicons.com/FLAT/64/JP.png`
                : `https://www.countryflagicons.com/FLAT/64/${tv.original_language.toUpperCase()}.png`
            "
            :alt="tv.original_language"
          />
        </p>
        <p>
          voto:
          <fa v-for="n in calcStars()" :icon="['fas', 'star']" />
          <fa v-for="n in 5 - calcStars()" :icon="['far', 'star']" />
        </p>
      </div>
    </div>
    <div>
      <img
        :src="`http://image.tmdb.org/t/p/w342/${tv.poster_path}`"
        :alt="tv.original_name"
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
