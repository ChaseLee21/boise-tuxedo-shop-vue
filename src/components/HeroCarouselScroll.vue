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

const images = [{
    src: "/src/assets/images/burg-wedding.jpg",
    alt: "A groom and his groomsmen in burgundy tuxedos.",
    text: "We have tuxedos and suits for every season."
},{
    src: "/src/assets/images/322_aspen_1.jpg",
    alt: "A young groom dressed in a grey suit with a striped gray tie. His bride is in her wedding dress leaning next to him.",
    text: "We specialize in weddings."
},{
    src: "/src/assets/images/black-mens-performance-stretch-suit-3.jpg",
    alt: "A young man dressed in an all black suit posing next to a railing.",
    text: "Prom is coming soon."
},{
    src: "/src/assets/images/Ike-Behar-Slim-Black-Parker.jpg",
    alt: "A young man dressed in an all black tuxedo posing next to a railing.",
    text: "Tuxedos and suits same day rental."
},{
    src: "/src/assets/images/201_burgundy_empire_tuxedo.jpg",
    alt: "A man in a burgundy dinner shawl 1 button jacket and his bride posing with him in her wedding dress.",
    text: "Booking weddings today!"
},{
    src: "/src/assets/images/211_tribeca_cobalt_blue_1.jpg",
    alt: "An adult couple blue tuxedo with a shiny black lapel and his bride posing with him in her wedding dress.",
    text: "We can cater to out of town groomsmen / weddings."
},{
    src: "/src/assets/images/IndigoBlueTuxedoShawlBlackLapel.jpg",
    alt: "An adult man in a blue tuxedo with a shiny black lapel posing.",
    text: "Family owned and operated in the heart of Meridian, Idaho."
}

]
const carouselWrapper = ref(null);
const state = reactive({ currentIndex: 0, intervalId: null });

const scrollToNext = () => {
    state.currentIndex = (state.currentIndex + 1) % images.length;
    const newScrollPosition = carouselWrapper.value.clientWidth * state.currentIndex;
    carouselWrapper.value.scrollLeft = newScrollPosition;
};

onMounted(() => {
    state.intervalId = setInterval(scrollToNext, 8000); // Change 3000 to the desired interval in milliseconds
});

onUnmounted(() => {
    clearInterval(state.intervalId);
});
</script>