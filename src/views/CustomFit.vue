<template>
    <Header :title = headerProps.title :content = headerProps.content :links = headerProps.links />
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Custom Fit FAQs</h2>
            <div class="px-2">
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">What does custom fit mean?</h3>
                    <p class="indent-3">Custom fit suits and tuxedos are tailored to your exact measurements. You pick out the style and color of the outfit you would like. Then, our professional team members take your measurements and provide the tailoring services.</p>
                </article>
            </div>
        </section>
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Pricing</h2>
            <p>These prices are not final and are subject to change</p>
            <article>
                <h3 class="text-lg">Custom Fit Suits and Tuxedos Pricing</h3>
                <ul class="list-inside list-disc indent-5">
                    <li>Placeholder<span class="font-bold">$140</span></li>
                </ul>
            </article>
        </section>
        <ImageGallery :title = prom.title :images = prom.images />
    </main>    
</template>

<script setup>
import ImageGallery from '../components/ImageGallery.vue';
import Header from '../components/Header.vue';

const year = new Date().getFullYear();

const headerProps = {
    title: `Custom Fit Suits and Tuxedos`,
    content: ``,
    links: [
        {
            text: "Contact Us",
            url: "/Contact"
        },
        {
            text: "Freuqently Asked Questions",
            url: "/Faq"
        }]
}

const prom = {
    title: "Custom Fit Tuxedos and Suits",
    images: [
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Couple-Orange-Accessories-Navy-Suit-Tangerine-Dress.webp",
            alt: "Prom Couple Orange Accessories Navy Suit Tangerine Dress"
        },
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (2).webp",
            alt: "Young man in a silver black imperial paisley one button shawl tuxedo"
        },
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (3).webp",
            alt: "Prom goers wearing tuxedos with bow ties at the Boise Train Depot"
        },
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (4).webp",
            alt: "Three prom goers in tuxedos and dresses in front of the entrance to their prom venue"
        },
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (5).webp",
            alt: "Teenagers in tuxedos with bow ties and sunglasses posing for a photo at prom"
        },
        {
            url: "https://btsimagestorage.blob.core.windows.net/product-images/Prom-Popular-Outfit-Choices-Tuxedo-Suits-Boise-Meridian-High-School (6).webp",
            alt: "Young man in a navy suit and tie with a white shirt and black shoes posing by his car"
        }
    ]
} 

</script>