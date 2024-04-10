<template>
    <section v-if="loading" class="placeholder">
        <!-- Your placeholder goes here -->
    </section>
    <section v-else class="flex flex-row overflow-scroll scroll-smooth snap-x snap-mandatory m-0 scroll-m-[1rem]">
        <div v-for="image of images" class="snap-center flex flex-row flex-grow-0 flex-shrink-0 max-h-[235px]" >
            <v-lazy-image width="390" height="235" class="object-cover object-center" :src="image.url" :alt="image.imageAlt"></v-lazy-image>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import $ from 'jquery';
import VLazyImage from 'v-lazy-image';

let images = ref([]);
let loading = ref(true);

// USE: this method to retrieve images from the carousel api route
onMounted(async () => {
    await $.ajax({
        url: 'https://boisetuxedoshop.azurewebsites.net/api/carousel',
        type: 'GET',
        error: function (error) {
            console.log(error);
        },
        success: function (data) {
            images.value = data;
            loading.value = false;
        }
    });
});
</script>