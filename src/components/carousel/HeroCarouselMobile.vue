<template>
    <header class="flex flex-row justify-start items-end m-3">
        <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2 ">Image Gallery</h2> 
        <router-link class="text-base underline button-class" :to="{ name: 'Gallery' }">View More</router-link>
    </header>
    <section ref="imageContainer" class="relative mb-10">
        <!-- Previous Button -->
        <button class="absolute left-0 top-1/2" @click="scroll(-1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="stroke-slate-800 stroke-2 bg-white rounded-full bg-opacity-50 opacity-100 hover:opacity-75">
                <line x1="3" y1="15" x2="22" y2="5"></line>
                <line x1="3" y1="15" x2="22" y2="25"></line> 
            </svg>
        </button>
        <!-- Next Button -->
        <button class="absolute top-1/2 right-0" @click="scroll(1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="stroke-slate-800 bg-white rounded-full bg-opacity-50 stroke-2 opacity-100 hover:opacity-75">
                <line x1="27" y1="15" x2="8" y2="5"></line>
                <line x1="27" y1="15" x2="8" y2="25"></line> 
            </svg>
        </button>

        <!-- Images -->
        <div v-if="images.length > 0" class="flex min-w-full ">
            <v-lazy-image width="1100" height="640" class="w-fit h-auto m-auto shadow-2xl rounded transition-all ease-in-out duration-300" :src="images[currentImage].url" :alt="images[currentImage].imageAlt"></v-lazy-image>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VLazyImage from 'v-lazy-image';

let images = ref([]);
let loading = ref(true);
let currentImage = ref(0);

const imageContainer = ref(null);

const scroll = (indexChange) => {
    let newIndex = currentImage.value + indexChange;
    if (newIndex < 0) {
        newIndex = images.value.length - 1;
    } else if (newIndex >= images.value.length) {
        newIndex = 0;
    }
    currentImage.value = newIndex;
}

// USE: this method to retrieve images from the carousel api route
onMounted(async () => {
    try {
        const response = await fetch('https://boisetuxedoshop.azurewebsites.net/api/carousel');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        images.value = data;
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
});

</script>