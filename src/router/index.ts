import { createRouter, createWebHistory } from '@ionic/vue-router';

import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

import BookPage from '../views/BookPage.vue';
import LibraryPage from '../views/LibraryPage.vue';
import FavoritePage from '../views/FavoritePage.vue';
import TextPage from '../views/TextPage.vue';
import SearchPage from '../views/SearchPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/book/:id',
    name: 'BookPage',
    component: BookPage
  },
  {
    path: '/library',
    name: 'LibraryPage',
    component: LibraryPage
  },
  {
    path: '/fav',
    name: 'FavoritePage',
    component: FavoritePage
  },
  {
    path: '/read/:id',
    name: 'TextPage',
    component: TextPage
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage
  }
  
  
  
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
