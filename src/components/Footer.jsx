import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="container mx-auto text-center space-y-2">
        <p>🎬 MovieApp &copy; {new Date().getFullYear()}</p>
        <p>
          Built with <span className="text-white font-semibold">React</span> &{" "}
          <span className="text-white font-semibold">Tailwind CSS</span>
        </p>
        <p>
          Data from <a href="https://www.themoviedb.org/" className="text-white underline">TMDb API</a>
        </p>
      </div>
    </footer>
  );
}
