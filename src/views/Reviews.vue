<template>
    <Header :title="headerProps.title" :content="headerProps.content" :externalLinks="headerProps.externalLinks" />
    <main class="xl:w-[80vw] m-auto">
        <GoogleReview />
    </main>
</template>
<script setup>
import GoogleReview from '../components/GoogleReview.vue';
import Header from '../components/Header.vue';

const headerProps = {
    title: 'Our Google Reviews',
    content: `Boise Tuxedo Shop is a small and family run local business.
    We value our communities feedback and are proud to share our Google reviews with you.
    Below are a few reviews that Google says are most helpful to our customers.
    To view all of our reviews or to leave a reivew, please visit the Boise Tuxedo Shop Google page.`,
    externalLinks: [
        { url: 'https://g.page/r/CQcdOo3hCsSIEB0/review', text: 'Google Reviews' }
    ]
}
</script>