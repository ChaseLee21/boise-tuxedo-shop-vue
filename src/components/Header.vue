<template>
    <header class="flex flex-col md:grid md:grid-cols-3">
        <section class="col-span-1 m-auto">
            <ul class="flex flex-col text-center justify-center m-auto text-lg font-bold">
                <li class="text-red-600">All Tuxedos and Suits in Stock</li>
                <li>5 Star Customer Services</li>
                <li>No Appointment Necessary</li>
                <li>Its Never too Late to Shop for your Prom or Wedding Attire</li>
            </ul>
        </section>
        <section class="md:col-span-1 flex flex-row justify-center">
            <img src="/src/assets/images/Tuxedo-Shop-Logo-3.jpg" alt="Logo including a top hat, part of a suit, and the words Boise Tuxedo Shop." >
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