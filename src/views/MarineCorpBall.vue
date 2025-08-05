<template>
    <Header :title = headerProps.title :content = headerProps.content :links = headerProps.links />
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Frequently Asked Questions</h2>
            <div class="px-2">
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How do I receive the discount?</h3>
                    <p class="indent-3">When renting your tuxedo or suit for the Marine Corp Ball, simply mention the event and use code "USMC250" in store to receive your discount!</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Does the discount only apply to one style?</h3>
                    <p class="indent-3">No, the discount applies to all styles available for rent.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">What is the total price of the rental after the discount?</h3>
                    <p class="indent-3">Pricing varies based on the style you choose to rent, but all for rent styles are eligible for the discount.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Question not answered here?</h3>
                    <p class="indent-3"><a class="link" href="tel:208-986-2999">Text or Call: (208) 986-2999</a></p>
                </article>
            </div>
        </section>
        <ImageGallery :images = images.images />
        <!-- <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Pricing</h2>
            <p>These prices are not final and are subject to change</p>
            <article>
                <ul class="list-inside list-disc indent-5">
                    <li>Coat and pant starting at <span class="font-bold">$299</span></li>
                </ul>
            </article>
        </section> -->
    </main>    
</template>

<script setup>
import ImageGallery from '../components/ImageGallery.vue';
import Header from '../components/Header.vue';

const headerProps = {
    title: `2025 Marine Corp Ball`,
    content: `Boise Tuxedo Shop is a family-owned and operated formalwear provider in Meridian, proudly supporting our military. We're honored to partner with the Marine Corps for the 250th Birthday Ball—suit up locally with pride and tradition. Use code "USMC250" in store to receive your discount!`,
    links: []
}

const images = {
    title: "Marine Corp Ball Tuxedo Suit Discount",
    images: [
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Kenneth%20Cole%20Slim%20Black%20Tuxedo%20with%20Satin%20Trim%20Lapel%20%28Rocco%29.webp",
            alt: "Marine Corp Ball Tuxedo Suit Discount"
        }
    ]
} 

</script>