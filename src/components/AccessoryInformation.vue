<template>
    <section>
        <h2>{{ props.color.color }}</h2>
        <ul>
            
        </ul>
    </section>
</template>
<script setup>
import { defineProps, onMounted } from 'vue';

const props = defineProps({
    color: {
        type: Object,
        required: true
    }
})

onMounted(() => {
    console.log(props.color);
})
</script>