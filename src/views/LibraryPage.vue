<template>
    <ion-page>
    <div class="content-container">
      <div class="icon-container">
        <div class="circle"></div>

        <ion-icon :icon="arrowBack" class="icon" size="large" color="light" @click="goBack"></ion-icon>
      </div>
      <div class="image-grid">
        <div class="image-item" v-for="(image, index) in originalImagesFromHome" :key="index">
            <router-link :to="{name:'BookPage', params: {id:image.id}}" class="custom-link">
          <img :src="image.url" :alt="image.title" />
          <div class="info">
            <p class="title">{{ image.title }}</p>
            <p class="author">{{ image.author }}</p>
          </div>
        </router-link>
        </div>
      </div>
    </div>
</ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { IonPage, IonContent, IonTabs, IonRouterOutlet, IonTabBar, IonButton, IonLabel, IonIcon, IonNavLink } from '@ionic/vue';
  import { heartOutline, arrowBack, heart } from 'ionicons/icons';


  const router = useRouter();

  const goBack = () => {
  router.go(-1);
};

  // const originalImagesFromHome = [
  //   { url: 'https://unsplash.it/100/150?image=41', title: 'Image 1', author: 'Author 1', rating: 4.5, genre: 'Sci-Fi', id: 1 },
  //   { url: 'https://unsplash.it/100/150?image=40', title: 'Image 2', author: 'Author 2', rating: 4.2, genre: 'Adventure', id: 2 },
  //   { url: 'https://unsplash.it/100/150?image=42', title: 'Image 3', author: 'Author 3', rating: 5.2, genre: 'Drama', id: 3 },
  //   { url: 'https://unsplash.it/100/150?image=43', title: 'Image 4', author: 'Author 4', rating: 3.5, genre: 'Comedy', id: 4 },
  //   { url: 'https://unsplash.it/100/150?image=44', title: 'Image 5', author: 'Author 5', rating: 4.2, genre: 'Sci-Fi', id: 5 },
  //   { url: 'https://unsplash.it/100/150?image=45', title: 'Image 6', author: 'Author 6', rating: 4.8, genre: 'Adventure', id: 6 },
  //   { url: 'https://unsplash.it/100/150?image=46', title: 'Image 7', author: 'Author 7', rating: 4.3, genre: 'Drama', id: 7 },
  //   { url: 'https://unsplash.it/100/150?image=47', title: 'Image 8', author: 'Author 8', rating: 3.9, genre: 'Comedy', id: 8 },
  //   { url: 'https://unsplash.it/100/150?image=48', title: 'Image 9', author: 'Author 9', rating: 3.9, genre: 'Comedy', id: 9 },
  //   { url: 'https://unsplash.it/100/150?image=49', title: 'Image 10', author: 'Author 10', rating: 3.9, genre: 'Comedy', id: 10 },
  //   { url: 'https://unsplash.it/100/150?image=50', title: 'Image 11', author: 'Author 11', rating: 3.9, genre: 'Comedy', id: 11 },
  //   { url: 'https://unsplash.it/100/150?image=51', title: 'Image 12', author: 'Author 12', rating: 3.9, genre: 'Comedy', id: 12 }
  // ];

  const originalImagesFromHome = [
  { url: 'https://i.ibb.co/SnZyJ5k/scifi2.jpg', title: 'Afrofuturism', author: 'Ytasha L. Womack', rating: 4.1, genre: 'SciFi', id: 1 },
  { url: 'https://i.ibb.co/xJKNSQ3/2.jpg', title: 'The Adventures of Amina', author: 'Shannon Chakraborty', rating: 4.8, genre: 'Journey', id: 2 },
  { url: 'https://i.ibb.co/z56spLg/3.jpg', title: 'Waiting for Godot', author: 'Samuel Beckett', rating: 5.2, genre: 'Drama', id: 3 },
  { url: 'https://i.ibb.co/GfwgvWX/4.jpg', title: 'Not in Love With You', author: 'Becky Holmes', rating: 3.5, genre: 'Comedy', id: 4 },
  { url: 'https://i.ibb.co/JqQDJHx/scifi.jpg', title: 'Beyond: the Queer', author: 'Sfé R. Monster', rating: 4.2, genre: 'Sci-Fi', id: 5 },
  { url: 'https://i.ibb.co/JvVNxQb/6.jpg', title: 'Fox Snare', author: 'Yoon Ha Lee', rating: 4.02, genre: 'Journey', id: 6 },
  { url: 'https://i.ibb.co/2KDCv0s/7.jpg', title: 'The #1 Lawyer', author: 'James Patterson', rating: 4.77, genre: 'Drama', id: 7 },
  { url: 'https://i.ibb.co/17pD0dw/8.jpg', title: 'Bridget Jones’s Diary', author: 'Helen Fielding', rating: 3.8, genre: 'Comedy', id: 8 }
];
  

  </script>
  
  <style scoped>
  /* Добавьте этот стиль для родительского контейнера */
  .content-container {
    height: 100vh; /* Высота на всю видимую часть экрана */
    overflow-y: auto; /* Вертикальная прокрутка */
  }
  
  .image-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top:40px;
  }
  
  .image-item {
    padding: 20px;
    flex: 1 1 calc(50% - 10px); /* Each item takes up 50% of the container's width minus the gap */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .image-item img {

    max-width: 100%;
    height: auto;
  }
  
  .info {
    text-align: center;
  }
  
  .title, .author {
    margin: 5px 0;
    font-size: 17px;
  }
  
  p {
    color: white;
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

  .icon-container {
    position: relative;
    top:10px;
    left:10px;
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
  
  </style>
  