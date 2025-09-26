import React, { useEffect, useState } from "react";
import api from "../utils/api";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      try {
        const res = await api.get("trending/movie/week");
        setMovies(res.data.results);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchTrending();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Trending Movies 🎬</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
