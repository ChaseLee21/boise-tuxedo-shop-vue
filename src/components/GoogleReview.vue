<template>
    <section class="xl:w-[80vw] flex flex-col m-auto">
        <article class="m-2 p-2 border-black border shadow-lg rounded" v-for="review in reviews" :key="review.id">
            <p class="text-red-600 text-xl md:text-2xl lg:text-3xl font-bold">{{ review.rating }} Stars, {{ review.relativePublishTimeDescription }}:</p>
            <p class="text-lg md:text-xl lg:text-2xl">{{ review.text.text }}</p>
        </article>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const reviews = ref([]);

onMounted(async () => {
    reviews.value = await setGoogleReviews();
});

async function setGoogleReviews() {
    if (localStorage.getItem('BTSReviews')) {
        return JSON.parse(localStorage.getItem('BTSReviews'));
    }
    else {
        return getGoogleReviews();
    }
}

async function getGoogleReviews() {
    try {
        const response = await fetch('https://www.boisetuxedoshop.com/api/Reviews');
        let reviewData = await response.json();
        reviewData = filterReviews(reviewData);
        localStorage.setItem('BTSReviews', JSON.stringify(reviewData));
        return reviewData;
    } catch (error) {
        console.error(error);
    }
}

function filterReviews(reviews) {
    return reviews.reviews.filter(review => review.rating > 3);
}
</script>