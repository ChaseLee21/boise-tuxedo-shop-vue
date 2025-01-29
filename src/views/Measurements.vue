<template>
    <Header :title = "headerProps.title" :content = "headerProps.content" :links = "headerProps.links" />
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
        <section class="my-2" role="contentinfo">
            <MeasurementsForm />
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';
import MeasurementsForm from '../components/MeasurementsForm.vue';

const headerProps = {
    title: `Submit Your Measurements`,
    content: `If you are attending a wedding or event and you are not local to the Boise / Meridian area you can fill out the form below to give our team your measurements! 
    You should receieve a confirmation email shortly after submitting the form.
    If you prefer to email us your measurements rather than fill out this form please email us at <a class="link" href="mailto:boisetuxedoshop@gmail.com" target="_blank">boisetuxedoshop@gmail.com</a><br />
    Are you local to the area? come into our store and we will take your complimentary measurements!
    
    
    `,
    links: [
    ]
}

onMounted(() => {
    
})
</script>