<template>
    <Header :title = headerProps.title :content = headerProps.content :links = headerProps.links />
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">2025 - 2026 Rental Packages</h2>
            <div class="px-2">
                <article>
                    <p class="indent-3 text-xl"></p>
                    <p class="indent-3 text-xl">We would like to extend this offer to the high school music groups yet another year. Adding a new program to the mix.</p>
                </article>
                <br></br>
                <article>
                    <p class="indent-3 text-xl">Program A: Renting for the year, better short term cost, --- <span class="font-bold">$109.95</span> * Rental price includes alterations</p>
                    <p class="indent-3 text-xl">Program B: Purchasing, better long term cost --- <span class="font-bold">$149.95</span> * There will be a minor additional fee for alterations</p>
                </article>
                <br></br>
                <br></br>
                <article>
                    <p class="indent-3 text-xl">* Both programs offer our <span class="font-bold">trade in option</span>. If at anytime you need to trade in a coat, pant or shirt for a different size we only charge a cleaning fee, opposed to buying or renting the whole tuxedo or suit.</p>
                </article>
            </div>
        </section>
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Frequently Asked Questions</h2>
            <div class="px-2">
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Who is eligible for this offer?</h3>
                    <p class="indent-3 text-xl">If you are a high school or middle school student participating in a school performance, you are eligible for this offer. If you have any questions about your eligibility, please feel free to contact us. <a class="link text-md" href="tel:208-375-9616">(208) 375-9616</a></p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How does the trade in option work?</h3>
                    <p class="indent-3 text-xl">If at any time you need to trade in a coat, pant, or shirt for a different size, we only charge a cleaning fee, opposed to buying or renting the whole tuxedo or suit. This option is available regardless if you purchased or rented your attire from us.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">What sizing options are available?</h3>
                    <p class="indent-3 text-xl">We offer a wide range of sizes for our tuxedos and suits, including slim fit and regular fit options. If you have specific sizing needs, please contact us for assistance and we will be more than happy to assist you.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Do I need to come in to get fitted?</h3>
                    <p class="indent-3 text-xl">We recommend coming in for a fitting to ensure the best possible fit for your tuxedo or suit. Our experienced staff will be able to assist you in finding the perfect size and style for your needs.</p>
                </article>
            </div>
        </section>
        <ImageGallery :images = images.images />
    </main>    
</template>

<script setup>
import ImageGallery from '../components/ImageGallery.vue';
import Header from '../components/Header.vue';

const headerProps = {
    title: `School Performance Attire`,
    content: `The Boise Tuxedo Shop & our parent company Tuxgear Inc. have been serving high schools all over the treasure valley with our tuxedos, suits, and huge range of accessories for the past 26 years. Our team loves being able to help the new & returning students each year to get fitted into a suit or tuxedo. It is awesome watching each student as they exit the fitting area smiling glowing with confidence.`,
    links: []
}

const images = {
    title: "School Performance Attire Tuxedo and Suit Package",
    images: [
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Belk.webp",
            alt: "School Performance Attire Tuxedo and Suit Package"
        }
    ]
} 

</script>