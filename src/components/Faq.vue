<template>
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <header class="mb-2">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold underline py-2">FAQs</h1>
            <p class="text-lg">Not finding the answer you're looking for? Feel free to <router-link class="text-blue-900 font-bold underline" to="/Contact">contact us</router-link></p>
        </header>
        <section role="contentinfo">
            <article v-for="faq in faqs">
                <h2 class="text-2xl text-red-600 font-bold">{{ faq.question }}</h2>
                <p class="indent-3">{{ faq.answer }}</p>
            </article>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const faqs = ref([]);

async function getFaqs() {
    const response = await fetch('https://boisetuxedoshop.azurewebsites.net/api/faq');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    faqs.value = await response.json();
}

onMounted(() => {
    getFaqs();
})
</script>