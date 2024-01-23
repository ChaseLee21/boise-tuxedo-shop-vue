<template>
    <footer class="text-center flex flex-col justify-center">
        <hr class="border-2 my-4">
        <div class="flex flex-row flex-wrap justify-center">
            <SiteLinks />
            <Hours />
        </div>
        <div class="flex flex-col flex-wrap justify-center">
            <Location />
            <section class="mb-4">
                <p class="col-span-1 md:col-span-3">© 2023 Boise Tuxedo Shop. All rights reserved.</p>
                <ul class="flex flex-row justify-evenly">
                    <li class="underline"><router-link to="/Privacy">Privacy Policy</router-link></li>
                    <li class="underline"><router-link to="/Terms">Terms of Use</router-link></li>
                    <li class="underline"><router-link to="/Disclaimer">Disclaimer</router-link></li>
                </ul>
            </section>
        </div>
    </footer>
</template>
<script setup>
import Hours from './Hours.vue'
import Location from './Location.vue'
import SiteLinks from './SiteLinks.vue';
</script>