<template>
    <section class="m-3 ">
        <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2">Tuxedos & Suits</h2>
        <div class="flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory md:h-[70vh] ">
            <div class="flex flex-col m-1 p-3 border border-black rounded min-w-[85vw] md:min-w-[40vw] lg:min-w-[25vw] snap-center items-center" v-for="product in products">
                <h3 class="text-center font-bold text-xl md:text-2xl lg:text-3xl">{{ product.title }}</h3>
                <img class="h-auto w-auto object-cover object-center md:h-[35vh] md:w-fit" :src="product.imageSrc" :alt="product.imageAlt" >
                <p class="text-center text-lg md:text-xl lg:text-2xl">{{ product.desc }}</p>
                <div class="flex justify-center">
                    <button class="text-white bg-red-600 p-2 rounded inline-block">View Details</button>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
const products = [
    {
        id: 1,
        title: 'Performance Stretch Mens Slim Black Suit',
        desc: 'Performance Stretch men’s slim fit 2-button notch suit featuring a notch lapel and midweight super 120’s fabric. Includes matching slim fit black formal trousers and matching vest.',
        keyFeatures: ['All-Inclusive Package Pricing','Super 120’s Fabric & Side Vents','Satin Edge Lapel','Matching  Slim Fit Trousers','Matching Black Vest','Over 100 Tie Options','Best Price Guaranteed'],
        retailPrice: null,
        saleRetailPrice: null,
        rentalPrice: 149.99,
        styleNumber: 'BTS3068',
        imageSrc: '/src/assets/images/black-mens-performance-stretch-suit-3.jpg',
        imageAlt: 'Performance Stretch Mens Slim Black Suit'
    },
    {
        id: 1,
        title: 'Performance Stretch Mens Slim Black Suit',
        desc: 'Performance Stretch men’s slim fit 2-button notch suit featuring a notch lapel and midweight super 120’s fabric. Includes matching slim fit black formal trousers and matching vest.',
        keyFeatures: ['All-Inclusive Package Pricing','Super 120’s Fabric & Side Vents','Satin Edge Lapel','Matching  Slim Fit Trousers','Matching Black Vest','Over 100 Tie Options','Best Price Guaranteed'],
        retailPrice: null,
        saleRetailPrice: null,
        rentalPrice: 149.99,
        styleNumber: 'BTS3068',
        imageSrc: '/src/assets/images/black-mens-performance-stretch-suit-3.jpg',
        imageAlt: 'Performance Stretch Mens Slim Black Suit'
    },
    {
        id: 1,
        title: 'Performance Stretch Mens Slim Black Suit',
        desc: 'Performance Stretch men’s slim fit 2-button notch suit featuring a notch lapel and midweight super 120’s fabric. Includes matching slim fit black formal trousers and matching vest.',
        keyFeatures: ['All-Inclusive Package Pricing','Super 120’s Fabric & Side Vents','Satin Edge Lapel','Matching  Slim Fit Trousers','Matching Black Vest','Over 100 Tie Options','Best Price Guaranteed'],
        retailPrice: null,
        saleRetailPrice: null,
        rentalPrice: 149.99,
        styleNumber: 'BTS3068',
        imageSrc: '/src/assets/images/black-mens-performance-stretch-suit-3.jpg',
        imageAlt: 'Performance Stretch Mens Slim Black Suit'
    },
    {
        id: 1,
        title: 'Performance Stretch Mens Slim Black Suit',
        desc: 'Performance Stretch men’s slim fit 2-button notch suit featuring a notch lapel and midweight super 120’s fabric. Includes matching slim fit black formal trousers and matching vest.',
        keyFeatures: ['All-Inclusive Package Pricing','Super 120’s Fabric & Side Vents','Satin Edge Lapel','Matching  Slim Fit Trousers','Matching Black Vest','Over 100 Tie Options','Best Price Guaranteed'],
        retailPrice: null,
        saleRetailPrice: null,
        rentalPrice: 149.99,
        styleNumber: 'BTS3068',
        imageSrc: '/src/assets/images/black-mens-performance-stretch-suit-3.jpg',
        imageAlt: 'Performance Stretch Mens Slim Black Suit'
    },
    {
        id: 1,
        title: 'Performance Stretch Mens Slim Black Suit',
        desc: 'Performance Stretch men’s slim fit 2-button notch suit featuring a notch lapel and midweight super 120’s fabric. Includes matching slim fit black formal trousers and matching vest.',
        keyFeatures: ['All-Inclusive Package Pricing','Super 120’s Fabric & Side Vents','Satin Edge Lapel','Matching  Slim Fit Trousers','Matching Black Vest','Over 100 Tie Options','Best Price Guaranteed'],
        retailPrice: null,
        saleRetailPrice: null,
        rentalPrice: 149.99,
        styleNumber: 'BTS3068',
        imageSrc: '/src/assets/images/black-mens-performance-stretch-suit-3.jpg',
        imageAlt: 'Performance Stretch Mens Slim Black Suit'
    },
]
</script>