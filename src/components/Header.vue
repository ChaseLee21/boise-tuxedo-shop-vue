<template>
    <header class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
        <h1 class="text-start text-3xl lg:text-4xl xl:text-5x font-bold" >{{ props.title }}</h1>
        <p v-html="props.content" class="text-start md:text-lg lg:text-xl mx-2"></p>
        <nav>
            <ul>
                <li class="list-inside list-disc mx-2 indent-2" v-for="link in props.links">
                    <router-link class="link" :to="link.url">{{ link.text }}</router-link>
                </li>
            </ul>
        </nav>
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
        },
        links: {
            type: Array,
            required: false
        }
    });
</script>