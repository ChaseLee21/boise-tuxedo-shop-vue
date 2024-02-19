<template>
    <section ref="imageContainer" class="relative flex flex-row flex-nowrap scroll-smooth my-4 py-4 w-full overflow-hidden">
        <!-- Previous Button -->
        <button class="sticky left-0 top-1/2" @click="scroll(-1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-black stroke-2 opacity-50 hover:opacity-75">
                    <line x1="10" y1="25" x2="40" y2="10"></line>
                    <line x1="10" y1="25" x2="40" y2="40"></line> 
            </svg>
        </button>
        <!-- Images -->
        <div v-for="image in images"  class="flex justify-center w-full min-w-fit mx-4">
            <img class="h-[40rem] max-h-[75vh] min-w-fit object-cover object-center rounded shadow shadow-black" :src="image.url" :alt="image.imageAlt" >
        </div>
        <!-- Next Button -->
        <button class="sticky top-1/2 right-0" @click="scroll(1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-black stroke-2 opacity-50 hover:opacity-75">
                    <line x1="40" y1="25" x2="10" y2="10"></line>
                    <line x1="40" y1="25" x2="10" y2="40"></line> 
            </svg>
        </button>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import $ from 'jquery';

let images = ref([]);

const imageContainer = ref(null);

const scroll = (direction) => {
    const container = imageContainer.value;
    const scrollAmount = direction * container.children[2].clientWidth;
    container.scrollLeft += scrollAmount;
    console.log(container.children[2].clientWidth);
}

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
        }
    });
});

</script>