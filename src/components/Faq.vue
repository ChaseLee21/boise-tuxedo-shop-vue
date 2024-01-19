<template>
    <section>
        <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2 font-bold">FAQ</h2>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import jquery from 'jquery';

const $ = jquery;

const faq = ref([]);

function getFaq() {
    
}

onMounted(() => {
    getFaq();
})

</script>