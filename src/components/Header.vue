<template>
    <header class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <h1 class="my-2 text-start text-2xl md:text-3xl lg:text-4xl mx-2 font-bold underline" >{{ props.title }}</h1>
        <p v-html="props.content" class="text-start md:text-lg lg:text-xl ms-5 my-2"></p>
    </header>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        content: {
            type: HTMLAllCollection,
            required: false
        }
    });
</script>