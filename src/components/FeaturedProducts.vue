<template>
    <!-- Container  -->
    <section class="border-t-2 mb-4">
        <!-- Category Title -->
        <header class="flex flex-row justify-center items-end m-3">
            <h2 class="text-start text-3xl lg:text-4xl xl:text-5x font-bold mt-4">{{props.title}}</h2> 
            <router-link class="text-xl text-black bg-white py-1 px-2 border-2 border-black bg-opacity-40 mx-4 hover:bg-black hover:bg-opacity-30 hover:border-opacity-30 hover:text-white hover:ease-in-out hover:transition-all hover:duration-300 duration-300" :to="{ name: 'Category', params: {category : props.route } }">View More {{props.title}}</router-link>
        </header>
        <!-- Product Container -->
        <section class="flex flex-wrap justify-center justify-items-center my-4">
            <!-- Product Card -->
            <article v-for="product in props.products" class="relative basis-80 mx-1">
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
                    <p v-if="product.formattedName" class="flex-row text-center text-2xl m-1 row-span-1">{{ product.formattedName }}</p>
                </div>
            </article>
        </section>
        <footer class="mx-auto text-center mb-4">
            <router-link class="text-xl text-black bg-white py-1 px-2 border-2 border-black bg-opacity-40 mx-4 hover:bg-black hover:bg-opacity-30 hover:border-opacity-30 hover:text-white hover:ease-in-out hover:transition-all hover:duration-300 duration-300" :to="{ name: 'Category', params: {category : props.route } }">View More {{props.title}}</router-link>
        </footer>
    </section>
</template>

<style scoped>
</style>

<script setup>
import VLazyImage from 'v-lazy-image';

const props = defineProps({
    products: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    route : {
        type: String,
        required: true
    }
})
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