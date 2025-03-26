<template >
    <section class="sticky top-0 w-full">
        <div class="bg-slate-800 ">
            <input type="search" v-model="searchQuery" placeholder="Search BTS">
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

let searchQuery = ref("")
//TODO: implement a search bar
//this will search the products array for a match and when clicked will route to the product page
</script>