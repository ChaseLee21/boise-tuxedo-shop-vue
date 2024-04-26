<template>
    <main>
        <header class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
            <h1 class="my-2 text-start text-2xl md:text-3xl lg:text-4xl mx-2 font-bold underline" >Image Gallery</h1>
            <p class="text-start md:text-lg lg:text-xl ms-5 my-2">
                Boise Tuxedo Shop is committed to giving our best effort to the Treasure Valley community. 
                Below are some images that have been submitted to us from the amazing people we help look their best on their big day. 
                If you have images of your own you would like to share with us to display on here or social media please send them to us via email at
                <a class="text-blue-900 font-bold underline" href="mailto:boisetuxedoshop@gmail.com" target="_blank">boisetuxedoshop@gmail.com</a> 
            </p>
        </header>
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