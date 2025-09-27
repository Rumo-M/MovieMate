import React from "react";

export default function Profile() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">My Profile</h2>
      <p className="text-gray-300 mb-6">
        This page will show user information, preferences, and activity.
      </p>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">User Information</h3>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-xl font-semibold mb-2">Preferences</h3>
        <p>Favorite Genre: Action</p>
        <p>Notifications: Enabled</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-xl font-semibold mb-2">Activity</h3>
        <p>Recently Watched: Inception, The Dark Knight</p>
        <p>Watchlist Count: 5 movies</p>
      </div>

      <p className="mt-6 text-gray-400 italic">
        You can later add authentication, ratings, and personalized recommendations here.
      </p>
    </div>
  );
}
