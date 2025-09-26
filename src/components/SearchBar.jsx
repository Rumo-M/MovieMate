import React from "react";

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="p-2 rounded border border-gray-600 w-full"
    />
  );
}
