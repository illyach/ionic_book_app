<template>
    <ion-page>
  
    
      <div class="genre-buttons">
        <button v-for="genre in genres" :key="genre.name" @click="myMethod(genre.name)" :style=" genre.name === isActive ? { color: 'black', backgroundColor: 'white', border:'3px solid black' } : {}" >
          {{ genre.emoji }}  {{ genre.name }} 
        </button>
        <button @click="resetFilter" :style=" isActive === '' ? { color: 'black', backgroundColor: 'white', border:'3px solid black' } : {}"> Total </button>
      </div>
  
      <div class="slider" >
        <div class="slide" v-for="(image, index) in images" :key="index"  >
          <router-link :to="{name:'BookPage', params: {id:image.id}}" class="custom-link">
          <div>
            <div class="image-container">
              <img :src="image.url"  alt="" />
           
              <div class="rating">⭐ {{ image.rating }}</div>
            </div>
            <div class="info">
              <p class="title">{{ image.title }}</p>
              <p class="author">{{ image.author }}</p>
              
            </div>
          </div>
        </router-link>
        
        </div>
      </div>
  
        <div class="horizontal-lines"></div>
  
  
        <div class="trending">
  
          <div class="trending_section">
            <p class="trending_text">Trending Now</p>
            <div class="trending_content">
              <div class="trending_image">
                <img :src="trendingBook.url" alt="">
              </div>
              <div class="trending_info">
                <p class="trending_title">{{ trendingBook.title }}</p>
                <p class="trending_author">{{ trendingBook.author }}</p>
                <p class="trending_rating">⭐ {{ trendingBook.rating }}</p>
                <p class="trending_description">{{ trendingBook.description }}</p>
                <router-link :to="{name:'TextPage', params: {id:trendingBook.id}}" class="custom-link">
                  <button class="btn">Read Now</button>
                   </router-link>
              </div>
            </div>
          </div>
        </div>
      <nav class="nav">
        <a href="/home" class="nav__link custom-link" :class="{ 'nav__link--active': isActiveHome }" @click="isActiveHome = true">
          <ion-icon :icon="isActiveHome ? home : homeOutline"  size="large"></ion-icon>
          <span class="nav__text">Home</span>
        </a>
   
        <a href="/search" class="nav__link " :class="{ 'nav__link--active': isActiveSearch }" @click="isActiveSearch = true">
          <ion-icon :icon="search" size="large"></ion-icon>
          <span class="nav__text">Search</span>
        </a>
        <a href="/library" class="nav__link" :class="{ 'nav__link--active': isActiveLibrary }" @click="isActiveLibrary = true">
          <ion-icon :icon="bookmarks" size="large"></ion-icon>
          <span class="nav__text">Library</span>
        </a>
        <a href="/fav" class="nav__link" :class="{ 'nav__link--active': isActiveFav }" @click="isActiveFav = true">
          <ion-icon :icon="isActiveFav ? heart : heartOutline" size="large"></ion-icon>
          <span class="nav__text">Favorite</span>
        </a>
       
      </nav>
  
  
      
     
    </ion-page>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { IonPage, IonContent, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonNavLink } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  import { playCircle, radio, library, homeOutline, home, search, bookmarks, heartOutline, heart, moon, person} from 'ionicons/icons';
  import BookPage from './BookPage.vue'
  
      // const genres = [`Sci-Fi`, 'Adventure', 'Drama', 'Comedy'];
      const genres = [
    { name: 'SciFi', emoji: '🚀' },
    { name: 'Journey', emoji: '🌄' },
    { name: 'Drama', emoji: '🎭' },
    { name: 'Comedy', emoji: '🤣' }
  ];
  const originalImages = [
    { url: 'https://i.ibb.co/SnZyJ5k/scifi2.jpg', title: 'Afrofuturism', author: 'Ytasha L. Womack', rating: 4.1, genre: 'SciFi', id: 1 },
    { url: 'https://i.ibb.co/z56spLg/3.jpg', title: 'Waiting for Godot', author: 'Samuel Beckett', rating: 5.2, genre: 'Drama', id: 3 },
    { url: 'https://i.ibb.co/GfwgvWX/4.jpg', title: 'Not in Love With You', author: 'Becky Holmes', rating: 3.5, genre: 'Comedy', id: 4 },
    { url: 'https://i.ibb.co/JqQDJHx/scifi.jpg', title: 'Beyond: the Queer', author: 'Sfé R. Monster', rating: 4.2, genre: 'Sci-Fi', id: 5 },
    { url: 'https://i.ibb.co/JvVNxQb/6.jpg', title: 'Fox Snare', author: 'Yoon Ha Lee', rating: 4.02, genre: 'Journey', id: 6 },
    { url: 'https://i.ibb.co/2KDCv0s/7.jpg', title: 'The #1 Lawyer', author: 'James Patterson', rating: 4.77, genre: 'Drama', id: 7 },
    { url: 'https://i.ibb.co/17pD0dw/8.jpg', title: 'Bridget Jones’s Diary', author: 'Helen Fielding', rating: 3.8, genre: 'Comedy', id: 8 },
    { url: 'https://i.ibb.co/xJKNSQ3/2.jpg', title: 'Adventures of Amina', author: 'Shannon Chakraborty', rating: 4.8, genre: 'Journey', id: 2 }
  ];
  
  const trendingBook = computed(() => {
    return originalImages.reduce((max, book) => book.rating > max.rating ? book : max, originalImages[0]);
  });
  
      const images = ref(originalImages);
      const saveImage = ref('hello world');
      const router = useRouter();
    
      const colorSwitcher = ref(false)
      const isActive = ref('')
  
  
      //bottom menu animaniton
     const isActiveSearch = ref(false)
     const isActiveHome = ref(false)
     const isActiveLibrary = ref(false)
     const isActiveFav  = ref(false)
  
      const myMethod = (genre) => {
        images.value = originalImages.filter(image => image.genre === genre);
        colorSwitcher.value = !colorSwitcher.value
        isActive.value = genre
        console.log(colorSwitcher.value)
      };
    
      const resetFilter = () => {
        images.value = originalImages;
        isActive.value = ''
      };
    
     
    
     
  
  </script>
  
  <style >
  .btn {
    background-color: rgb(114, 117, 225);
    color: white;
    border: none;
    padding: 20px 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
   
  
  }
  
  .horizontal-lines {
   
    width: 90%; /* Full width */
    height: 2px; /* Line height */
    background-color: rgb(39, 39, 39); /* Line color */
    margin: 20px 10px 0px 20px; /* Margin for spacing */
  }
  .trending_image img{
    width: 140px;
    height: 200px;
  }
  
  .trending {
    display: flex;
    justify-content: flex-start;
    padding-bottom: 90px;
    padding-left: 15px;
  
  }
  
  .trending_text {
    font-size: 20px;
letter-spacing: 1px;
  }
  
  .trending_content {
    display: flex;
    align-items: center;
    gap: 20px;
  
  }
  
  .trending_image img {
    width: 150px;
    height: 240px;
    border-radius: 10px;
  }
  
  .trending_info {
    display: flex;
    flex-direction: column;
  
  
  }
  
  .trending_info .trending_title {
    font-size: 20px;
    font-weight: bold;
  }
  
  .trending_info .trending_author,
  .trending_info .trending_rating,
  .trending_info .trending_description {
    font-size: 14px;
  }
  
  .trending_content{
    background-color:#161616;
    padding: 14px;
    border-radius: 30px;
  }
  
  .image-container img{
    width: 140px;
  }
  .ion-page {
    background-color: black;
  
  }
  
  
  
  
  
  .slider {
  
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding: 10px;
    scroll-snap-type: x mandatory;
    padding: 20px 0px;

    /*margin-bottom: 100px;*/
    margin-left: 10px;
  }
  
  .slide {
    flex-shrink: 0;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .image-container {
    position: relative;
  
  }
  
  .image-container img{
    border-radius: 30px;
  
  }
  .rating {
    position: absolute;
    top: 180px;
    left: 94px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 5px;
    font-size: 9.4px;
    font-weight: bold;
    border-radius: 9px;
  }
  
  .info {
    text-align: center;
  }
  
  .title, .author {
    margin: 5px 0;
    font-size: 12px;
  }
  
  .slider::-webkit-scrollbar {
    display: none;
  }
  
  .genre-buttons {
  margin:45px 10px 0px 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .genre-buttons button {
    padding: 0.59em;
    background-color: rgb(31, 31, 31);
    border-radius: 20px;
    color: white;
    font-weight: bold;
  }
  
  
  
  
  
  /* <router link> delete blu link color */
  .custom-link {
    text-decoration: none;
    color: inherit;
  }
  
  .custom-link:focus,
  .custom-link:active {
    outline: none;
    box-shadow: none;
  }
  
  /* router link delete blu link color */
  body {
    background: #222; /* Цвет фона */
  
  }
  
  .nav {
    position: fixed;
    margin-bottom: 15px;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top: 3px solid rgb(31, 31, 31);
    background-color: black;
    display: flex;
    overflow-x: auto;
    justify-content: center;
    align-items: center;
    gap:23px;
  }
  
  .nav__link ion-icon {
  display: flex;
  
  }
  
  
  .nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 13px;
    color: #444444;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
  }
  
  
  /* .nav__link:hover {
    background-color: #eeeeee;
  } */
  
  .nav__link--active {
    font-weight: bold;
    color: #ffffff;
  }
  
  .nav__icon {
    font-size: 18px;
  }
  
  
  </style>