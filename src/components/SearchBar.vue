<template >
    <section class="w-full flex-col items-center content-center justify-center bg-slate-800 pt-2">
        <div class="flex justify-center">
            <input class="w-[66%] rounded rounded-b-none p-2" type="search" v-model="searchQuery" v-on:input="onInputChange()" placeholder="Search Boise Tuxedo shop">
            <!-- <div class="animate-button">
                <button class="p-1 me-1 rounded rounded-s-none text-white border-2 border-s-0 button-transition bg-black bg-opacity-40 text-xl">Search</button>
            </div> -->
        </div>
        <div class="fixed z-50 w-full">
            <ul class="flex-col w-[66%] shadow-md border justify-start m-auto bg-white p-2 rounded rounded-t-none">
                <div v-for="product in results">
                    <li>
                        <router-link :to="{ name: 'Product', params: {id: product.id } }">
                            {{product.name}}
                        </router-link>
                    </li>
                </div>
            </ul>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { getProducts } from '../utils/fetchApi';
import { RouterLink } from 'vue-router';

let searchQuery = ref("")
let products = ref([]);

onMounted(async () => {
    products.value = await getProducts();
})

function onInputChange() {
    console.log("results", results.value)
}

const results = computed(() => {
    if (searchQuery.value.length < 1) return null
    let arr = products.value.filter(product => product.name.toLowerCase().trim().includes(searchQuery.value.toLowerCase().trim()));
    while (arr.length > 5) {
        arr.pop();
    }
    return arr;
})

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