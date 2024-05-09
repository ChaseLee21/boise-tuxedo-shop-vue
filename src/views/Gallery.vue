<template>
    <Header :title="headerProps.title" :content="headerProps.content" :links="headerProps.links" />
    <main>
        <ImageGallery v-if="images" :images = images />
    </main>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import ImageGallery from '../components/ImageGallery.vue';
import Header from '../components/Header.vue';

let images = ref([]);
let loading = ref(true);

const headerProps = {
    title: 'Image Gallery',
    content: `Boise Tuxedo Shop is committed to giving our best effort to the Treasure Valley community. 
    Below are some images that have been submitted to us from the amazing people we help look their best on their big day. 
    If you have images of your own you would like to share with us to display on here or social media please send them to us via email at boisetuxedoshop@gmail.com`,
    links: [
        { url: '/contact', text: 'Contact Us' }
    ]
}

onMounted(async () => {
    try {
        const response = await fetch('https://boisetuxedoshop.azurewebsites.net/api/gallery');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        shuffleArray(data);
        images.value = data;
        console.log(images.value);
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
});

function shuffleArray(images) {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
}

</script>