<template>
    <Header v-if="props.category === 'TuxedoSuit'" title="Tuxedos & Suits" />
    <Header v-else :title="props.category" />
    <main class="m-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">

        <section class="flex flex-wrap justify-center justify-items-center my-4">
            <!-- Product Card -->
            <article v-for="product in filterProducts" class="relative basis-80 mx-1">
                <div class="grid grid-flow-row grid-rows-6">
                    <!-- Clickable Area -->
                    <router-link :to="{ name: 'Product', params: {id: product.id } }" class="hover:text-lg hover:ease-in-out hover:duration-500 row-span-5" >
                        <!-- Product Image -->
                        <figure class="relative text-white text-center overflow-hidden animate-image animate-button rounded-md">
                            <v-lazy-image width="480" height="800" :src="product.imageURL" :alt="product.imageAlt" class="object-cover zoom-image-transition max-h-[800px] w-full aspect-[3/5]" />
                            <button class="absolute bottom-6 right-1/2 translate-x-1/2 text-xl button-text py-1 px-2 border-2 button-transition bg-opacity-40 m-auto bg-black">View Details</button>
                        </figure>
                    </router-link>
                    <!-- Product Title -->
                    <p v-if="product.formattedName" class="flex-row text-center text-2xl m-1 pb-3 row-span-1">{{ product.formattedName }}</p>
                </div>
            </article>
        </section>
    </main>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import Header from '../components/Header.vue';
import vLazyImage from 'v-lazy-image';

const props = defineProps({
    category: {
        type: String,
        required: true
    }
})

const isMobile = ref(window.innerWidth < 768);
const products = ref([]);

onMounted(() => {
    getProducts();
})

const filterProducts = computed(() => { 
    if (products.length === 0) return;
    let sortedProducts = [], black = [], blue = [], tan = [], ltgrey = [], grey = [], dkgrey = [], burgundy = [], other = [];
    for (let product of products.value) {
        if (product.type === props.category) {
            if (product.name.includes('Black')) {
                black.push(product);
            } else if (product.name.includes('Blue') || product.name.includes('Indigo') || product.name.includes('Navy')) {
                blue.push(product);
            } else if (product.name.includes('Tan') || product.name.includes('Sand') || product.name.includes('Beige') || product.name.includes('Camel') || product.name.includes('Cocoa')) {
                tan.push(product);
            } else if (product.name.includes('Dark Grey') || product.name.includes('Charcoal') || product.name.includes('Graphite')) {
                dkgrey.push(product);
            } else if (product.name.includes('Light Grey') || product.name.includes('Heather')) {
                ltgrey.push(product);
            } else if (product.name.includes('Medium Grey') || product.name.includes('Gray') || product.name.includes('Grey')) {
                grey.push(product);
            }  else if (product.name.includes('Burgundy')) {
                burgundy.push(product);
            } else {
                other.push(product);
            }
        }
    }
    sortedProducts = [...black, ...dkgrey, ...grey, ...ltgrey, ...blue, ...tan, ...burgundy, ...other]
    return sortedProducts;
});

function formatProductName(tuxedoSuitName) {
    let [firstPart, secondPart] = tuxedoSuitName.split('(');
    if (secondPart) {
        [tuxedoSuitName] = secondPart.split(')');
        tuxedoSuitName = 'The ' + tuxedoSuitName;
    } else {
        tuxedoSuitName = '';
    }
    return tuxedoSuitName;
}

async function getProducts() {
    const reponse = await fetch('https://boisetuxedoshop.azurewebsites.net/api/products');
    const data = await reponse.json();
    for (let product of data) {
        if (product.type === 'TuxedoSuit') {
            product.formattedName = formatProductName(product.name);
        }
        if (product.keyFeatures) {
            product.keyFeatures = product.keyFeatures.split(',');
        }
    }
    products.value = data;
}
</script>

<style scoped>
.zoom-image-transition {
    transition: transform .3s ease-in-out;
}


.animate-image:hover .zoom-image-transition {
    transform: scale(1.1);
}

.button-transition {
    transition: background .3s ease-in-out, color .3s ease-in-out;
}

.animate-button:hover .button-transition {
    background: #FFFFFFcc;
    color: #000;
}


</style>