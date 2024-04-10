<template>
    <section v-if="loading" class="placeholder">
        <!-- Your placeholder goes here -->
    </section>
    <section v-else class="flex flex-row overflow-y-hidden overflow-scroll scroll-smooth snap-x snap-mandatory m-0 scroll-m-[1rem]">
        <div v-for="image of images" class="snap-center flex flex-row flex-grow-0 flex-shrink-0 max-h-[235px]" >
            <div class="placeholder h-[235px]">
                <v-lazy-image :width="image.width" :height="image.height" class="object-cover object-center" :src="image.url" :alt="image.imageAlt"></v-lazy-image>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VLazyImage from 'v-lazy-image';

let images = ref([]);
let loading = ref(true);

onMounted(async () => {
    try {
        const response = await fetch('https://boisetuxedoshop.azurewebsites.net/api/carousel');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        for (let image of data) {
            image.height = 252;
            image.width = 430;
        }
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
    height: 252px;
}
</style>
