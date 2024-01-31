<template>
    <section class="wrapper relative flex flex-row overflow-scroll scroll-smooth snap-x snap-mandatory m-0 scroll-m-[1rem]">
        <!-- Previous Button -->
        <button class="absolute left-0 top-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-black stroke-2">
                    <line x1="10" y1="25" x2="40" y2="10"></line>
                    <line x1="10" y1="25" x2="40" y2="40"></line> 
            </svg>
        </button>
        <!-- Carousel -->
        <div class="carousel snap-center flex justify-center items-center flex-row flex-nowrap flex-grow-0 flex-shrink-0 flex-auto relative h-auto w-[100vw] " v-for="(image, index) in props.carouselImages" :key="index">
            <img class="carousel-image h-[100%] w-auto max-w-[100vw] object-cover object-center" :src="image.src" :alt="image.alt">
        </div>
        <!-- Next Button -->
        <button class="absolute top-1/2 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-black stroke-2">
                    <line x1="40" y1="25" x2="10" y2="10"></line>
                    <line x1="40" y1="25" x2="10" y2="40"></line> 
            </svg>
        </button>
    </section>
</template>

<script setup>
const props = defineProps({
    carouselImages: {
        type: Array,
        required: true
    }
});

</script>