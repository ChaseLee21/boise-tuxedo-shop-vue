<template>
    <header class="text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">The Boise Tuxedo Shop Experience</h1>
    </header>
    <section class="flex flex-row overflow-y-hidden overflow-scroll scroll-smooth snap-x snap-mandatory m-0 scroll-m-[1rem]">
        <article v-for="experience in experiences" class="min-w-full bg-slate-800 p-2 my-1 me-2 rounded-md snap-center">
            <figure class="relative text-white text-center">
                <h2 class="text-3xl lg:text-5xl font-bold absolute top-3 w-full">{{ experience.title }}</h2>
                <img :src="experience.image" :alt="experience.alt" class="m-auto min-w-full rounded-md" />
                <figcaption class="text-xl absolute bottom-3 w-full">{{ experience.text }}</figcaption>
            </figure>
        </article>
    </section>
    
</template>

<script setup>
let experiences = [
    {
        title: 'Local and Family Owned',
        text: 'Located on U-Stick and Eagle Road next to Kohls!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        link: 'https://www.boisetuxedoshop.com/#googleMaps'
    },
    {
        title: 'Rent or Purchase',
        text: 'We offer both rentals and purchases! View our products to see what we have in store!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        link: 'https://www.boisetuxedoshop.com/#googleMaps'
    },
    {
        title: 'Weddings',
        text: 'Out of town groomsmen, large or small weddings, we have you covered!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        link: 'https://www.boisetuxedoshop.com/#googleMaps'
    },
    {
        title: 'Prom Tuxedos',
        text: "We have an up to date selection of prom tuxedos and suits!",
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        link: 'https://www.boisetuxedoshop.com/#googleMaps'
    },
    {
        title: 'All Styles in Store',
        text: 'Unlike big retail stores, we carry all our styles in store for you to try on today!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        link: 'https://www.boisetuxedoshop.com/#googleMaps'
    },
    {
        title: 'Best Reviews in the Valley',
        text: 'Don\'t take our word for it, check out our reviews on Google and Facebook!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        link: 'https://www.boisetuxedoshop.com/#googleMaps'
    },
    {
        title: 'Same Day Rentals',
        text: 'We offer same day rentals for all your last minute needs!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        link: 'https://www.boisetuxedoshop.com/#googleMaps'
    },
    {
        title: 'No Appointment Needed',
        text: 'We are open Monday - Saturday. No appointment required!',
        image: 'https://www.placeholder.com/300x500',
        alt: 'placeholder',
        link: 'https://www.boisetuxedoshop.com/#googleMaps'
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
