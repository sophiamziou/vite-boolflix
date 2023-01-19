import { reactive } from "vue";

export const store = reactive({
    apiKey:"2f791f0062e16e067544f28c2d3e2018",
    url: "https://api.themoviedb.org/3/search/movie?api_key=2f791f0062e16e067544f28c2d3e2018&language=en-US",
    moviesList:[],
    selectedMovie: 'Avatar',
    urltv: "https://api.themoviedb.org/3/search/tv?api_key=2f791f0062e16e067544f28c2d3e2018&language=en-US",
    tvList:[],
});