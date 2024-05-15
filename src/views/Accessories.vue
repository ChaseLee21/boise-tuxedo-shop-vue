<template>
  <Header :title = "headerProps.title" :content = "headerProps.content" />
  <main class="m-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
    <section >
      <h2 class="text-xl lg:text-2xl font-bold py-2">Available Accessories</h2>
      <article>
        <p>
          Below are a list of accessories that we offer in our large selection of colors and patterns:  
        </p>
        <ul class="list-disc list-inside">
          <li>Self Tie Neck Tie</li>
          <li>Self Tie Bow Tie</li>
          <li>Pre Tied Bow Tie</li>
          <li>Suspenders</li>
          <li>Pocket Handkerchief</li>
        </ul>
      </article>
    </section>
    <section>
      <h2 class="text-xl lg:text-2xl font-bold py-2">Available Colors</h2>
      <article>
        <p>
          We have over 100 different colors and patterns to choose from. 
          In order to help you find the perfect accessory, we have provided a color swatch for each color we offer.
          If you already have a color in mind, you can use the color picker below and we will find colors that are a close match.
        </p>
      </article>
      <div class="flex flex-col justify-center items-start">
        <div>
          <label for="filterCheckBox" class="mx-2">Enable Color Filter:</label>
          <input id="filterCheckBox" type="checkbox" v-on:click="userWantsFilter = !userWantsFilter">
        </div>
        <div>
          <label for="usersColor" class="mx-2" >Color:</label>
          <input id="usersColor" type="color" >
        </div>
      </div>
      <ColorSwatches :colorSwatches="filteredColorSwatches" />
    </section>
  </main>
</template>
<script setup>
import Header from '../components/Header.vue';
import { ref, onMounted, computed } from 'vue';
import { sortColorSwatchArray } from '../utils/helpers.js';
import ColorSwatches from '../components/ColorSwatches.vue';

// variables
const headerProps = {
  title: 'Accessories',
  content: `Boise Tuxedo Shop believes that finding the perfect accessory is what makes your outfit truly unique. 
  That is why we offer a wide selection of formal accessories to complement your tuxedo or suit package. 
  Included in your rental is your choice of neckwear or suspenders.
  We also offer other accessories, such as our cufflinks or tie clips, that you can add to your rental or purchase.`
}

let colorSwatches = ref([]);
let userWantsFilter = ref(false);
let userColorInput = ref();

// methods
async function getAllColors() {
  await fetch('https://www.boisetuxedoshop.com/api/color')
    .then(response => response.json())
    .then(data => colorSwatches.value = data)
    .catch(error => console.error(error))
}

// computed properties
let userColorInputUpperLimit = computed(() => {
  return {
    r: parseInt(userColorInput.value.slice(1, 3), 16) + 75,
    g: parseInt(userColorInput.value.slice(3, 5), 16) + 75,
    b: parseInt(userColorInput.value.slice(5, 7), 16) + 75
  }
});
let userColorInputLowerLimit = computed(() => {
  return {
    r: parseInt(userColorInput.value.slice(1, 3), 16) - 75,
    g: parseInt(userColorInput.value.slice(3, 5), 16) - 75,
    b: parseInt(userColorInput.value.slice(5, 7), 16) - 75
  }
});
let filteredColorSwatches = computed(() => {
  if (userWantsFilter.value) {
    return colorSwatches.value.filter((swatch) => {
      let swatchR = parseInt(swatch.hexCode.slice(1, 3), 16);
      let swatchG = parseInt(swatch.hexCode.slice(3, 5), 16);
      let swatchB = parseInt(swatch.hexCode.slice(5, 7), 16);
      return (swatchR >= userColorInputLowerLimit.value.r && swatchR <= userColorInputUpperLimit.value.r) &&
        (swatchG >= userColorInputLowerLimit.value.g && swatchG <= userColorInputUpperLimit.value.g) &&
        (swatchB >= userColorInputLowerLimit.value.b && swatchB <= userColorInputUpperLimit.value.b);
    })
  } else {
    return colorSwatches.value;
  }
})

// lifecycle hooks
onMounted(async () => {
  document.title = 'Accessories | Boise Tuxedo Shop';
  await getAllColors();
  sortColorSwatchArray(colorSwatches.value);
  if (colorSwatches.value && colorSwatches.value.length > 0) userColorInput.value = colorSwatches.value[0].hexCode;
  // color picker event listener
  document.getElementById('usersColor').addEventListener('change', (event) => {
    document.getElementById('filterCheckBox').checked = true;
    userWantsFilter.value = true;
    userColorInput.value = event.target.value;
  })
})

</script>