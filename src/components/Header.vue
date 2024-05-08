<template>
    <header class="flex flex-col md:grid md:grid-cols-3">
        <section class="md:col-span-1 flex flex-row justify-center">
            <img height="200px" width="168px" src="/Tuxedo-Shop-Logo-3.webp" alt="Logo including a top hat, part of a suit, and the words Boise Tuxedo Shop." >
        </section>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const isMobile = ref(window.innerWidth <= 768);
</script>