import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import api from "../utils/api";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        console.log("API KEY from .env:", import.meta.env.VITE_TMDB_API_KEY);

        const response = await api.get("/trending/movie/week");
        console.log("API Response:", response.data);

        setMovies(response.data.results || []);
      } catch (err) {
        console.log("API KEY:", import.meta.env.VITE_TMDB_API_KEY);

        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  if (loading) return <Loader />;

  if (error) {
    return (
      <p className="text-red-500 text-center mt-10 text-lg font-semibold">
        {error}
      </p>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Trending Movies 🎬</h2>
      {movies.length === 0 ? (
        <p className="text-center text-gray-400">No trending movies found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
