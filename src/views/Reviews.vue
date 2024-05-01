<template>
    <main class="xl:w-[80vw] m-auto">
        <header class="my-3 xl:flex xl:flex-col xl:m-auto">
        <h1 class="my-2 text-start text-2xl md:text-3xl lg:text-4xl mx-2 font-bold underline" >Our Google Reviews</h1>
        <p class="text-start md:text-lg lg:text-xl ms-5 my-2">
            Boise Tuxedo Shop is a small and family run local business.
            We value our communities feedback and are proud to share our Google reviews with you.
            Below are a few reviews that Google says are most helpful to our customers.
            To view all of our reviews or to leave a reivew, please visit the 
            <a class="text-blue-700 underline" href="https://www.google.com/search?q=Boise+Tuxedo+Shop" target="_blank" rel="noopener noreferrer">Boise Tuxedo Shop Google page</a>.
        </p>
        </header>
        <GoogleReview />
    </main>
</template>
<script setup>
import GoogleReview from '../components/GoogleReview.vue';
</script>