<template >
    <section class="w-full flex-col items-center content-center justify-center bg-slate-800 pt-2">
        <div class="flex justify-center">
            <input class="w-[66%] rounded rounded-b-none p-2" type="search" v-model="searchQuery" v-on:input="onInputChange()" placeholder="Search Boise Tuxedo shop">
        </div>
        <div v-if="showSearchResults" class="fixed z-50 w-full">
            <ul class="flex-col w-[66%] shadow-md border justify-start m-auto bg-white p-2 rounded rounded-t-none">
                <div  v-for="product in results">
                    <li @click="handleSearchResultsClick(product)">
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
const showSearchResults = ref(false);

onMounted(async () => {
    products.value = await getProducts();
})

// Search Results
const results = computed(() => {
    showSearchResults.value = true
    let resultsArr; 
    let query = searchQuery.value.toLowerCase().trim();
    let keywords = query.split(" ");
    if (query.length < 1) return null;
    resultsArr = products.value.filter(product => {
        return containsKeyword(product.name,keywords);
    });
    while (resultsArr.length > 8) {
        resultsArr.pop();
    }

    return resultsArr;
})

function containsKeyword(a, keywords) {
    a = a.toLowerCase().trim();
    for (let keyword of keywords) {
        console.log(keyword, a);
        if (!a.includes(keyword)) {
            return false;
        }
    }
    return true;
}

function onInputChange() {
    console.log("results", results.value)
}

function handleSearchResultsClick(product) {
    searchQuery.value = product.name;
    showSearchResults.value = false;
}
</script>

<!-- Styling -->
<style scoped>
.button-transition {
    transition: background .3s ease-in-out, color .3s ease-in-out;
}

.animate-button:hover .button-transition {
    background: #FFFFFFcc;
    color: #000;
}
</style>