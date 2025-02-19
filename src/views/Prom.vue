<template>
    <Header :title = headerProps.title :content = headerProps.content :links = headerProps.links />
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Prom FAQs</h2>
            <div class="px-2">
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How soon do I need to reverse my tuxedo or suit?</h3>
                    <p class="indent-3 text-lg">Ideally 2 to 3 weeks before prom, but we own all of our outfits and can always fit you even the week of prom.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Do you only rent?</h3>
                    <p class="indent-3 text-lg">We do both rental and purchase, we carry over 3,000 tuxedos and suits in stock for rental and over 700 suits for purchase.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How much does it cost to rent a tuxedo or suit for prom?</h3>
                    <p class="indent-3 text-lg">Please refer to our price chart below for a detailed overview of our prom 2024 pricing</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">When do I need to pay for my rental?</h3>
                    <p class="indent-3 text-lg">We only require a 20.00 Deposit at the time you reserve and the balance is paid when you do your final fitting. If you rather pay for it when you reserve it that is okay as well.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">What is included in my tuxedo or suit rental for prom?</h3>
                    <p class="indent-3 text-lg">The rental price includes 5 pieces:</p>
                    <ol class="list-decimal list-inside indent-6">
                        <li>Jacket</li>
                        <li>Pant</li>
                        <li>Shirt</li>
                        <li>Vest or Suspenders</li>
                        <li>Bowtie or Necktie</li>
                    </ol>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Do you have shoes availble?</h3>
                    <p class="indent-3 text-lg">We do offer shoes for rent or purchase.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How long can we keep it?</h3>
                    <p class="indent-3 text-lg">Typically if the Prom is on Saturday you will pick it up on Thursday or Friday and return it no later than Monday.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Are the rentals slim fit and how do the pants generally fit?</h3>
                    <p class="indent-3 text-lg">Yes, all of our rentals and most all purchase tuxedos and suits are either slim or ultra slim. We also carry an athletic fit as well.</p>
                </article>
            </div>
        </section>
        <section>
            <h2 class="text-2xl font-bold py-2">Prom 2025 Pricing</h2>
            <article>
                <h3 class="text-xl font-bold">Prom Tuxedo and Suit Packages</h3>
                <ul class="list-inside list-disc">
                    <li>5 Piece: Pants, shirt, vest, tie, and shoes --- <span class="font-bold">$140</span></li>
                    <li>5 Piece: Coat, pants, shirt, vest, and tie (no shoes included)  --- <span class="font-bold">$170</span></li>
                    <li>6 Piece: Coat, pants, shirt, vest, tie, and shoes --- <span class="font-bold">$185</span></li>
                    <li>9 Piece: Full 6 piece package, belt, cufflink set, pocket square, and socks --- <span class="font-bold">$215</span></li>
                </ul>
            </article>
            <article>
                <h3 class="text-xl font-bold">Prom Individual Rental Items</h3>
                <ul class="list-inside list-disc">
                    <li>Coat --- <span class="font-bold">$85</span></li>
                    <li>Pant --- <span class="font-bold">$45</span></li>
                    <li>Shirt --- <span class="font-bold">$25</span></li>
                    <li>Vest --- <span class="font-bold">$30</span></li>
                    <li>Tie --- <span class="font-bold">$10</span></li>
                    <li>Shoes --- <span class="font-bold">$30</span></li>
                    <li>Belt --- <span class="font-bold">$15</span></li>
                    <li>Stud and Cufflink Set --- <span class="font-bold">$10</span></li>
                    <li>Pocket Square --- <span class="font-bold">$5</span></li>
                </ul>
            </article>
        </section>
        <section class="">
            <h2 class="text-xl lg:text-2xl font-bold py-2">Prom 2025 Dates</h2>
            <article>
                <h3>March 29th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Bishop Kelly High School</li>
                </ul>
            </article>
            <article>
                <h3>April 5th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Renaissance High School</li>
                </ul>
            </article>
            <article>
                <h3>April 12th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Rocky Mountain High School</li>
                    <li class="indent-6">Boise High School</li>
                    <li class="indent-6">Kuna High School</li>
                </ul>
            </article>
            <article>
                <h3>April 19th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Timberline High School</li>
                </ul>
            </article>
            <article>
                <h3>April 26th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Borah High School</li>
                    <li class="indent-6">Eagle High School</li>
                </ul>
            </article>         
            <article>
                <h3>May 3rd</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Owyhee High School</li>
                    <li class="indent-6">Capital High School</li>
                    <li class="indent-6">Mountain View High School</li>
                </ul>
            </article>
            <article>
                <h3>May 10th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Centennial High School</li>
                </ul>
            </article>
            <article>
                <h3>May 17th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Emmett High School</li>
                </ul>
            </article>
            <article>
                <h3>Unknown</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Meridian High School</li>
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
    title: `Prom ${year}`,
    content: `Prom ${year} season has arrived and Boise Tuxedo Shop is here to help. 
    We understand that prom can be stressful, expensive, and time-consuming, but we are here to make it as easy as possible.`,
    links: []
}

const prom = {
    title: "Prom 2024 Image Gallery",
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