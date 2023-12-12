<template>
    <section class="bg-zinc-700 text-white p-10   text-center">
            <p class="text-3xl md:text-4xl lg:text-5xl font-bold">The Boise Tuxedo Shop Experience:</p>
            <br class="line-through" />
            <ul class="flex flex-row overflow-x-auto md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 text-2xl md:text-3xl lg:text-4xl">
                <li class="bg-white border rounded m-2 p-4 md:row-span-1 md:hover:drop-shadow-xl" v-for="specialty in specialties" :key="specialty.id">
                    <div class="w-52 md:w-auto ">
                        <p class="text-red-600 font-bold">{{ specialty.title }}</p>
                        <br />
                        <p class="text-black">{{ specialty.text }}</p>
                    </div>
                </li>
            </ul>
    </section>
</template>

<script setup>
let specialties = [
    {
        title: 'Local and Family Owned',
        text: 'Located on U-Stick and Eagle Road next to Kohls!'
    },
    {
        title: 'Weddings',
        text: 'Out of town groomsmen, large or small weddings, we have you covered!'
    },
    {
        title: 'Prom Tuxedos',
        text: "We have an update to date selection of prom tuxedos and suits!"
    },
    {
        title: 'All Styles in Store',
        text: 'Unlike big retail stores, we carry all our styles in store for you to try on today!'
    },
    {
        title: 'Best Reviews in the Valley',
        text: 'Don\'t take our word for it, check out our reviews on Google and Facebook!'
    },
    {
        title: 'Same Day Rentals',
        text: 'We offer same day rentals for all your last minute needs!'
    },
    {
        title: 'Rent or Purchase',
        text: 'We offer both rentals and purchases! View our products to see what we have in store!'
    },
    {
        title: 'No Appointment Needed',
        text: 'We are open Monday - Saturday. No appointment required!'
    }
]
</script>