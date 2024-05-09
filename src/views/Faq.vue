<template>
    <Header :title = "headerProps.title" :content = "headerProps.content" :links = "headerProps.links" />
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
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
import Header from '../components/Header.vue';

const headerProps = {
    title: `Frequently Asked Questions`,
    content: `If you have a question that is not answered here, please feel free to contact us! If you are looking for questions specific to prom, please visit our prom page linked below.`,
    links: [
        { url: '/Contact', text: 'Contact Us'},
        { url: '/Prom', text: 'Prom' }
    ]
}

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