<template>
    <section class="bg-gray-800 text-white p-10   text-center">
            <p class="text-3xl md:text-4xl lg:text-5xl font-bold">The Boise Tuxedo Shop Experience:</p>
            <br class="line-through" />
            <ul class="flex flex-row overflow-x-auto md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 ">
                <li class="bg-white border rounded m-2 p-4 md:row-span-1 md:hover:drop-shadow-xl" v-for="review in reviews" :key="review.id">
                    <div class="w-52 md:w-auto ">
                        <p class="text-red-600 text-xl md:text-2xl lg:text-3xl font-bold">{{ review.title }}</p>
                        <br />
                        <p class="text-black text-lg md:text-xl lg:text-2xl">{{ review.text }}</p>
                    </div>
                </li>
            </ul>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

let reviews = ref([]);

onMounted(() => {
    getGoogleReviews();
});

async function getGoogleReviews() {
    const response = await fetch('https://mybusiness.googleapis.com/v4/accounts/11436801876118760229/locations/EjIzMzcxIE4gRWFnbGUgUmQgc3VpdGUgMTMwLCBNZXJpZGlhbiwgSUQgODM2NDYsIFVTQSIlGiMKFgoUChIJjfN2bltUrlQR1GDA_ZtG0-4SCXN1aXRlIDEzMA/reviews');
    const data = await response.json();
    reviews.value = data.reviews;
}

// let reviews = [
//     {
//         title: 'Local and Family Owned',
//         text: 'Located on U-Stick and Eagle Road next to Kohls!'
//     },
//     {
//         title: 'Weddings',
//         text: 'Out of town groomsmen, large or small weddings, we have you covered!'
//     },
//     {
//         title: 'Prom Tuxedos',
//         text: "We have an up to date selection of prom tuxedos and suits!"
//     },
//     {
//         title: 'All Styles in Store',
//         text: 'Unlike big retail stores, we carry all our styles in store for you to try on today!'
//     },
//     {
//         title: 'Best Reviews in the Valley',
//         text: 'Don\'t take our word for it, check out our reviews on Google and Facebook!'
//     },
//     {
//         title: 'Same Day Rentals',
//         text: 'We offer same day rentals for all your last minute needs!'
//     },
//     {
//         title: 'Rent or Purchase',
//         text: 'We offer both rentals and purchases! View our products to see what we have in store!'
//     },
//     {
//         title: 'No Appointment Needed',
//         text: 'We are open Monday - Saturday. No appointment required!'
//     }
// ]
</script>