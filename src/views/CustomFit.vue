<template>
    <Header :title = headerProps.title :content = headerProps.content :links = headerProps.links />
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
        <ImageGallery :images = images.images />
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Custom Fit FAQs</h2>
            <div class="px-2">
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">What does custom fit mean?</h3>
                    <p class="indent-3">Custom fit suits and tuxedos are tailored to your exact measurements. You pick out the style and color of the outfit you would like. Then, our professional team members take your measurements and provide the tailoring / alteration services.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Is custom fit required?</h3>
                    <p class="indent-3">No! We stock our rentals in a large amount of sizes allowing us to fit a style to the majority of people without heavy alterations needing to be done.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Do we offer custom fit rentals?</h3>
                    <p class="indent-3">Yes and no, alterations are available for our tuxedo and suit rentals although we will not perform alterations on rentals that can not be reversed. For example we will hem pants and adjust sleeve lengths but will not take in the jacket.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How much does custom fit services cost?</h3>
                    <p class="indent-3">Pricing can vary based on what tailoring work needs to be done. We will always quote you a price before the alterations are performed so everyone is on the same page when it comes to price.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How long does this process take?</h3>
                    <p class="indent-3">We try to get all tailoring services done within 2 weeks of us holding the outfit.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Do we offer this service for product not purchased from us?</h3>
                    <p class="indent-3">Our professional alteration team has the final decision. The majority of the time we will alter or tailor your outfit. In some scenarios where the condition of the outfit is in question we reserve the right to deny our tailoring services.</p>
                </article>
            </div>
        </section>
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Pricing</h2>
            <p>These prices are not final and are subject to change</p>
            <article>
                <ul class="list-inside list-disc indent-5">
                    <li>Coat and pant starting at <span class="font-bold">$299</span></li>
                </ul>
            </article>
        </section>
    </main>    
</template>

<script setup>
import ImageGallery from '../components/ImageGallery.vue';
import Header from '../components/Header.vue';

const year = new Date().getFullYear();

const headerProps = {
    title: `Custom Fit Suits and Tuxedos`,
    content: `Custom-fitted men's suits are the epitome of professional attire. Its tailored construction ensures a perfect fit, accentuating the wearer's physique and exuding confidence. In today's business world, a well-tailored suit is a non-negotiable for any man looking to make a lasting impression. The attention to detail and precision in measurements results in a unique and personalized garment that is unmatched in both style and quality. A custom suit not only enhances one's appearance but also provides comfort and flexibility, allowing for ease of movement and added confidence in any professional setting. Investing in a custom fitted men's suit is an investment in oneself projecting a refined and polished image that speaks volumes about one's professionalism and attention to detail.`,
    links: []
}

const images = {
    title: "Custom Fit Tuxedos and Suits",
    images: [
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Custom-Fit-Desert-Tan-Suit-Kahki-Accessories-Brown-Shoes.webp",
            alt: "Adult man where an all tan suit with khaki accessories and a white shirt"
        },
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Custom-Fit-Sage-Suit-White-Accessories-Brown-Shoes.webp",
            alt: "Adult man where a dark sage suit with white accessories and a white shirt"
        },
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Custom-Fit-Tan-Suit-Lilac-Accessories-Brown-Shoes.webp",
            alt: "Adult man where an all tan suit with lilac or lavender accessories and a white shirt"
        },
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Custom-Fit-Tan-Suit-White-Accessories-Brown-Shoes.webp",
            alt: "Adult man where an all khaki suit with white accessories and a white shirt"
        }
    ]
} 

</script>