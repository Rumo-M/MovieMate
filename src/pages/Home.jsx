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
        const response = await api.get("/trending/movie/week");
        setMovies(response.data.results);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies. Check your API key.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  if (loading) return <Loader />;

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Trending Movies 🎬</h2>
      {movies.length === 0 ? (
        <p>No trending movies found.</p>
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

