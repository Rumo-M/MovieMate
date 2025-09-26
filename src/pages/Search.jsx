import React, { useState } from "react";
import api from "../utils/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    try {
      const res = await api.get("search/movie", { params: { query } });
      setResults(res.data.results);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
