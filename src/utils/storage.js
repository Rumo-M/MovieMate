// Manage local watchlist/favorites
export const getWatchlist = () =>
  JSON.parse(localStorage.getItem("watchlist")) || [];

export const addToWatchlist = (movie) => {
  const current = getWatchlist();
  const updated = [...current, movie];
  localStorage.setItem("watchlist", JSON.stringify(updated));
};

export const removeFromWatchlist = (id) => {
  const current = getWatchlist();
  const updated = current.filter((m) => m.id !== id);
  localStorage.setItem("watchlist", JSON.stringify(updated));
};
