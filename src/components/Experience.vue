<template>
    <main class="flex flex-col justify-around">
        <section class="sm:flex sm:flex-col md:h-full md:grid md:grid-flow-row md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:grid-cols-4 md:mx-auto">
            <article v-for="experience in experiences" class="min-w-fit m-2 relative">
                <a :href="experience.link" >
                    <figure class="relative text-white text-center bg-black overflow-hidden animate-image animate-button rounded">
                        <v-lazy-image width="720" height="1200" :src="experience.image" :alt="experience.alt" class="m-auto min-w-full opacity-70 zoom-image-transition" />
                        <h2 class="absolute top-3 inset-x-0 w-fit p-1 text-4xl font-bold m-auto">{{ experience.title }}</h2>
                        <figcaption class="absolute bottom-8 inset-x-0 w-fit p-1 text-2xl m-auto">{{ experience.text }}</figcaption>
                        <button class="absolute top-3/4 right-1/2 translate-x-1/2 text-2xl button-text py-1 px-2 border-2 button-transition">Learn More</button>
                    </figure>
                </a>
            </article>
        </section>
    </main>
</template>

<script setup>
import VLazyImage from 'v-lazy-image';

let experiences = [
    {
        title: 'Rent or Purchase',
        text: 'Rent your style or make it your own with our large selection of suits and tuxedos!',
        image: 'https://btsimagestorage.blob.core.windows.net/product-images/921_burgundy_floral_tie-19.webp',
        alt: 'Young couple dress in all black formal attire with burgundy floral accessories ready for prom',
        linkText: 'Rent or Buy',
        link: 'https://www.boisetuxedoshop.com/RentOrBuy'
    },
    {
        title: 'Weddings',
        text: 'Out of town groomsmen, large or small weddings, we have you covered!',
        image: 'https://btsimagestorage.blob.core.windows.net/product-images/boise-tuxedo-shop-weddings-suits-groom-rental (1).webp',
        alt: 'Groom and bride together with groom in a tan wedding suit and bride in a white wedding dress with flowers',
        linkText: 'Tuxedos and Suits',
        link: 'https://www.boisetuxedoshop.com/Category/TuxedoSuit'
    },
    {
        title: 'Local and Family Owned',
        text: 'Located on U-Stick and Eagle Road next to Kohls!',
        image: 'https://btsimagestorage.blob.core.windows.net/product-images/groom-bride-wedding-tuxedo-black-bow-tie.webp',
        alt: 'Groom and bride together with groom in a traditional black tuxedo with black bow tie and bride in a white wedding dress',
        linkText: 'Google Maps',
        link: '#googleMaps'
    },
    {
        title: 'Best Reviews in the Valley',
        text: 'Check out our reviews on Google!',
        image: 'https://btsimagestorage.blob.core.windows.net/product-images/Burgundy-Shawl-Tuxedo-Black-Accents-Photo-1.webp',
        alt: 'Man dressing in a burgundy shawl tuxedo with black accents and black bow tie in front of a dark background',
        linkText: 'Google Reviews',
        link: 'https://www.boisetuxedoshop.com/Reviews'
    },
]
</script>

<style scoped>
.zoom-image-transition {
    transition: transform .3s ease-in-out, text-decoration .3s ease-in-out;
}


.animate-image:hover .zoom-image-transition {
    transform: scale(1.1);
}

.button-transition {
    transition: background .3s ease-in-out, color .3s ease-in-out;
}

.animate-button:hover .button-transition {
    background: #FFFFFFcc;
    color: #000;
}


</style>