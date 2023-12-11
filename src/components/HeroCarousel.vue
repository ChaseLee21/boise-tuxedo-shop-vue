    <!-- TODO: implement this component -->
    <!-- 
        user story: 
        AS A potential customer
        I WANT to see a carousel of images of the business
        SO THAT I can decide if I want to do business with them

        acceptance criteria:
        GIVEN I am on the Home page
        WHEN I view the carousel on a large screen
        THEN I can see multiple images at once and they are large enough to see clearly
        GIVEN I am on the Home page
        WHEN I view the carousel on a tablet device
        THEN I can see multiple images at once and they are large enough to see clearly
        GIVEN I am on the Home page
        WHEN I view the carousel on a mobile device
        THEN I can easily scroll through the carousel images one at a time
     -->



<template>
    <section class="m-3">
        <div class="carousel flex justify-center relative gap-3 ">
            <transition name="fade">
                <img class="carousel-image" :src="images[prevImageIndex].src" :alt="images[prevImageIndex].alt" :key="prevImageIndex" />
            </transition>
            <transition name="fade">
                <img class="carousel-image" :src="images[currentImage].src" :alt="images[currentImage].alt" :key="currentImage" />
            </transition>
            <transition name="fade">
                <img class="carousel-image" :src="images[nextImageIndex].src" :alt="images[nextImageIndex].alt" :key="nextImageIndex" />
            </transition>
            <button class="absolute left-3 bottom-36" @click="move(-1)">
                <img class="-scale-x-90 max-h-20" src="/src/assets/images/icons/next-arrow.svg" alt="arrow pointing left">
            </button>
            <button class="absolute right-3 bottom-36" @click="move(1)">
                <img class="max-h-20" src="/src/assets/images/icons/next-arrow.svg" alt="arrow pointing left">
            </button>
        </div>
    </section>
</template>

<style scoped>
.carousel {
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel-image {
    height: 300px;
    width: auto;
    object-fit: cover;
    border-radius: 10px;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>

<script setup>
import { ref } from 'vue';
import { computed } from 'vue';

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

const currentImage = ref(0);

const prevImageIndex = computed(() => (currentImage.value - 1 + images.length) % images.length);
const nextImageIndex = computed(() => (currentImage.value + 1) % images.length);

const move = (direction) => {
  currentImage.value = (currentImage.value + direction + images.length) % images.length;
};

</script>