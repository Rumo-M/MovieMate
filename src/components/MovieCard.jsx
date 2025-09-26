import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  if (!movie.poster_path) return null; // Skip movies without poster

  // Convert genre_ids to names (optional: you can fetch genre list from TMDb)
  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const genres = movie.genre_ids
    ? movie.genre_ids.slice(0, 3).map((id) => genreMap[id])
    : [];

  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <h3 className="text-white font-semibold text-lg truncate">{movie.title}</h3>

        {/* Release Date & Rating */}
        <p className="text-gray-300 text-sm mt-1">
          {movie.release_date ? `Release: ${movie.release_date}` : "Release: N/A"} | ⭐ {movie.vote_average || "N/A"} ({movie.vote_count || 0} votes)
        </p>

        {/* Genre Badges */}
        <div className="flex flex-wrap gap-1 mt-2">
          {genres.map((genre) => (
            <span
              key={genre}
              className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* View Details Link */}
        <Link
          to={`/movie/${movie.id}`}
          className="text-blue-400 text-sm hover:underline mt-2 block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
