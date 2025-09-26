import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
        <img
          src={imageUrl}
          alt={movie.title}
          className="rounded-t-xl w-full h-64 object-cover"
        />
        <div className="p-3 text-white">
          <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
          <p className="text-sm text-gray-400">
            ⭐ {movie.vote_average} | {movie.release_date?.slice(0, 4)}
          </p>
        </div>
      </div>
    </Link>
  );
}
