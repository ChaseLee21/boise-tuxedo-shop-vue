<template>
    <main>
        <ImageGallery :images = images />
    </main>
</template>
<script setup>
import ImageGallery from '../components/ImageGallery.vue';

// hardcoded images for development
// TODO: fetch images from api
const images = [
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Couple-Orange-Accessories-Navy-Suit-Tangerine-Dress.webp",
        alt: "Prom Couple Orange Accessories Navy Suit Tangerine Dress"
    },
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (2).webp",
        alt: "Young man in a silver black imperial paisley one button shawl tuxedo"
    },
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (3).webp",
        alt: "Prom goers wearing tuxedos with bow ties at the Boise Train Depot"
    },
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (4).webp",
        alt: "Three prom goers in tuxedos and dresses in front of the entrance to their prom venue"
    },
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (5).webp",
        alt: "Teenagers in tuxedos with bow ties and sunglasses posing for a photo at prom"
    },
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (6).webp",
        alt: "Young man in a navy suit and tie with a white shirt and black shoes posing by his car"
    }
]

</script>