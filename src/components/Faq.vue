<template>
    <section class="mx-2">
        <h2 class="text-start text-2xl md:text-3xl lg:text-4xl font-bold">FAQ</h2>
        <ul class="flex flex-col ms-4 my-3" v-for="faq in faqs">
            <li class="text-2xl text-red-600 font-bold">Q: {{ faq.question }}</li>
            <li class="text-lg">A: {{ faq.answer }}</li>
        </ul>
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
            faqs.value = data;
        }
    })
}

onMounted(() => {
    getFaqs();
})

</script>