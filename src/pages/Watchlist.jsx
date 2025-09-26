import React, { useState, useEffect } from "react";
import { getWatchlist, removeFromWatchlist } from "../utils/storage";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    setWatchlist(getWatchlist());
  }, []);

  const handleRemove = (id) => {
    removeFromWatchlist(id);
    setWatchlist(getWatchlist());
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p className="text-gray-300">No movies in your watchlist yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {watchlist.map((movie) => (
            <div key={movie.id} className="relative">
              <MovieCard movie={movie} />
              <button
                onClick={() => handleRemove(movie.id)}
                className="absolute top-2 right-2 bg-red-600 px-2 py-1 rounded text-white text-sm hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
