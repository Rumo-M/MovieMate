import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../utils/api";
import Loader from "../components/Loader";

export default function MovieDetail() {
  const { id } = useParams(); // get movie id from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!movie) return null;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg w-full md:w-1/3"
        />

        {/* Movie Details */}
        <div className="text-white flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-300 mb-2">
            Release Date: {movie.release_date}
          </p>
          <p className="text-gray-300 mb-2">
            Rating: {movie.vote_average} ⭐ ({movie.vote_count} votes)
          </p>
          <p className="text-gray-300 mb-4">{movie.overview}</p>

          <div className="space-x-2">
            <Link
              to="/"
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Back to Home
            </Link>
            <Link
              to="/watchlist"
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Add to Watchlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
