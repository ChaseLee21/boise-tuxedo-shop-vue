<template>
    <!-- <section class="touch-pan-x flex flex-row overflow-auto">
        <div class="min-w-full min-h-screen" v-for="image in images">
            <img class="object-scale-down h-full w-full"  :src="image.src" :alt="image.alt">
        </div>
    </section> -->
    <section class="wrapper" ref="carouselWrapper">
        <div class="carousel" v-for="(image, index) in images" :key="index">
            <img class="carousel-image" :src="image.src" :alt="image.alt">
            <p class="carousel-text">{{image.text}}</p>
        </div>
    </section>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    overflow-y: hidden;
    margin: 1rem;
    scroll-margin: 1rem;
    scroll-behavior: smooth;
}
.wrapper .carousel {
    scroll-snap-align: center;
    flex: 0 0 auto;
    position: relative;
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}
.carousel-image {
    height: 100%;
    width: auto;
    max-width: 100vw;
    object-fit: cover;
    object-position: center;
}
.carousel-text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 1rem;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 1.5rem;
    text-align: center;
}
/* This will apply only to devices with a height larger than width */
@media screen and (max-width: 768px) {
    .wrapper {
        margin: 0;
    }
    .wrapper .carousel {
        height: 100%;
        width: 100vw;
    }
}
</style>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const images = []
const carouselWrapper = ref(null);
const state = reactive({ currentIndex: 0, intervalId: null });

const scrollToNext = () => {
    state.currentIndex = (state.currentIndex + 1) % images.length;
    const newScrollPosition = carouselWrapper.value.clientWidth * state.currentIndex;
    carouselWrapper.value.scrollLeft = newScrollPosition;
};

onMounted(() => {
    getImages();
    state.intervalId = setInterval(scrollToNext, 8000); // Change 3000 to the desired interval in milliseconds
});

onUnmounted(() => {
    clearInterval(state.intervalId);
});

const getImages = () => {
    //TODO: retrieve images from database
}

//TODO: along with the non-scrolling carousel, retrieve the images from the database
//TODO: implement route on backend to store / retrieve carousel images in a table
//TODO: implement route on admin to add carousel images to the table 
</script>