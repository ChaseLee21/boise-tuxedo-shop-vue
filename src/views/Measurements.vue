<template>
    <Header :title = "headerProps.title" :content = "headerProps.content" :links = "headerProps.links" />
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
        <section role="contentinfo">
            <article>
                <h2>Coming Soon</h2>
                <MeasurementsForm />
            </article>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';

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