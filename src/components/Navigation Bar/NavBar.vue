<template>
    <div id="navMenu" class="sticky top-0 w-full">
        <SearchBar />
        <nav class="bg-slate-800 text-white">
            <ul class="flex flex-row flex-wrap justify-center items-center text-lg p-3">
                <li class="lg:text-2xl text-xl font-bold hover:text-zinc-300 mx-2"><router-link to="/" >Boise Tuxedo Shop</router-link></li>
                <div class="relative">
                    <li id="rentOrBuyLink" class="hover:text-zinc-300 mx-2" >
                        <router-link to="/RentOrBuy">
                            <div class="flex items-center relative me-2">
                                Rent or Buy
                                <Transition>
                                    <svg v-if="!rentOrBuyNavOpen" width="10" height="10" class="absolute -right-3 stroke-white stroke-[2px] scale-75">
                                        <line x1="0" y1="0" x2="5" y2="10"></line>
                                        <line x1="10" y1="0" x2="5" y2="10"></line>
                                    </svg>
                                    <svg v-else width="10" height="10" class="absolute -right-3 stroke-white stroke-[2px] scale-75">
                                        <line x1="0" y1="10" x2="5" y2="0"></line>
                                        <line x1="10" y1="10" x2="5" y2="0"></line>
                                    </svg>
                                </Transition>             
                            </div>
                        </router-link>
                    </li>
                    <Transition>
                        <ul id="rentOrBuyNavList" v-show="rentOrBuyNavOpen" class="absolute bg-slate-800 p-2 rounded w-48">
                            <li class="hover:text-zinc-300 w-full"><router-link class="block w-full" to="/Category/TuxedoSuit">Tuxedos & Suits</router-link></li>
                            <li class="hover:text-zinc-300 w-full"><router-link class="block w-full" to="/Category/Shirts">Shirts</router-link></li>
                            <li class="hover:text-zinc-300 w-full"><router-link class="block w-full" to="/Category/Pants">Pants</router-link></li>
                            <li class="hover:text-zinc-300 w-full"><router-link class="block w-full" to="/Accessories">Accessories</router-link></li>
                        </ul>
                    </Transition>
                </div>
                <li class="hover:text-zinc-300 mx-2"><router-link to="/Prom">Prom</router-link></li>
                <li class="hover:text-zinc-300 mx-2"><router-link to="/CustomFit">Custom Fit</router-link></li>
                <li class="hover:text-zinc-300 mx-2"><router-link to="/Gallery">Image Gallery</router-link></li>
                <li class="hover:text-zinc-300 mx-2"><router-link to="/Reviews">Google Reviews</router-link></li>
                <li class="hover:text-zinc-300 mx-2"><router-link to="/Faq">FAQs</router-link></li>
                <li class="hover:text-zinc-300 mx-2"><router-link to="/Measurements">Measurements</router-link></li>
                <li class="hover:text-zinc-300 mx-2"><router-link to="/Contact">Contact Us</router-link></li>
                <div class="flex justify-center">
                    <a class="p-2" href="https://www.facebook.com/boisetuxedoshop/" target="_blank" rel="noopener noreferrer">
                        <img width="32px" height="32px" src="/Facebook_Logo_Primary.webp" alt="Facebook" />
                    </a>
                    <a class="p-2" href="https://www.instagram.com/boisetuxedoshop/" target="_blank" rel="noopener noreferrer">
                        <img width="32px" height="32px" src="/Instagram_Glyph_Gradient.webp" alt="Instagram" />
                    </a>
                </div>
            </ul>
        </nav>
        <NewsBanner />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SearchBar from '../SearchBar.vue';
import NewsBanner from '../NewsBanner.vue';

let rentOrBuyNavOpen = ref(false);

const handleRentOrBuyNavOpen = (e) => {
    rentOrBuyNavOpen.value = true;
    document.addEventListener('click', handleRentOrBuyNavClose);
    document.getElementById('rentOrBuyNavList').addEventListener('mouseleave', handleRentOrBuyNavClose);
    document.getElementById('navMenu').addEventListener('mouseleave', handleRentOrBuyNavClose);
}

const handleRentOrBuyNavClose = (e) => {
    rentOrBuyNavOpen.value = false;
    console.log('handleRentOrBuyNavClose fired off');
}
    
onMounted(() => {
    document.getElementById('rentOrBuyLink').addEventListener('mouseenter', handleRentOrBuyNavOpen);
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