export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function isFavorite(id) {
  return getFavorites().some(item => item.id === id);
}

export function addFavorite(product) {
  const favorites = getFavorites();
  if (favorites.some(item => item.id === product.id)) return;
  favorites.push(product);
  saveFavorites(favorites);
}

export function removeFavorite(id) {
  const favorites = getFavorites().filter(item => item.id !== id);
  saveFavorites(favorites);
  if (favorites.length === 0) {
    location.reload()
  }
}