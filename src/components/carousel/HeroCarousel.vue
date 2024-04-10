<template>
    <section ref="imageContainer" class="relative flex flex-row flex-nowrap scroll-smooth my-4 py-4 w-full overflow-hidden">
        <!-- Previous Button -->
        <button class="sticky left-0 top-1/2" @click="scroll(-1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-slate-800 stroke-2 ml-2 bg-white rounded-full bg-opacity-50 opacity-100 hover:opacity-75">
                    <line x1="10" y1="25" x2="40" y2="10"></line>
                    <line x1="10" y1="25" x2="40" y2="40"></line> 
            </svg>
        </button>
        <!-- Images -->
        <div v-for="image in images"  class="flex justify-center w-full min-w-fit mx-4 p-2">
            <div class="placeholder">
                <v-lazy-image width="1100" height="640" class="h-[40rem] max-h-[75vh] min-w-fit object-cover object-center rounded shadow shadow-black" :src="image.url" :alt="image.imageAlt"></v-lazy-image>
            </div>
        </div>
        <!-- Next Button -->
        <button class="sticky top-1/2 right-0" @click="scroll(1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-slate-800 mr-2 bg-white rounded-full bg-opacity-50 stroke-2 opacity-100 hover:opacity-75">
                    <line x1="40" y1="25" x2="10" y2="10"></line>
                    <line x1="40" y1="25" x2="10" y2="40"></line> 
            </svg>
        </button>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VLazyImage from 'v-lazy-image';

let images = ref([]);
let loading = ref(true);

const imageContainer = ref(null);

const scroll = (direction) => {
    const container = imageContainer.value;
    const scrollAmount = direction * container.children[2].clientWidth;
    container.scrollLeft += scrollAmount;
    console.log(container.children[2].clientWidth);
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
<style scoped>
.placeholder {
    width: 100%;
    height: auto;
    aspect-ratio: 5/3;
}
</style>