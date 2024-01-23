<template>
  <div id="app">
    <NavBar />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
//TODO: add icon to tab
</script>

<style scoped>

</style>
