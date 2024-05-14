<template>
  <Header :title = "headerProps.title" :content = "headerProps.content" />
  <main class="m-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
    <section >
      <h2 class="text-xl lg:text-2xl font-bold py-2">Available Accessories</h2>
      <article>
        <p>
          Below are a list of accessories that we offer in our large selection of colors and patterns:  
        </p>
        <ul>
          <li v-for="item in availble" :key="item" class="list-disc list-inside">
            {{ item }}
          </li>
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
      <ColorSwatches :colorSwatches="filteredColorSwatches" @swatch-clicked="handleSwatchClicked" />
    </section>
  </main>
</template>
<script setup>
import Header from '../components/Header.vue';
import { ref, onMounted, computed } from 'vue';
import { sortColorSwatchArray } from '../utils/helpers.js';
import ColorSwatches from '../components/ColorSwatches.vue';

onMounted(() => {
  document.title = 'Accessories | Boise Tuxedo Shop';
  sortColorSwatchArray(colorSwatches.value);
  document.getElementById('usersColor').addEventListener('change', (event) => {
    document.getElementById('filterCheckBox').checked = true;
    userWantsFilter.value = true;
    userColorInput.value = event.target.value;
  })
  userColorInput.value = colorSwatches.value[0].hexCode;
})

let userWantsFilter = ref(false);
let userColorInput = ref();

function handleSwatchClicked(swatch) {
  userSelectedColor.value = swatch;
  console.log("handleSwatchClicked: ", swatch.color);
}

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

const headerProps = {
  title: 'Accessories',
  content: `Boise Tuxedo Shop believes that finding the perfect accessory is what makes your outfit truly unique. 
  That is why we offer a wide selection of formal accessories to complement your tuxedo or suit package. 
  Included in your rental is your choice of neckwear or suspenders.
  We also offer other accessories, such as our cufflinks or tie clips, that you can add to your rental or purchase.`
}

const availble = ['Self Tie Neck Tie', 'Self Tie Bow Tie', 'Pre Tied Bow Tie', 'Suspenders', 'Pocket Handkerchief'];

const colorSwatches = ref([
  {
    color: 'Black',
    hexCode: '#000000',
    position: 1,
  },
  {
    color: 'White',
    hexCode: '#FFFFFF',
    position: 1,
  },
  {
    color: 'Red',
    hexCode: '#FF0000',
    position: 2,
  },
  {
    color: 'Green',
    hexCode: '#00FF00',
    position: 2,
  },
  {
    color: 'Blue',
    hexCode: '#0000FF',
    position: 2,
  },
  {
    color: 'Yellow',
    hexCode: '#FFFF00',
    position: 3,
  },
  {
    color: 'Cyan',
    hexCode: '#00FFFF',
    position: 4,
  },
  {
    color: 'Magenta',
    hexCode: '#FF00FF',
    position: 5,
  },
  {
    color: 'Gray',
    hexCode: '#808080',
    position: 1,
  }
]);

</script>