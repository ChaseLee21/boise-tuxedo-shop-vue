<template>
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2 bg-gray-800 rounded text-white p-1">
        <form class="m-2">
            <div class="flex-col my-1">
                <label>Name</label>
                <input class="w-full rounded p-1" type="text" placeholder="John Doe">
            </div>
            <div class="flex-col my-1">
                <label>Height</label>
                <input type="text" :value="heightValue" readonly>
                <div>
                    <input type="range" min="1" max="72" v-model="heightValue" />
                </div>
            </div>
        </form>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';

const heightValue = ref(36); // Default value

const headerProps = {
    title: `Submit Your Measurements`,
    content: `If you are attending a wedding or event and you are not local to the Boise / Meridian area you can fill out the form below to give our team your measurements! 
    You should receieve a confirmation email shortly after submitting the form. 
    If you did not recieve this confirmation email please contact us.
    If you are local to the area come into our store and we will take your complimentary measurements.`,
    links: [
        { url: '/Contact', text: 'Contact Us'}
    ]
}

onMounted(() => {
    
})
</script>