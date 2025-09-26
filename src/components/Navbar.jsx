import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded" />
        <span className="text-2xl font-bold">MovieApp</span>
      </Link>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/search" className="hover:text-gray-400">Search</Link>
        <Link to="/watchlist" className="hover:text-gray-400">Watchlist</Link>
        <Link to="/profile" className="hover:text-gray-400">Profile</Link>
      </div>
    </nav>
  );
}
