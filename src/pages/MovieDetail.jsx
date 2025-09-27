import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import api from "../utils/api";
import mockMovies from "../utils/mockMovies";

const genresMap = {
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

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        console.warn("API failed, using mock movie:", err);
        // fallback to mock movie
        const mock = mockMovies.find((m) => m.id === parseInt(id));
        setMovie(mock || null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (!movie)
    return (
      <p className="text-center text-red-500 mt-10">
        Movie not found.
      </p>
    );

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Link to="/" className="text-blue-400 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="flex-1 text-white">
          <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
          <p className="text-gray-300 mb-2">
            Release: {movie.release_date || "N/A"}
          </p>
          <p className="text-yellow-400 mb-2">
            ⭐ {movie.vote_average} ({movie.vote_count})
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {movie.genre_ids?.map((id) => (
              <span
                key={id}
                className="text-xs bg-blue-600 px-2 py-1 rounded-full"
              >
                {genresMap[id] || "Unknown"}
              </span>
            ))}
          </div>
          {movie.overview && (
            <p className="text-gray-200 text-sm">{movie.overview}</p>
          )}
        </div>
      </div>
    </div>
  );
}
