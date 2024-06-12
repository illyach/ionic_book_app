<template>
    <ion-page>
      <div class="first_section">
        <div class="icon-container">
          <div class="circle"></div>
  
          <ion-icon :icon="arrowBack" class="icon" size="large" color="light" @click="goBack"></ion-icon>
        </div>
        <div class="centerBook">
          <img :src="bookPage.url" alt="">
          <p>{{bookPage.title}}</p>
          <p>{{bookPage.author}}</p>
        </div>
        <div class="icon-container">
          <div class="circle"></div>
          <ion-icon :icon="heartOutline" class="icon" size="large" color="light" @click="toggleFavorite(bookPage)" :style="dynamicStyle"></ion-icon>
        </div>
      </div>
      <div class="second_section">
        <div class="bookInfo">
          <div class="pages">
            <span>{{bookPage.pages}}</span>
            <p>Pages</p>
          </div>
          <div class="divider"></div>
          <div class="bookRating">
            <div>
              
              <span>⭐️ {{bookPage.rating}} </span>
            </div>
                 <p>Rating</p>
          </div>
          <div class="divider"></div>
          <div class="reviews">
            <span>{{bookPage.reviews}}</span>
            <p>Reviews</p>  
          </div>
  
  
        </div>
        <div class="bookGenre">
          <p>
            {{ bookPage.genre }}
            <template v-for="genre in genres">
              <span v-if="bookPage.genre === genre.name">{{ genre.emoji }}</span>
            </template>
          </p>
        </div>
        <p class="textDesc">{{bookPage.text}}</p>
        <div class="Button_container">
          <router-link :to="{name:'TextPage', params: {id:bookPage.id}}" class="custom-link">
         <button class="btn">Read Now</button>
          </router-link>
        </div>
  
      </div>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { IonPage, IonButton, IonIcon } from '@ionic/vue';
  import { useRoute, useRouter } from 'vue-router';
  import { computed } from 'vue';
  import { heartOutline, arrowBack, heart } from 'ionicons/icons';
  import { text1, text2, text3, text4, text5, text6, text7, text8 } from '../data/bookDescription.js'

  const genres = [
    { name: 'Sci-Fi', emoji: '🚀' }, //SciFi
    { name: 'Adventure', emoji: '🌄' }, //Journey
    { name: 'Drama', emoji: '🎭' },
    { name: 'Comedy', emoji: '🤣' }
  ];
  
  
  
  const originalImagesFromHome = [
    { url: 'https://i.ibb.co/SnZyJ5k/scifi2.jpg', title: 'Afrofuturism', author: 'Ytasha L. Womack', rating: 4.1, genre: 'Sci-Fi', id: 1, pages: 213, reviews: '12.7K', text: text1 },
    { url: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663869260i/61294937.jpg', title: 'The Adventures of Amina', author: 'Shannon Chakraborty', rating: 4.8, genre: 'Adventure', id: 2, pages: 483, reviews: '40.3K', text: text2 },
    { url: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327910301i/17716.jpg', title: 'Waiting for Godot', author: 'Samuel Beckett', rating: 5.2, genre: 'Drama', id: 3, pages: 109, reviews: '9.1K', text: text3 },
    { url: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689989897i/194028309.jpg', title: 'Not in Love With You', author: 'Becky Holmes', rating: 3.5, genre: 'Comedy', id: 4, pages: 288, reviews: '1.3K', text: text4 },
    { url: 'https://i.ibb.co/JqQDJHx/scifi.jpg', title: 'Beyond: the Queer', author: 'Sfé R. Monster', rating: 4.2, genre: 'Sci-Fi', id: 5, pages: 274, reviews: '1.3K', text: text5 },
    { url: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684778279i/62959490.jpg', title: 'Fox Snare', author: 'Yoon Ha Lee', rating: 4.02, genre: 'Adventure', id: 6, pages: 250, reviews: '1.1K', text: text6 },
    { url: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1695758050i/182761405.jpg', title: 'The #1 Lawyer', author: 'James Patterson', rating: 4.77, genre: 'Drama', id: 7, pages: 432, reviews: '10.4K', text: text7 },
    { url: 'https://i.ibb.co/16QwGRF/227443.jpg', title: 'Bridget Jones’s Diary', author: 'Helen Fielding', rating: 3.8, genre: 'Comedy', id: 8, pages: 288, reviews: '12.8K', text: text8 }
  ];
  
  const route = useRoute();
  const bookPage = originalImagesFromHome.find(i => i.id === parseInt(route.params.id));
  
  const router = useRouter();
  
  const isFavorite = computed(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some(fav => fav.id === bookPage.id);
  });
  
  const dynamicStyle = ref({
    width:'35px',
    height:'35px',
  });
  
  const toggleFavorite = (book) => {
    dynamicStyle.value.width = '24px'; 
    dynamicStyle.value.height = '24px'; 
  
  
    setTimeout(() => {
      dynamicStyle.value.width = '35px'; 
      dynamicStyle.value.height = '35px'; 
    }, 200); 
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const existingIndex = favorites.findIndex(fav => fav.id === book.id);
    if (existingIndex !== -1) {
      favorites.splice(existingIndex, 1);
    } else {
      favorites.push(book);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  const goBack = () => {
    router.go(-1);
  };
  
  
  </script>
  
  <style scoped>
  .divider {
   
    width: 40px; /* Ширина полоски */
    height: 3px; /* Высота полоски */
    background-color: rgb(48, 48, 48); /* Цвет полоски */
    margin-top: 24px;
    transform: rotate(90deg);
  }
  .centerBook p {
    color: white;
    font-weight: bold;
  }
  
  .first_section {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    height: 47%;
    margin-top: 30px;
    z-index: 1;
    background-color: rgb(144, 90, 64);
  }
  
  img {
    margin-left: 10px;
    width: 170px;
    height: 270px;
  }
  
  .ion-page {
    background-color: rgb(144, 90, 64);
  }
  
  .second_section {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    height: 67%;
    background-color: rgb(13, 12, 11);
    z-index: 2;
  }
  
  .icon-container {
    position: relative;
    width: 48px; 
    height: 48px; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon {
    position: absolute;
  
    z-index: 9999;
  }
  
  .bookInfo{
    display: flex;
margin: 20px 18px 10px 18px;
    font-size: 14px;
    justify-content: space-evenly;
    background-color: rgb(30, 30, 30);
    border-radius: 50px;
    padding-top: 14px;
  
  
    
  }
  
  .bookRating p {
    margin-left:10px;
  }
  
  .bookInfo span{
  margin-left: 10px;
  font-weight:bold;
  }
  
  
  .circle {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.92); 
    opacity:13%;
    z-index: 3;
  }
  
  .circle:first-of-type {
    width: 60px;
    height: 60px;
  }
  
  .circle:last-of-type {
    width: 60px;
    height: 60px;
  }
  
  .centerBook p {
    display: flex;
    justify-content: center;
  }
  
  .bookGenre{
    margin-top:8px;
    display: inline-block;
    position: relative;
  background-color: white;
      border-radius: 30px; /* Устанавливаем одинаковый радиус для всех углов */
  padding: 0px 10px 0px 10px;
  left:38%;
  
  }
  span{
    color:white;
  }
  .bookGenre p {
    font-size: 15px;
    padding: 0;
    margin: 0;
    color:black;
  }
  
  
  .textDesc  {
    font-size: 18px;
  
  margin-left: 15px;
  padding: 5px;
  margin-bottom: 10px;
  }
  
  .btn {
    background-color: rgb(114, 117, 225);

    color: white;
    border: none;
    padding: 16px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .Button_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  
  }
  </style>
  