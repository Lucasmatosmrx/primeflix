import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=8f00941b4ec27f207478a99c35cb8dc2&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
