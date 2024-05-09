<template>
    <main class=" flex flex-col justify-around">
        <section class="sm:flex sm:flex-col md:h-full md:grid md:grid-flow-row md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:grid-cols-4 md:mx-auto mb-8">
            <article v-for="experience in experiences" class="min-w-fit p-2 my-1 me-2 rounded-md snap-center relative">
                <figure class="relative text-white text-center">
                    <h2 class="absolute top-3 inset-x-0 w-fit p-1 text-2xl font-bold rounded bg-opacity-60 m-auto bg-black">{{ experience.title }}</h2>
                    <v-lazy-image width="720" height="1200" :src="experience.image" :alt="experience.alt" class="m-auto min-w-full rounded-md" />
                    <figcaption class="absolute bottom-8 inset-x-0 w-fit p-1 text-xl rounded bg-opacity-60 m-auto bg-black">{{ experience.text }}</figcaption>
                </figure>
                <a :href="experience.link" class="bg-slate-800 underline text-white rounded p-1 text-xl -bottom-2 absolute inset-x-2 text-center w-fit mx-auto"> {{ experience.linkText }} </a>
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
