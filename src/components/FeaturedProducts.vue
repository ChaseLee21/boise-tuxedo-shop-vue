<template>
    <!-- Container  -->
    <section class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <!-- Category Title -->
        <header class="flex flex-row justify-start items-end mx-3">
            <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2 ">{{props.title}}</h2> 
            <router-link class="text-base underline button-class" :to="{ name: 'Category', params: {category : props.route } }">View All</router-link>
        </header>
        <!-- Product Container -->
        <section class="sm:flex sm:flex-col md:h-full md:grid md:grid-flow-row md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:grid-cols-4 md:mx-auto mb-8">
            <article v-for="product in props.products" class="min-w-fit my-5 mx-1 rounded-md snap-center relative">
                <router-link :to="{ name: 'Product', params: {id: product.id } }" class="hover:text-lg hover:ease-in-out hover:duration-500" >
                    <figure class="relative text-white text-center overflow-hidden animate-image animate-button rounded h-full">
                        <v-lazy-image width="480" height="800" :src="product.imageURL" :alt="product.imageAlt" class="min-w-full scale h-full object-cover zoom-image-transition" />
                        <figcaption v-if="product.formattedName" class="absolute top-0 inset-x-0 w-full p-0.5 text-xl rounded-t bg-opacity-30 m-auto bg-black">{{ product.formattedName }}</figcaption>
                        <figcaption v-else class="absolute top-0 inset-x-0 w-full p-0.5 text-xl rounded-t bg-opacity-40 m-auto bg-black">{{ product.name }}</figcaption>
                        <button class="absolute bottom-6 right-1/2 translate-x-1/2 text-xl button-text py-1 px-2 border-2 button-transition bg-opacity-40 m-auto bg-black">View Details</button>
                    </figure>
                </router-link>
            </article>
        </section>
        <footer class="mx-auto text-center mb-4">
            <router-link class="text-base underline button-class " :to="{ name: 'Category', params: {category : props.route } }">View More {{props.title}}</router-link>
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