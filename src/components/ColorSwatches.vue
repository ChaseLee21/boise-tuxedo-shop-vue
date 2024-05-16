<template>
    <article>
        <ul>
            <li v-for="swatch in props.colorSwatches" class="w-fit flex items-center hover:cursor-pointer hover:underline" :key="swatch.color" v-on:click="openPopUp(swatch)">
                <svg class="w-12 h-12">
                    <circle cx="25" cy="25" r="16" />
                    <circle cx="25" cy="25" r="15"  :fill="swatch.hexCode" />
                </svg>
                <span>{{ swatch.color }}</span>
            </li>
        </ul>
    </article>
    <ImagePopUp v-if="popUpOpen" :url="popUpSwatch.url" :alt="popUpSwatch.alt" :title="popUpSwatch.color" @PopUpClosed="popUpOpen = false" />
</template>
<script setup>
import ImagePopUp from './ImagePopUp.vue';
import {ref} from 'vue';

let popUpOpen = ref(false);

let popUpSwatch = ref({});

const props = defineProps({
    colorSwatches: {
        type: Array,
        required: true
    }
})

function openPopUp(swatch) {
    popUpSwatch.value = swatch;
    popUpOpen.value = !popUpOpen.value;
}

</script>