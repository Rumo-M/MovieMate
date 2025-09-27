import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import mockMovies from "../utils/mockMovies";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user's watchlist
    const fetchWatchlist = async () => {
      try {
        // For now, use mock movies as the watchlist
        setWatchlist(mockMovies.slice(0, 6)); // first 6 movies as example
      } catch (err) {
        console.error("Failed to load watchlist:", err);
        setWatchlist([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlist();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Watchlist 📌</h2>

      {watchlist.length === 0 ? (
        <p className="text-center text-gray-400">
          Your watchlist is empty. Add some movies!
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
