<template>
    <section class="mx-2 text-start md:text-center">
        <h2 class="text-start md:text-center text-2xl md:text-3xl lg:text-4xl font-bold">FAQ</h2>
        <ul class="flex flex-col ms-4 my-3" v-for="faq in faqs">
            <li class="text-2xl text-red-600 font-bold">Q: {{ faq.question }}</li>
            <li class="text-lg">A: {{ faq.answer }}</li>
        </ul>
        <p class="text-lg ms-4 my-3">Not finding the answer you're looking for? Feel free to <router-link class="text-blue-900 font-bold underline" to="/Contact">contact us</router-link></p>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import jquery from 'jquery';

const $ = jquery;

const faqs = ref([]);

async function getFaqs() {
    await $.ajax({
        url: 'https://boisetuxedoshop.azurewebsites.net/api/faq',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            for (let faq of data) {
                faq = formatFaq(faq);
            }
            faqs.value = data;
        }
    })
}

function formatFaq(faq) {
    faq.question = faq.question.trim();
    faq.answer = faq.answer.trim();
    faq.question = faq.question.charAt(0).toUpperCase() + faq.question.slice(1);
    if(faq.question.charAt(faq.question.length - 1) !== '?') {
        faq.question += '?';
    }
    return faq;
}

onMounted(() => {
    getFaqs();
})

</script>