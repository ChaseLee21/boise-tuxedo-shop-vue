<template>
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2 bg-gray-800 rounded p-1">
        <form class="m-2">
            <div class="flex-col my-1">
                <label class="text-white mx-1">Name</label>
                <input id="nameInput" class="w-full rounded p-1" type="text" placeholder="John Doe">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1">Height: </label>
                <input class="bg-gray-800 text-white" id="heightTextInput" type="text" :value="heightValue" readonly>
                <div>
                    <input id="heightRangeInput" type="range" min="1" max="72" v-model="heightValue" />
                </div>
            </div>
        </form>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const heightValue = ref(36); // Default value

onMounted(() => {
    
})
</script>