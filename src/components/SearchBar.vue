<template >
    <section class="w-full flex-col items-center content-center justify-center bg-slate-800 pt-2">
        <div class="flex justify-center">
            <input class="w-[66%] rounded rounded-b-none p-2" type="search" v-model="searchQuery" @focus="handleSearchBarFocus()" @blur="handleSearchBarBlur()" placeholder="Search Boise Tuxedo shop">
        </div>
        <div v-if="showSearchResults" class="fixed z-50 w-full">
            <ul class="flex-col w-[66%] shadow-md border justify-start m-auto bg-white p-2 rounded rounded-t-none overflow-y-scroll max-h-[75vh]">
                <div v-for="category in categoryResults">
                    <li class="hover:bg-zinc-300 text-black p-1 rounded" @click="handleSearchResultsClick(category)">
                        <router-link :to="category.link">
                            <p>{{ category.name }}</p>
                        </router-link>
                    </li>
                </div>
                <div v-for="product in results">
                    <li class="hover:bg-zinc-300 text-black p-1 rounded" @click="handleSearchResultsClick(product)">
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
                <div v-if="showNoResults">
                    <li class="text-black p-1 rounded">
                        <p>No results found</p>
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
let showNoResults = ref(false);
const results = ref([]);
const categoryResults = ref([]);
const categories = [
    {name: 'Browse Tuxedos and Suits', link: "/Category/TuxedoSuit", tags: ["tux", "tuxedo", "tuxedos", "suit", "suits", "men", "mens", "buy"]},
    {name: 'Browse Shirts', link: "/Category/Shirts", tags: ["shirt", "shirts"]},
    {name: 'Browse Pants', link: "/Category/Pants", tags: ["pant", "pants", "slack", "slacks"]},
    {name: 'Browse Accessories', link: "/Accessories", tags: ["tie", "ties", "bowtie", "accessory", "accessories", "suspenders", "pocket", "handkerchief", "hanky", "bow", "self", "neck", "cufflinks", "neckwear", "clip"]},
]

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
        return strContainsKeyword(product.name, keywords);
    });
    let categoryResultsArr = categories.filter(category => {
        return arrContainsKeyword(category.tags, keywords);
    });

    results.value = resultsArr;
    categoryResults.value = categoryResultsArr;
    if (results.value.length > 0 || categoryResults.value.length > 0) {
        showNoResults = false;
        showSearchResults.value = true;
    } else {
        showNoResults = true;
    }
})

function strContainsKeyword(str, keywords) {
    str = str.toLowerCase().trim();
    for (let keyword of keywords) {
        if (!str.includes(keyword)) {
            return false;
        }
    }
    return true;
}

function arrContainsKeyword(tags, keywords) {
    for (let keyword of keywords) {
        if (tags.find((tag) => tag.includes(keyword))) {
            return true;
        }
    }
    return false;
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