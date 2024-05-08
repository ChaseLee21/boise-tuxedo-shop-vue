<template>
    <div class="min-h-screen">
        <header class="text-center mt-5">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600">The Boise Tuxedo Shop Experience</h1>
            <ul class="flex flex-col text-center justify-center m-auto text-xl font-bold">
                <li>Over 4000 Tuxedo and Suit Styles in Stock</li>
                <li>No Appointment Necessary</li>
                <li>Guaranteed Best Prices In The Treasure Valley</li>
                <li>5 Star Customer Service</li>
            </ul>
        </header>
        <section class="flex flex-col md:grid md:grid-flow-row md:grid-cols-2 md:w-[90%] lg:w-[80%] lg:grid-cols-4 md:mx-auto mb-8">
            <article v-for="experience in experiences" class="min-w-fit p-2 my-1 me-2 rounded-md snap-center relative">
                <figure class="relative text-white text-center">
                    <h2 class="absolute top-3 inset-x-0 w-fit p-1 text-3xl font-bold rounded bg-opacity-60 m-auto bg-black">{{ experience.title }}</h2>
                    <img :src="experience.image" :alt="experience.alt" class="m-auto min-w-full rounded-md" />
                    <figcaption class="absolute bottom-8 inset-x-0 w-fit p-1 text-xl rounded bg-opacity-60 m-auto bg-black">{{ experience.text }}</figcaption>
                </figure>
                <a :href="experience.link" class="bg-slate-800 underline text-white rounded p-1 text-xl -bottom-2 absolute inset-x-2 text-center w-fit mx-auto"> {{ experience.linkText }} </a>
            </article>
        </section>
    </div>
</template>

<script setup>
let experiences = [
    {
        title: 'Rent or Purchase',
        text: 'Rent your style or make it your own with our large selection of suits and tuxedos!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        linkText: 'Rent or Buy!',
        link: 'https://www.boisetuxedoshop.com/RentOrBuy'
    },
    {
        title: 'Local and Family Owned',
        text: 'Located on U-Stick and Eagle Road next to Kohls!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        linkText: 'Our Location',
        link: '#googleMaps'
    },
    {
        title: 'Weddings',
        text: 'Out of town groomsmen, large or small weddings, we have you covered!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        linkText: 'Image Gallery',
        link: 'https://www.boisetuxedoshop.com/Gallery'
    },
    {
        title: 'Best Reviews in the Valley',
        text: 'Check out our reviews on Google!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        linkText: 'Our Reviews',
        link: 'https://www.boisetuxedoshop.com/Reviews'
    },
]
</script>
