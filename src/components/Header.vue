<template>
    <header class="flex flex-col md:grid md:grid-cols-3">
        <section class="col-span-1 m-auto">
            <ul class="flex flex-col text-center justify-center m-auto text-xl font-bold">
                <li class="text-red-600">Over 4000 Tuxedo and Suit Styles in Stock</li>
                <li>Open till 7 During Prom</li>
                <li>5 Star Customer Service</li>
                <li>No Appointment Necessary</li>
                <li>Guaranteed Best Prices In The Treasure Valley</li>
            </ul>
        </section>
        <section class="md:col-span-1 flex flex-row justify-center">
            <img height="300px" width="252px" src="/src/assets/images/Tuxedo-Shop-Logo-3.webp" alt="Logo including a top hat, part of a suit, and the words Boise Tuxedo Shop." >
        </section>
        <section class="md:col-span-1 m-auto">
            <div class="flex justify-center">
                <a class="p-2" href="https://www.facebook.com/boisetuxedoshop/" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon class="icon" :icon="['fab', 'facebook']" size="2xl" />
                </a>
                <a class="p-2" href="https://www.instagram.com/boisetuxedoshop/" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon class="icon" :icon="['fab', 'instagram']" size="2xl" />
                </a>
            </div>
        </section>
    </header>
</template>

<script setup>
</script>