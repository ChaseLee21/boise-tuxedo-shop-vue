<template >
    <section class="w-full flex justify-center bg-slate-800 pt-2">
        <input class="w-[66%] rounded rounded-e-none p-2" type="search" v-model="searchQuery" placeholder="Search Boise Tuxedo shop">
        <div class="animate-button">
            <button class="p-1 me-1 rounded rounded-s-none text-white border-2 border-s-0 button-transition bg-black bg-opacity-40 text-xl">Search</button>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

let searchQuery = ref("")
//TODO: implement a search bar
//this will search the products array for a match and when clicked will route to the product page
</script>

<style scoped>

.button-transition {
    transition: background .3s ease-in-out, color .3s ease-in-out;
}

.animate-button:hover .button-transition {
    background: #FFFFFFcc;
    color: #000;
}


</style>