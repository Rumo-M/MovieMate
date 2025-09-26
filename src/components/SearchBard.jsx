import React from "react";

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <form onSubmit={onSearch} className="w-full flex mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="flex-1 px-4 py-2 rounded-l-lg text-black"
      />
      <button
        type="submit"
        className="bg-blue-600 px-4 rounded-r-lg text-white hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
}
