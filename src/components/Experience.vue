<template>
    <header class="text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600">The Boise Tuxedo Shop Experience</h1>
        <ul class="flex flex-col text-center justify-center m-auto text-xl font-bold">
            <li>Over 4000 Tuxedo and Suit Styles in Stock</li>
            <li>No Appointment Necessary</li>
            <li>Guaranteed Best Prices In The Treasure Valley</li>
            <li>5 Star Customer Service</li>
        </ul>
    </header>
    <section class="flex flex-col my-2">
        <article v-for="experience in experiences" class="min-w-fit p-2 my-1 me-2 rounded-md snap-center relative">
            <figure class="relative text-white text-center">
                <h2 class="absolute top-3 inset-x-0 w-fit p-1 text-3xl lg:text-5xl font-bold rounded bg-opacity-60 m-auto bg-black">{{ experience.title }}</h2>
                <img :src="experience.image" :alt="experience.alt" class="m-auto min-w-full rounded-md" />
                <figcaption class="absolute bottom-8 inset-x-0 w-fit p-1 text-xl lg:text-2xl rounded bg-opacity-60 m-auto bg-black">{{ experience.text }}</figcaption>
            </figure>
            <a :href="experience.link" class="bg-slate-800 underline text-white rounded p-1 text-xl -bottom-2 absolute inset-x-2 text-center w-fit mx-auto"> {{ experience.linkText }} </a>
        </article>
    </section>
    
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
        title: 'Best Reviews in the Valley',
        text: 'Check out our reviews on Google!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        linkText: 'Our Reviews',
        link: 'https://www.boisetuxedoshop.com/Reviews'
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
        title: 'Prom Tuxedos',
        text: "We have an up to date selection of prom tuxedos and suits!",
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        linkText: 'Prom Info!',
        link: 'https://www.boisetuxedoshop.com/Prom'
    },
    {
        title: 'All Styles in Store',
        text: 'Unlike big retail stores, we carry all our styles in store for you to try on today!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        linkText: 'Our Selection',
        link: 'https://www.boisetuxedoshop.com/Category/TuxedoSuit'
    },
    {
        title: 'Same Day Rentals',
        text: 'We offer same day rentals for all your last minute needs! Questions? Contact us!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        linkText: 'Contact Us!',
        link: 'https://www.boisetuxedoshop.com/Contact'
    },
    {
        title: 'No Appointment Needed',
        text: 'We are open Monday - Saturday. No appointment required!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        linkText: 'Frequently Asked Questions',
        link: 'https://www.boisetuxedoshop.com/Faq'
    }
]


// <section class="bg-gray-800 text-white p-10   text-center">
//     <p class="text-3xl md:text-4xl lg:text-5xl font-bold">The Boise Tuxedo Shop Experience:</p>
//             <br class="line-through" />
//             <ul class="flex flex-row overflow-x-auto md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 ">
//                 <li class="bg-white border rounded m-2 p-4 md:row-span-1 md:hover:drop-shadow-xl" v-for="specialty in specialties" :key="specialty.id">
//                     <div class="w-52 md:w-auto ">
//                         <p class="text-red-600 text-xl md:text-2xl lg:text-3xl font-bold">{{ specialty.title }}</p>
//                         <br />
//                         <p class="text-black text-lg md:text-xl lg:text-2xl">{{ specialty.text }}</p>
//                     </div>
//                 </li>
//             </ul>
//     </section> 
</script>
