<template>
    <Header :title = headerProps.title :content = headerProps.content />
    <main  class="m-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <FeaturedProducts :products = tuxedoAndSuitProducts :title = tuxedoAndSuit.title :route = tuxedoAndSuit.route />
        <FeaturedProducts :products = shirtProducts :title = shirts.title :route = shirts.route />
        <FeaturedProducts :products = pantProducts :title = pants.title :route = pants.route />
    </main>
</template>

<script setup>
import FeaturedProducts from '../components/FeaturedProducts.vue';
import { computed, onMounted, ref } from 'vue';
import Header from '../components/Header.vue';

const tuxedoAndSuit = {
    title: "Tuxedos & Suits",
    route: "TuxedoSuit"
} 

const shirts = {
    title: "Shirts",
    route: "Shirts"
}

const pants = {
    title: "Pants",
    route: "Pants"
} 

const headerProps = {
    title: "Rent or Buy",
    content: "Not only do we value helping you look good for your big event but we think it is important to do it your way. Whether you are wanting to rent or buy your outfit, we have you covered at Boise Tuxedo Shop. Our rental package for both tuxedos and suits includes 5 pieces: jacket, pants, shirt, vest, and your choice of tie, bowtie, or suspenders. You may upgrade your rental package to include shoes or cufflinks for an additional fee."
}

const products = ref([]);

onMounted(() => {
    getProducts();
})

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

const tuxedoAndSuitProducts = computed(() => {
    let arr = products.value.filter(product => product.type === "TuxedoSuit");
    while (arr.length > 4) {
        arr.pop();
    }
    return arr;
})

const shirtProducts = computed(() => {
    let arr = products.value.filter(product => product.type === "Shirts");
    while (arr.length > 4) {
        arr.pop();
    }
    return arr;
})

const pantProducts = computed(() => {
    let arr = products.value.filter(product => product.type === "Pants");
    while (arr.length > 4) {
        arr.pop();
    }
    return arr;
})

// TODO: implement a featured products method
// for this to work I would need to update the database to include a featured column
// if the featured column is true then the product would be displayed on the RentOrBuy page
// if the featured column is false then the product would not be displayed on the RentOrBuy page but instead on the category page
// HACK: for now I am just limiting the number of products displayed on the RentOrBuy page in the computed property
</script>