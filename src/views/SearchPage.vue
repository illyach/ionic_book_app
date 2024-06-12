<template>
    <ion-page>
      <div class="content-container">
        <div class="icon-container">
          <div class="circle"></div>
          <ion-icon :icon="arrowBack" class="icon" size="large" color="light" @click="goBack"></ion-icon>
        </div>
        <div class="input_style">
          <input v-model="searchQuery" type="text" placeholder="Search by title or author" />
        </div>

        <div class="image-grid" v-if="searchQuery.length > 0">
          <div class="image-item" v-for="(book, index) in filteredBooks" :key="index">
            <router-link :to="{ name: 'BookPage', params: { id: book.id } }" class="custom-link">
              <img :src="book.url" :alt="book.title" />
              <div class="info">
                <p class="title">{{ book.title }}</p>
                <p class="author">{{ book.author }}</p>
              </div>
            </router-link>
          </div>
        </div>
        <div v-else class="found_text">
          <p>No books found.</p>
        </div>
      </div>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { IonPage, IonIcon } from '@ionic/vue';
  import { arrowBack } from 'ionicons/icons';
  
  const router = useRouter();
  const goBack = () => {
    router.go(-1);
  };
  
  const searchQuery = ref('');
  
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
  
  const filteredBooks = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return originalImagesFromHome.filter(book =>
      book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
    );
  });
  </script>
  
  <style >
  .found_text{
    display: flex;
    justify-content: center;
  }
  .input_style{
display: flex;
justify-content: center;
  
  }

  input{
    padding: 20px;
    border-radius: 40px;
  }
  .content-container {
    margin-top:42px;
    height: 100vh;
    overflow-y: auto;
  }
  
  .image-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
   
  }
  
  .image-item {
    padding: 20px;
    flex: 1 1 calc(50% - 10px);
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
  
  .title,
  .author {
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
    opacity: 13%;
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
  