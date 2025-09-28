import React from "react";
import { Link } from "react-router-dom";

const genresMap = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
  99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
  27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Sci-Fi",
  10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
};

export default function MovieCard({ movie }) {
  const posterURL = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/assets/fallback-poster.jpg";

  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition duration-300">
      <img src={posterURL} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-2">
        <h3 className="text-white font-semibold text-lg truncate">{movie.title}</h3>
        <p className="text-gray-300 text-sm mt-1">Release: {movie.release_date || "N/A"}</p>
        <p className="text-yellow-400 text-sm">⭐ {movie.vote_average} ({movie.vote_count})</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {movie.genre_ids?.map((id) => (
            <span key={id} className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
              {genresMap[id] || "Unknown"}
            </span>
          ))}
        </div>
        <Link to={`/movie/${movie.id}`} className="block mt-2 text-blue-400 text-sm hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
}
