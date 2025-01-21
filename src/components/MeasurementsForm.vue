<template>
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2 bg-gray-800 rounded p-1">
        <form class="m-2">
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">First and Last Name</label>
                <input id="name" class="w-full rounded p-1" type="text" placeholder="John Doe">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Email</label>
                <label class="text-white opacity-80 text-sm">we will only email you if we have any questions about your measurements</label>
                <input id="email" class="w-full rounded p-1" type="text" placeholder="JohnDoe@gmail.com">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Wedding / Event Name</label>
                <label class="text-white opacity-80 text-sm">generally, this is the name of the bride and groom</label>
                <input id="eventName" class="w-full rounded p-1" type="text" placeholder="John & Jane Doe's Wedding">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Wedding / Event Role</label>
                <label class="text-white opacity-80 text-sm"></label>
                <input id="eventRole" class="w-full rounded p-1" type="text" placeholder="Ex. Groomsman, Father of the Bride">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Height: </label>
                <input class="w-auto bg-gray-800 text-white" id="heightString" type="text" :value="heightString" readonly>
                <div>
                    <input id="heightRange" type="range" min="1" max="72" v-model="heightValue" />
                </div>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Weight</label>
                <label class="text-white opacity-80 text-sm">Please enter weight in pounds (lbs)</label>
                <input id="weight" class="w-full rounded p-1" type="number" min="10" max="400" placeholder="200">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Shoe Size</label>
                <label class="text-white opacity-80 text-sm"></label>
                <input id="shoeSize" class="w-full rounded p-1" type="number" min="10" max="400" placeholder="200">
            </div>
        </form>
    </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { convertRangeInputToHeight } from '../utils/helpers'

const heightValue = ref(46); // Default value
const heightString = computed(() => {
    return convertRangeInputToHeight(heightValue.value)
})
</script>