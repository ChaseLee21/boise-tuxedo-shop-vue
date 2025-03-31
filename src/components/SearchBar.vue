<template >
    <section class="w-full flex-col items-center content-center justify-center bg-slate-800 pt-2">
        <div class="flex justify-center">
            <input class="w-[66%] rounded rounded-b-none p-2" type="search" v-model="searchQuery" @focus="handleSearchBarFocus()" @blur="handleSearchBarBlur()" placeholder="Search Boise Tuxedo shop">
        </div>
        <div v-if="showSearchResults" class="fixed z-50 w-full">
            <ul class="flex-col w-[66%] shadow-md border justify-start m-auto bg-white p-2 rounded rounded-t-none overflow-y-scroll max-h-[75vh]">
                <div v-for="product in results">
                    <li class="hover:bg-zinc-300 text-black" @click="handleSearchResultsClick(product)">
                        <router-link :to="{ name: 'Product', params: {id: product.id } }">
                            <figure class="flex items-center rounded-md">
                                <v-lazy-image width="96" height="160" :src="product.imageURL" :alt="product.imageAlt" class="object-cover max-h-[160px] w-24 aspect-[3/5]" />
                                <figcaption class="text-lg mx-2">
                                    <p>{{ product.name }}</p>
                                </figcaption>
                            </figure>
                        </router-link>
                    </li>
                </div>
            </ul>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { getProducts } from '../utils/fetchApi';
import { RouterLink } from 'vue-router';
import VLazyImage from 'v-lazy-image';


let searchQuery = ref("")
let products = ref([]);
const showSearchResults = ref(false);
const results = ref([]);

onMounted(async () => {
    products.value = await getProducts();
});

// Watch searchQuery and update results
watch(searchQuery, (newQuery) => {
    const query = newQuery.toLowerCase().trim();
    const keywords = query.split(" ");
    if (query.length < 1) {
        results.value = [];
        showSearchResults.value = false;
        return;
    }

    let resultsArr = products.value.filter(product => {
        return containsKeyword(product.name, keywords);
    });

    results.value = resultsArr;
    showSearchResults.value = results.value.length > 0;
})

function containsKeyword(a, keywords) {
    a = a.toLowerCase().trim();
    for (let keyword of keywords) {
        if (!a.includes(keyword)) {
            return false;
        }
    }
    return true;
}

function handleSearchBarFocus() {
    showSearchResults.value = true;
}

async function handleSearchBarBlur() {
    await new Promise(resolve => setTimeout(resolve, 250));
    showSearchResults.value = false;
}

function handleSearchResultsClick(product) {
    searchQuery.value = product.name;
    showSearchResults.value = false;
}
</script>