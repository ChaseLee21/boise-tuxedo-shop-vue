<template>
    <section>
        <ul>
            <li v-for="swatch in props.colorSwatches" class="w-fit flex items-center" :key="swatch.color">
                <svg class="w-12 h-12">
                    <circle cx="25" cy="25" r="16" />
                    <circle cx="25" cy="25" r="15"  :fill="swatch.hexCode" />
                </svg>
                <span>{{ swatch.color }}</span>
            </li>
        </ul>
    </section>
</template>
<script setup>
const props = defineProps({
    colorSwatches: {
        type: Array,
        required: true
    }
})
</script>