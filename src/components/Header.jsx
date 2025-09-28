import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/moviemate_png.jpg'; // Use the logo you copied into assets

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      {/* Logo and App Name */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="MovieMate Logo" className="h-10 w-auto mr-2" />
        <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">MovieMate</span>
      </Link>

      {/* Navigation and Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-gray-700 dark:text-gray-200 hover:underline">
          Home
        </Link>
        <Link to="/profile" className="text-gray-700 dark:text-gray-200 hover:underline">
          Profile
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
}

export default Header;
