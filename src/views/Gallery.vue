<template>
    <main>
        <header class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
            <h1 class="my-2 text-start text-2xl md:text-3xl lg:text-4xl mx-2 font-bold underline" >Image Gallery</h1>
            <p class="text-start md:text-lg lg:text-xl ms-5 my-2">
                Boise Tuxedo Shop is committed to giving our best effort to the Treasure Valley community. 
                Below are some images that have been submitted to us from the amazing people we help look their best on their big day. 
                If you have images of your own you would like to share with us to display on here or social media please send them to us via email at
                <a class="text-blue-900 font-bold underline" href="mailto:boisetuxedoshop@gmail.com" target="_blank">boisetuxedoshop@gmail.com</a> 
            </p>
        </header>
        <ImageGallery v-if="images" :images = images />
    </main>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import ImageGallery from '../components/ImageGallery.vue';

let images = ref([]);
let loading = ref(true);

onMounted(async () => {
    try {
        const response = await fetch('https://boisetuxedoshop.azurewebsites.net/api/gallery');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        images.value = data;
        console.log(images.value);
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
});

</script>