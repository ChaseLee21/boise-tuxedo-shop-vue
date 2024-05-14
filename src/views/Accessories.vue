<template>
  <Header :title = "headerProps.title" :content = "headerProps.content" />
  <main class="m-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
    <section>
      <h2 class="text-2xl font-bold">Available Accessories</h2>
      <article>
        <p>
        Below are a list of accessories that we offer:  
        </p>
        <ul>
          <li v-for="item in availble" :key="item" class="list-disc list-inside">
            {{ item }}
          </li>
        </ul>
      </article>
    </section>
    <section class="border border-black">
      <h2 class="text-2xl font-bold">Available Colors</h2>
      <p>
        We have over 100 different colors and patterns to choose from. 
        In order to help you find the perfect accessory, we have provided a color swatch for each color we offer.
        If you already have a color in mind, you can use the color picker below and we will find colors that are a close match.
      </p>
      <div class="flex flex-col justify-center items-start">
        <div>
          <label for="filterCheckBox" class="mx-2 ">Enable Color Filter:</label>
          <input id="filterCheckBox" type="checkbox" v-on:click="userWantsFilter = !userWantsFilter">
        </div>
        <div>
          <label for="usersColor" class="mx-2" >Color:</label>
          <input id="usersColor" type="color" >
        </div>
      </div>
      <ColorSwatches class="border border-black" :colorSwatches="filteredColorSwatches" @swatch-clicked="handleSwatchClicked" />
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
  If you are interested in another accessory, such as our cufflinks or pocket handkerchiefs, we do have those options availble to add on to your rental or purchase.`
}

const availble = ['self tie neck tie', 'self tie bow tie', 'pre tied bow tie', 'suspenders', 'pocket handkerchief'];

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