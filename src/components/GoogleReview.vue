<template>
    <section class="bg-gray-800 text-white p-10   text-center">
            <p class="text-3xl md:text-4xl lg:text-5xl font-bold">The Boise Tuxedo Shop Experience:</p>
            <br class="line-through" />
            <ul class="flex flex-row overflow-x-auto md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 ">
                <li class="bg-white border rounded m-2 p-4 md:row-span-1 md:hover:drop-shadow-xl" v-for="review in reviews" :key="review.id">
                    <div class="w-52 md:w-auto ">
                        <p class="text-red-600 text-xl md:text-2xl lg:text-3xl font-bold">{{ review.rating }} Stars, {{ review.relativePublishTimeDescription }}:</p>
                        <br />
                        <p class="text-black text-lg md:text-xl lg:text-2xl">{{ review.text.text }}</p>
                    </div>
                </li>
            </ul>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const reviews = ref([]);

onMounted(async () => {
    await getGoogleReviews();
    console.log(reviews.value);
});

async function getGoogleReviews() {
    if (localStorage.getItem('BTSReviews')) {
        reviews.value = JSON.parse(localStorage.getItem('BTSReviews'));
    }
    else {
        try {
            const response = await fetch('https://www.boisetuxedoshop.com/api/Reviews');
            let reviewData = await response.json();
            reviews.value = filterReviews(reviewData);
            localStorage.setItem('BTSReviews', JSON.stringify(reviews.value));
        } catch (error) {
            console.error(error);
        }
    }
}

function filterReviews(reviews) {
    return reviews.reviews.filter(review => review.rating > 3);
}
</script>