<template>
    <div class="sticky top-0 w-full z-10">
        <SearchBar />
        <div id="navMenu" class=" w-full flex flex-row items-center justify-center p-3 bg-gray-800 text-white">
            <button id="navButton" class="absolute left-0 top-1">
                <svg v-if="!navOpen" xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-red-600 stroke-[4px]">
                    <line x1="6" y1="12" x2="42" y2="12"></line>
                    <line x1="6" y1="24" x2="42" y2="24"></line> 
                    <line x1="6" y1="36" x2="42" y2="36"></line>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-white opacity-60 stroke-[4px]">
                    <line x1="13" y1="15" x2="32" y2="30"></line>
                    <line x1="13" y1="30" x2="32" y2="15"></line> 
                </svg>
            </button>
            <router-link to="/" class="text-2xl font-bold">Boise Tuxedo Shop</router-link>
            <Transition>
                <nav v-show="navOpen" class="absolute left-0 top-12 w-full z-50">
                    <ul class="flex flex-col p-3 text-lg bg-gray-800 text-white">
                        <li class="p-2 font-bold hover:text-zinc-300"><router-link to="/">Home</router-link></li>
                        <li class="p-2 pb-0 hover:text-zinc-300"><router-link to="/RentOrBuy">Rent or Buy</router-link></li>
                        <li class="p-2 pb-0 hover:text-zinc-300"><router-link to="/Prom">Prom</router-link></li>
                        <ul class="p-2 list-disc list-inside">
                            <li class="p-2 hover:text-zinc-300"><router-link to="/Category/TuxedoSuit">Tuxedos & Suits</router-link></li>
                            <li class="p-2 hover:text-zinc-300"><router-link to="/Category/Shirts">Shirts</router-link></li>
                            <li class="p-2 hover:text-zinc-300"><router-link to="/Category/Pants">Pants</router-link></li>
                            <li class="p-2 hover:text-zinc-300"><router-link to="/Accessories">Accessories</router-link></li>
                        </ul>
                        <li class="p-2 pb-0 hover:text-zinc-300"><router-link to="/CustomFit">Custom Fit</router-link></li>
                        <li class="p-2 pb-0 hover:text-zinc-300"><router-link to="/Measurements">Out of Town Measurements</router-link></li>
                        <li class="p-2 pb-0 hover:text-zinc-300"><router-link to="/Gallery">Image Gallery</router-link></li>
                        <li class="p-2 pb-0 hover:text-zinc-300"><router-link to="/Reviews">Google Reviews</router-link></li>
                        <li class="p-2 pb-0 hover:text-zinc-300"><router-link to="/Faq">FAQs</router-link></li>
                        <li class="p-2 pb-0 hover:text-zinc-300"><router-link to="/Contact">Contact Us</router-link></li>
                        <li class="md:col-span-1 m-auto">
                        <div class="flex justify-center">
                            <a class="p-2" href="https://www.facebook.com/boisetuxedoshop/" target="_blank" rel="noopener noreferrer">
                                <img width="32px" height="32px" src="/Facebook_Logo_Primary.webp" alt="Facebook" />
                            </a>
                            <a class="p-2" href="https://www.instagram.com/boisetuxedoshop/" target="_blank" rel="noopener noreferrer">
                                <img width="32px" height="32px" src="/Instagram_Glyph_Gradient.webp" alt="Instagram" />
                            </a>
                        </div>
                    </li>
                    </ul>
                </nav>
            </Transition>
        </div>
    <NewsBanner />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NewsBanner from '../NewsBanner.vue';
import SearchBar from '../SearchBar.vue';

let navOpen = ref(false);

const handleNavMenuOpen = (e) => {
    if (e.target.closest('#navButton')) {
        navOpen.value = !navOpen.value;
        document.addEventListener('click', handleNavMenuClose);
    }
}

const handleNavMenuClose = (e) => {
    if (!e.target.closest('#navMenu')) {
        navOpen.value = false;
        document.removeEventListener('click', handleNavMenuClose);
    } else if (e.target.closest('.router-link-active')) {
        navOpen.value = false;
        document.removeEventListener('click', handleNavMenuClose);
    }
}
    
onMounted(() => {
    document.addEventListener('click', handleNavMenuOpen);
})
</script>

<style scoped>
.v-enter-active, .v-leave-active {
    transition: opacity 0.3s ease-in-out;
}
.v-leave-to, .v-enter-from {
    opacity: 0;
}

.v-enter-to, .v-leave-from {
    opacity: 1;
}

#navMenu {
    z-index: 100;
}
</style>