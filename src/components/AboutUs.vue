<template>
    <!-- TODO: update this component -->
    <!-- 
        user story: 
        AS A potential customer
        I WANT to see a description of the business and their background
        SO THAT I can decide if I want to do business with them
     -->
     <!-- 
        acceptance criteria: 
        GIVEN I am on the About Us section
        WHEN I view the information
        THEN I see a brief description of the business split into 3 sections:
            1. About Us
            2. Our History
            3. Contact Us
      -->
    <section id="about-us" class="min-h-screen h-fit bg-no-repeat bg-cover flex items-center">
            <div class="bg-zinc-700 bg-opacity-80 p-5 md:p-10 m-0 md:m-10 rounded">
                <h2 class="text-white  text-2xl md:text-3xl lg:text-4xl">About Us</h2>
                <p class="text-white text-sm md:text-xl lg:text-2xl">
                    Serving the Treasure Valley for over 35 years, The Boise Tuxedo Shop has been voted number one in its industry with the best formal wear anywhere in the region. 
                    It all starts with 5-star service, and products that are current and trending. 
                    We carry brands from the best suppliers like Tuxgear Inc., Kenneth Cole, Ike Behar, Michael Kors, Allure Bridal, and Stacy Adams, plus many many more quality suppliers.
                    We are in the events business, so we do more that just stunning weddings, we also help kids with their high school proms and homecomings, performance tuxedos, and suits for the high school bands and choirs. 
                    Also, we are very experienced in Spanish 15 Birthdays known as Quinceanera, and don’t forget First Holy Communion and Christenings.
                    If you have a black-tie event to attend, drop by and let us help outfit you in that perfect tuxedo or suit.
                    The way the wedding industry is changing, we are always adapting. 
                    For instance, our newest line – developed towards the end of 2019 – focuses on value-based retail formal wear. 
                    Modern stretch fabrics at lower price points, providing you the option to not only rent at the best prices in the region, but also buy that outfit that now fits your budget. 
                    The Boise Tuxedo Shop has also recently added more that 40 colors to our extensive line of accessories, and are always working with the best bridal planners in the area to make sure we have the latest for that special event you are planning.
                </p>
            </div>
        </section>
        <section class="col-span-1 m-auto">
            <h3 class="font-bold mb-2 text-xl">Contact Us:</h3>
            <button class="bg-red-700 text-white p-2 rounded hover:bg-red-900 transition ease-in-out duration-300" aria-label="Call us at (208)375-9616">(208)375-9616</button>
        </section>
</template>