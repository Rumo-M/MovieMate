import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  if (!movie.poster_path) return null; // Skip movies without poster

  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <h3 className="text-white font-semibold text-lg truncate">{movie.title}</h3>

        {/* Release Date and Rating */}
        <p className="text-gray-300 text-sm mt-1">
          {movie.release_date ? `Release: ${movie.release_date}` : "Release: N/A"} | ⭐ {movie.vote_average || "N/A"}
        </p>

        <Link
          to={`/movie/${movie.id}`}
          className="text-blue-400 text-sm hover:underline mt-1 block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
