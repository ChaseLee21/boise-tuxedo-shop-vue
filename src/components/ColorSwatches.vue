<template>
    <article>
        <ul>
            <li v-for="swatch in props.colorSwatches" class="w-fit flex items-center hover:cursor-pointer hover:underline" :key="swatch.color" v-on:click="openPopUp()">
                <svg class="w-12 h-12">
                    <circle cx="25" cy="25" r="16" />
                    <circle cx="25" cy="25" r="15"  :fill="swatch.hexCode" />
                </svg>
                <span>{{ swatch.color }}</span>
            </li>
        </ul>
    </article>
    <ImagePopUp v-if="popUpOpen" :url="testImageUrl" alt="Test Image" title="Test Image" @PopUpClosed="popUpOpen = false" />
</template>
<script setup>
import ImagePopUp from './ImagePopUp.vue';
import {ref} from 'vue';

let popUpOpen = ref(false);

const props = defineProps({
    colorSwatches: {
        type: Array,
        required: true
    }
})

function openPopUp() {
    popUpOpen.value = !popUpOpen.value;
}

const testImageUrl = 'https://btsimagestorage.blob.core.windows.net/product-images/Boise-Tuxedo-Shop-Burgundy-Color-Pocket-Square.webp';

</script>