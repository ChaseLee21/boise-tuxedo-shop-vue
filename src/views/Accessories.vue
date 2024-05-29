<template>
  <Header :title = "headerProps.title" :content = "headerProps.content" />
  <main class="m-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
    <section class="mb-4">
      <article>
        <h2 class="text-xl lg:text-2xl font-bold py-2">Available Accessories</h2>
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
      <article>
        <h2 class="text-xl lg:text-2xl font-bold py-2">Available Colors</h2>
        <p>
          Below is a list of accessories that we carry in over 100 different colors and patterns.
          In order to help you find the perfect accessory, we have provided a color swatch and picture for each color we offer.
          You can click on the color swatch to see a larger image of the color.
          To filter the colors for your convience, you can use the color picker below to select a color.
          New patterns, styles, and colors are added frequently and this list may not be 100% accurate.
        </p>
      </article>
      <article>
        <h2 class="text-xl lg:text-2xl font-bold py-2">Disclaimer</h2>
        <p>
          Colors may vary slight from the actual accessory color due to the lighting in the photo, the screen you are viewing it on, and the dye lot of the fabric.
          We try to provide the most accurate representation of the color as possible but we recommend coming into the store to see the color in person.
        </p>
      </article>
    </section>
    <section>
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
  const colors = getColorsFromLocalStorage();
  const currentTime = new Date().getTime();
  const twentyFourHours = 24 * 60 * 60 * 1000;

  if (colors && currentTime - colors.timestamp < twentyFourHours) {
    colorSwatches.value = colors.data;
  } else {
    await getColorsFromApi();
    saveColorsToLocalStorage();
  }
}

async function getColorsFromApi() {
  await fetch('https://www.boisetuxedoshop.com/api/color')
    .then(response => response.json())
    .then(data => colorSwatches.value = data)
    .catch(error => console.error(error))
}

function saveColorsToLocalStorage() {
  const colors = {
    timestamp: new Date().getTime(),
    data: colorSwatches.value
  };
  localStorage.setItem('colorSwatches', JSON.stringify(colors));
}

function getColorsFromLocalStorage() {
  const colors = localStorage.getItem('colorSwatches');
  return colors ? JSON.parse(colors) : null;
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