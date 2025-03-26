<template >
    <section class="w-full flex justify-center bg-slate-800 py-2 ">
        <input class="w-[66%] rounded p-2" type="search" v-model="searchQuery" placeholder="Search BTS">
        <div class="animate-button">
            <button class="p-1 mx-1 rounded text-white border-2 button-transition bg-black bg-opacity-40 text-xl">Search</button>
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