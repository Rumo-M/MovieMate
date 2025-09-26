import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded"
      />
      <h2 className="text-white text-lg mt-2">{movie.title}</h2>
    </div>
  );
}
