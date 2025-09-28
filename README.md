# 🎬 MovieMate

MovieMate is a modern **Movie Recommendation App** that helps users discover movies they'll actually love.  
Built with **React** and **Tailwind CSS**, it fetches movie data from the [TMDb API](https://www.themoviedb.org/) (with a fallback to mock data) and provides trending movies, detailed info, search functionality, and a watchlist.

---

## 🚀 Features

- 🔍 **Search Movies** – Find movies by title, genre, or keyword  
- 🎥 **Trending Movies** – Browse the latest trending movies  
- 📝 **Movie Details** – View synopsis, release date, ratings, and more  
- ⭐ **Recommendations** – Get suggestions based on your preferences  
- 👤 **User Profile** – View saved preferences and activity  
- 📋 **Watchlist** – Save movies to watch later  
- 🌙 **Dark Mode** – Switch between light and dark themes  
- 📱 **Responsive Design** – Works seamlessly on mobile, tablet, and desktop  
- ⚡ **API Fallback** – Automatically uses mock data if the API fails  

---

## 🛠️ Tech Stack

- **Frontend:** React (with Vite)  
- **Styling:** Tailwind CSS  
- **Routing:** React Router  
- **State Management:** React Hooks  
- **API:** [TMDb API](https://www.themoviedb.org/)  
- **HTTP Requests:** Axios  
- **Icons & UI:** Heroicons / Lucide React  
- **Deployment:** Netlify  

---

## 📂 Project Structure

```bash
MovieMate/
├── public/             # Static assets
├── src/
│   ├── assets/         # Logos, images
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom hooks for data fetching
│   ├── pages/          # Page-level components (Home, Profile, etc.)
│   ├── App.jsx         # Main app entry
│   ├── index.css       # Tailwind styles
│   └── main.jsx        # React entry point
├── package.json
└── README.md
