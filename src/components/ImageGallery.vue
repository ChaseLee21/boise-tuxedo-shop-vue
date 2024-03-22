<template>
    <!-- Container  -->
    <section class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <!-- Category Title -->
        <header class="flex flex-row justify-start items-end mx-3">
            <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2 ">{{props.title}}</h2> 
        </header>
        <!-- Product Container -->
        <article ref="productContainer" class="flex flex-row flex-wrap justify-center items-center mx-2">
            <!-- Product Images -->
            <div v-for="(product, index) in products" :key="index" class="flex-shrink-0 min-w-fit w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 p-2 rounded-md bg-slate-800">
                <img :src="product.url" :alt="product.alt" class="w-full h-auto rounded-md" />
            </div>
        </article>

    </section>
</template>

<style scoped>
</style>

<script setup>
import { ref, onMounted } from 'vue';

let isMobile = ref(window.innerWidth < 768);

const props = defineProps({
    title: {
        type: String,
        required: true
    },
})

const products = [
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Couple-Orange-Accessories-Navy-Suit-Tangerine-Dress.webp",
        alt: "Prom Couple Orange Accessories Navy Suit Tangerine Dress"
    },
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (2).webp",
        alt: "Young man in a silver black imperial paisley one button shawl tuxedo"
    },
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (3).webp",
        alt: "Prom goers wearing tuxedos with bow ties at the Boise Train Depot"
    },
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (4).webp",
        alt: "Three prom goers in tuxedos and dresses in front of the entrance to their prom venue"
    },
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (5).webp",
        alt: "Teenagers in tuxedos with bow ties and sunglasses posing for a photo at prom"
    },
    {
        url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (6).webp",
        alt: "Young man in a navy suit and tie with a white shirt and black shoes posing by his car"
    }
]

const productContainer = ref(null);

const scroll = (direction) => {
    const container = productContainer.value;
    const scrollAmount = direction * container.children[2].clientWidth;
    container.scrollLeft += scrollAmount;
    console.log(container.children[2].clientWidth);
}

</script>