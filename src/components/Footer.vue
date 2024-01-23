<template>
    <footer class="grid grid-cols-1 md:grid-cols-3 text-center p-5">
        <section>
            <ul class="col-span-1 p-2">
                <li><p class="font-bold">Site Links</p></li>
                <li><a href="index.html" class="hover:text-red-400 transition ease-in-out duration-300">Home</a></li>
                <li><a href="views/rent-or-buy.html" class="hover:text-red-400 transition ease-in-out duration-300">Rent or Buy</a></li>
                <li><a href="contact.html" class="hover:text-red-400 transition ease-in-out duration-300">Contact</a></li>            
            </ul>
        </section>
        <Hours />
        <section>
            <ul class="col-span-1 p-2">
                <li><p class="font-bold">Our Location</p></li>
                <li class="font-bold">
                    3371 N. Eagle Road Suite C130
                    Meridian, ID 83646
                </li>
                <li><button class="bg-red-700 text-white p-2 rounded hover:bg-red-900 transition ease-in-out duration-300">(208)375-9616</button></li>
            </ul>
        </section>
        <section>
            <p class="col-span-1 md:col-span-3">© 2023 Boise Tuxedo Shop. All rights reserved.</p>
            <ul class="flex flex-row justify-evenly">
                <li class="underline"><router-link to="/Privacy">Privacy Policy</router-link></li>
                <li class="underline"><router-link to="/Terms">Terms of Use</router-link></li>
                <li class="underline"><router-link to="/Disclaimer">Disclaimer</router-link></li>
            </ul>
        </section>
    </footer>
</template>
<script setup>
import Hours from './Hours.vue'
//TODO: fix routes that do not use router-link 
</script>