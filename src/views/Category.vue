<template>
    <Header v-if="props.category === 'TuxedoSuit'" title="Tuxedos & Suits" />
    <Header v-else :title="props.category" />
    <main class="m-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">

        <section class="sm:flex sm:flex-col md:h-full md:grid md:grid-flow-row md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:grid-cols-4 md:mx-auto mb-8">
            <article v-for="product in filterProducts" class="min-w-fit my-5 mx-1 rounded-md snap-center relative">
                <router-link :to="{ name: 'Product', params: {id: product.id } }" class="hover:text-lg hover:ease-in-out hover:duration-500" >
                    <figure class="text-white text-center h-full">
                        <v-lazy-image width="480" height="800" :src="product.imageURL" :alt="product.imageAlt" class="m-auto h-full w-full rounded object-cover" />
                        <figcaption v-if="product.formattedName" class="absolute top-0 inset-x-0 w-full p-0.5 text-lg rounded-t bg-opacity-30 m-auto bg-black">{{ product.formattedName }}</figcaption>
                        <figcaption v-else class="absolute top-0 inset-x-0 w-full p-0.5 text-lg rounded-t bg-opacity-30 m-auto bg-black">{{ product.name }}</figcaption>
                        <figcaption class="absolute bottom-0 inset-x-0 w-full p-0.5 rounded-b bg-opacity-30 m-auto bg-black ">View Style Details</figcaption>
                    </figure>
                </router-link>
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
<script>
        // Old product card template
        // <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        //     <!-- Product Card -->
        //     <article class="flex flex-col justify-evenly bg-gray-800 text-white text-center font-bold m-4 px-3 shadow-lg shadow-black rounded items-center" v-for="product in filterProducts">
        //         <router-link class="w-full flex flex-col justify-center items-center" 
        //         :to="{ name: 'Product', params: {id: product.id } }">
        //             <p class="p-1 text-lg md:text-xl lg:text-2xl">{{ product.name }}</p>
        //             <img class="h-[40rem] max-h-[75vh] w-fit object-cover object-center rounded shadow shadow-black" :src="product.imageURL" :alt="product.imageAlt" >
        //         </router-link>

        //         <!-- Pricing -->
        //         <div v-if="product.retailPrice && !product.saleRetailPrice && !product.rentalPrice" class="">
        //             <p>Purchase Price: ${{ product.retailPrice }}</p>
        //         </div>
        //         <div v-if="product.retailPrice && product.saleRetailPrice && !product.rentalPrice" class="flex justify-between w-full px-2">
        //             <p>Purchase Price: <span class="line-through">${{ product.retailPrice }}</span></p>
        //             <p class="text-red-600">On Sale: ${{ product.saleRetailPrice }}</p>
        //         </div>
        //         <div v-if="product.retailPrice && !product.saleRetailPrice && product.rentalPrice" class="flex justify-between w-full px-2">
        //             <p>Purchase Price: ${{ product.retailPrice }}</p>
        //             <p>Rental Price: ${{ product.rentalPrice }}</p>
        //         </div>
        //         <div v-if="product.retailPrice && product.saleRetailPrice && product.rentalPrice" class="flex justify-between w-full px-2 text-center">
        //             <p>Purchase Price: <span class="line-through">${{ product.retailPrice }}</span></p>
        //             <p class="text-red-600">On Sale: ${{ product.saleRetailPrice }}</p>
        //             <p >Rental Price: ${{ product.rentalPrice }}</p>
        //         </div>
        //         <div v-if="product.rentalPrice && !product.retailPrice && !product.saleRetailPrice">
        //             <p>Rental Price: ${{ product.rentalPrice }}</p>
        //         </div>
        //     </article>
        // </section>
</script>