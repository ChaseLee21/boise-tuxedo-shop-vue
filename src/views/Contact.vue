<template>
    <Header :title="headerProps.title" :content="headerProps.content" :links="headerProps.links" />
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <section role="contentinfo" class="flex flex-col">
            <ul class="text-lg list-inside list-disc mx-2 indent-2">
                <li><a class="link" href="tel:208-375-9616">Call: (208) 375-9616</a></li>
                <li><a class="link" href="mailto:boisetuxedoshop@gmail.com" target="_blank">Email: boisetuxedoshop@gmail.com</a></li>
            </ul>
        </section>
    </main>
</template>
<script setup>
import Header from '../components/Header.vue';

const headerProps = {
    title: 'Contact Us',
    content: `Please refer to the frequently asked questions section before calling to see if your question is already answered!
    If you are a part of a wedding party and are ready to give us your measurements, please send us an email with your name, wedding date, groom's name, and your measurements.
    If you still have questions or concerns, please call us or send us an email and we will get back to you as soon as possible!`,
    links: [
        { url: '/Faq', text: 'Frequently Asked Questions' }
    ]
}
</script>