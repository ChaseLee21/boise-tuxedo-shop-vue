<template>
    <section>
        <h2></h2>
    </section>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    color: {
        type: Object,
        required: true
    }
})
</script>