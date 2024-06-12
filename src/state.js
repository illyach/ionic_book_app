
// src/state.js
import { reactive } from 'vue';

export const sharedState = reactive({
  favorites: [],
  
  addFavorite(book) {
    if (!this.favorites.some(fav => fav.id === book.id)) {
      this.favorites.push(book);
    }
  },
  
  removeFavorite(book) {
    this.favorites = this.favorites.filter(fav => fav.id !== book.id);
  }
});
