<template>
    <section class="wrapper flex flex-row overflow-scroll scroll-smooth snap-x snap-mandatory m-0 scroll-m-[1rem]">
        <div class="carousel snap-center flex justify-center items-center flex-row flex-nowrap flex-grow-0 flex-shrink-0 flex-auto relative h-auto w-[100vw] " v-for="(image, index) in props.carouselImages" :key="index">
            <img class="carousel-image h-[100%] w-auto max-w-[100vw] object-cover object-center" :src="image.src" :alt="image.alt">
        </div>
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