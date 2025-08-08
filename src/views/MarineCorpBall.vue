<template>
    <Header :title = headerProps.title :content = headerProps.content :links = headerProps.links />
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Rental Packages</h2>
            <div class="px-2">
                <article>
                    <p class="indent-3 text-xl">6 Piece (Coat, Pants, Shirt, Vest, Tie and Shoes) --- <span class="font-bold">$185</span> normal price</p>
                    <p class="indent-10 text-xl">- Special Pricing for Marine Corps Ball Only --- <span class="text-red-600 font-bold">$145</span> event only price</p>
                </article>
                <br></br>
                <article>
                    <p class="indent-3 text-xl">9 Piece (Full 6 piece package PLUS Pocket Square, Socks, and your choice of Belt or Cufflink/Stud Set) --- <span class="font-bold">$209 - $219</span> normal price</p>
                    <p class="indent-10 text-xl">- Special Pricing for Marine Corps Ball Only --- <span class="text-red-600 font-bold">$189</span> event only price</p>
                </article>
                <br></br>
                <article>
                    <p class="indent-3 text-xl">* If you are interested in <span class="font-bold">purchasing</span> a suit or tuxedo for the event you can use the same coupon code USMC250 to take up to 20% off your total purchase. *</p>
                    <p class="indent-3 text-xl">* <span class="font-bold">Tailoring/alteration</span> prices for purchase suits are not included in the discounted price and will be charged separately. *</p>
                </article>
            </div>
        </section>
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Frequently Asked Questions</h2>
            <div class="px-2">
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How do I receive the discount?</h3>
                    <p class="indent-3 text-xl">When renting your tuxedo or suit for the Marine Corp Ball, simply mention the event and use code "USMC250" in store to receive your discount!</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Does the discount only apply to one style?</h3>
                    <p class="indent-3 text-xl">No, the discount applies to all styles available for rent.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">What is the total price of the rental after the discount?</h3>
                    <p class="indent-3 text-xl">Pricing varies based on the style you choose to rent, but all for rent styles are eligible for the discount.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Question not answered here?</h3>
                    <p class="indent-3 text-xl"><a class="link" href="tel:208-986-2999">Text or Call: (208) 986-2999</a></p>
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
    title: `2025 Marine Corps Anniversary Ball`,
    content: `Boise Tuxedo Shop is a family-owned and operated formalwear provider in Meridian, proudly supporting our military. We're honored to partner with the Marine Corps for the 250th anniversary Ball—suit up locally with pride and tradition. Use code "USMC250" in store to receive your discount!`,
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