<template>
    <section class="m-3 ">
        <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2">Formal Pants <router-link class="text-base underline button-class" :to="{ name: 'Category', params: {category : 'Pants' } }">View All</router-link></h2>
        <div class="flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory md:h-[70vh] ">
            <div class="flex flex-col m-1 p-3 border border-black rounded min-w-[85vw] md:min-w-[40vw] lg:min-w-[25vw] snap-center items-center" v-for="product in props.pantProducts">
                <h3 class="text-center font-bold text-xl md:text-2xl lg:text-3xl">{{ product.name }}</h3>
                <!-- TODO: fix image path, could just be a problem during testing -->
                <img class="h-auto w-auto object-cover object-center md:h-[35vh] md:w-fit" :src="product.imageURL" :alt="product.imageAlt" >
                <!-- Commenting out description because it is making product cards too long -->
                <!-- <h4 class="text-left font-bold text-xl md:text-2xl lg:text-3xl w-full underline">Style Description:</h4>
                <p class="text-left text-lg md:text-xl lg:text-2xl">{{ product.description }}</p> -->
                <h4 class="text-left font-bold text-xl md:text-2xl lg:text-3xl w-full underline">Style Features:</h4>
                <ul class="text-left w-full text-lg md:text-xl lg:text-2xl list-disc list-inside">
                    <li v-for="feature in product.keyFeatures">{{ feature }}</li>
                </ul>
                <div class="flex justify-center">
                    <button class="text-white bg-red-600 p-2 rounded inline-block">View Details</button>
                </div>
                <p class="text-center text-lg md:text-xl lg:text-2xl">Style Number: {{ product.styleNumber }}</p>
            </div>
        </div>

    </section>
</template>

<script setup>
const props = defineProps({
    pantProducts: {
        type: Array,
        required: true
    }
})

</script>