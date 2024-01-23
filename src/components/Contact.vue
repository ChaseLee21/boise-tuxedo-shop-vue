<template>
    <section class="flex flex-col text-start justify-center p-2">
        <h2 class="font-bold text-2xl my-1">Contact Us</h2>
        <ul class="my-1 mx-1 list-disc list-inside">
            <li>Please refer to the <router-link class="text-blue-500 underline font-bold" to="/Faq">FAQ's</router-link> before calling to see if your question is already answered!</li>
            <li>If you are a part of a wedding party and are ready to give us your measurements, please send us an email with your name, wedding date, groom's name, and your measurements.</li>
            <li>If you still have questions or concerns, please call us or send us an email and we will get back to you as soon as possible!</li>
        </ul>
        <!-- Add phone number that is clickable -->
        <a class="bg-red-600 p-2 my-1 rounded text-white font-bold" href="tel:208-375-9616" alt="208-375-9616">Call: (208) 375-9616</a>
        <!-- Add email address that is clickable -->
        <a class="bg-red-600 p-2 my-1 rounded text-white font-bold" href="mailto:boisetuxedoshop@gmail.com" target="_blank">Email: boisetuxedoshop@gmail.com</a>
    </section>
</template>
