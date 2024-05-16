<template>
    <article>
        <ul>
            <li v-for="swatch in props.colorSwatches" class="w-fit flex items-center hover:cursor-pointer hover:underline" :key="swatch.color">
                <svg class="w-12 h-12">
                    <circle cx="25" cy="25" r="16" />
                    <circle cx="25" cy="25" r="15"  :fill="swatch.hexCode" />
                </svg>
                <span>{{ swatch.color }}</span>
            </li>
        </ul>
    </article>
</template>
<script setup>
const props = defineProps({
    colorSwatches: {
        type: Array,
        required: true
    }
})

const testImageUrl = 'https://btsimagestorage.blob.core.windows.net/product-images/Boise-Tuxedo-Shop-Burgundy-Color-Pocket-Square.webp';

</script>