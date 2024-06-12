<template>
    <ion-page>
      <div class="icon-container">
        <div class="circle"></div>
  
        <ion-icon :icon="arrowBack" class="icon" size="large" color="light" @click="goBack"></ion-icon>
      </div>
      <ion-content class="dark-background">
        <div class="content-container" v-if="sharedState.favorites.length === 0">
          <p>No favorites yet.</p>
        </div>
        <div class="content-container" v-else>
          <div class="image-grid">
            <div class="image-item" v-for="book in sharedState.favorites" :key="book.id">
              <div class="image-wrapper">
                <img :src="book.url" alt="">
                <ion-icon 
                  :icon="heartIcon" 
                  size="large" 
                  color="danger" 
                  @click="toggleFavorite(book)" 
                  :style="{ color: isFavorite(book) ? 'red' : 'black' }" 
                  class="favorite-icon">
                </ion-icon>
              </div>
              <div class="info">
                <p class="title">{{ book.title }}</p>
                <p class="author">{{ book.author }}</p>
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import {  IonPage, IonContent, IonIcon, IonTabs, IonRouterOutlet, IonTabBar, IonButton, IonLabel, IonNavLink } from '@ionic/vue';
  import { sharedState } from '../state.js';

  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { heartOutline, arrowBack, heart,heartDislike } from 'ionicons/icons';
  
  
    const router = useRouter();
  
    const goBack = () => {
    router.go(-1);
  };

  const heartIcon = heartDislike;
  
  const showState = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    sharedState.favorites = favorites;
  };
  
  const isFavorite = (book) => {
    return sharedState.favorites.some(fav => fav.id === book.id);
  };
  
  const toggleFavorite = (book) => {
    if (isFavorite(book)) {
      sharedState.favorites = sharedState.favorites.filter(fav => fav.id !== book.id);
    } else {
      sharedState.favorites.push(book);
    }
    localStorage.setItem('favorites', JSON.stringify(sharedState.favorites));
  };
  
  onMounted(() => {
    showState();
  });
  </script>
  
  <style scoped>
  .circle {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.92); 
    opacity:13%;

  }
  
  .circle:first-of-type {
    width: 60px;
    height: 60px;
  }
  
  .circle:last-of-type {
    width: 60px;
    height: 60px;
  }
  p, h1{
    color: white;
  }
  ion-content{
    --background: #020202 ;
  }
  .dark-background {
    background-color: black;
    color: white;
  }
  .icon-container {
    position: relative;
margin-top: 50px;
    left:10px;
    width: 48px; 
    height: 48px; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-container {
    height: 100vh;
    overflow-y: auto;
    padding: 10px;
  }
  
  .image-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

  }


  
  .image-item {
    flex: 1 1 calc(33.33% - 20px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  color:white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .image-wrapper {
    position: relative;
  }
  
  .image-item img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .favorite-icon {
    position: absolute;
    top: 4px;
    right: 1px;
  }
  
  .info {
    text-align: center;
    margin-top: 10px;
  }
  
  .title, .author {
    margin: 5px 0;
  font-size: 12px;
  }
  </style>
  