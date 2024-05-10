<template>
  <div id="app">
    <NavBar v-if="!isMobile" />
    <NavBarMobile v-else="!isMobile" />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/Navigation Bar/NavBar.vue';
import NavBarMobile from './components/Navigation Bar/NavBarMobile.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';

const isMobile = ref(window.innerWidth < 768);
</script>

<style scoped>

</style>
