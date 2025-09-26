import axios from "axios";

// Create an Axios instance for TMDb API
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY, // your TMDb API key from .env
  },
});

export default api;
