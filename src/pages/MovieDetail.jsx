import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "../components/Loader";
import { addToWatchlist } from "../utils/storage";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const res = await api.get(`movie/${id}`);
        setMovie(res.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (!movie) return <p className="p-6 text-white">Movie not found.</p>;

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 text-white">
      <img src={imageUrl} alt={movie.title} className="w-full md:w-1/3 rounded-xl" />
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-300 mb-4">{movie.release_date}</p>
        <p className="mb-4">{movie.overview}</p>
        <button
          onClick={() => addToWatchlist(movie)}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
}
