<template>
    <header class="flex flex-col md:grid md:grid-cols-3">
        <section class="col-span-1 m-auto">
            <ul class="flex flex-col text-center justify-center m-auto text-xl font-bold">
                <li class="text-red-600">Over 4000 Tuxedo and Suit Styles in Stock</li>
                <li>5 Star Customer Service</li>
                <li>No Appointment Necessary</li>
                <li>Guaranteed Best Prices In The Treasure Valley</li>
            </ul>
        </section>
        <section class="md:col-span-1 flex flex-row justify-center">
            <img height="300px" width="252px" src="/Tuxedo-Shop-Logo-3.webp" alt="Logo including a top hat, part of a suit, and the words Boise Tuxedo Shop." >
        </section>
        <section v-if="!isMobile" class="md:col-span-1 m-auto">
            <div class="flex justify-center">
                <a class="p-2" href="https://www.facebook.com/boisetuxedoshop/" target="_blank" rel="noopener noreferrer">
                    <img width="32px" height="32px" src="/Facebook_Logo_Primary.webp" alt="Facebook" />
                </a>
                <a class="p-2" href="https://www.instagram.com/boisetuxedoshop/" target="_blank" rel="noopener noreferrer">
                    <img width="32px" height="32px" src="/Instagram_Glyph_Gradient.webp" alt="Instagram" />
                </a>
            </div>
        </section>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const isMobile = ref(window.innerWidth <= 768);
</script>