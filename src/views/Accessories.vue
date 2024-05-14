<template>
  <Header :title = "headerProps.title" :content = "headerProps.content" />
  <main class="m-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
    <div>
      <!-- hiding these inputs for now until ready for implementation -->
      <!-- TODO: implement these filters -->
      <section v-show="userWantsFilter" class="border border-black">
        <input id="filterCheckBox" type="checkbox" v-on:click="userWantsFilter = !userWantsFilter">
        <input id="usersColor" type="color" >
      </section>
      <ColorSwatches class="border border-black" :colorSwatches="filteredColorSwatches" />
    </div>
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

const colorSwatches = ref([
  {
    color: 'Black',
    hexCode: '#000000',
    position: 1,
    tags: ['black', 'bold', 'dark'],
  },
  {
    color: 'White',
    hexCode: '#FFFFFF',
    position: 1,
    tags: ['white', 'light'],
  },
  {
    color: 'Red',
    hexCode: '#FF0000',
    position: 2,
    tags: ['red', 'bold'],
  },
  {
    color: 'Green',
    hexCode: '#00FF00',
    position: 2,
    tags: ['green', 'bold'],
  },
  {
    color: 'Blue',
    hexCode: '#0000FF',
    position: 2,
    tags: ['blue', 'bold'],
  },
  {
    color: 'Yellow',
    hexCode: '#FFFF00',
    position: 3,
    tags: ['yellow', 'bright'],
  },
  {
    color: 'Cyan',
    hexCode: '#00FFFF',
    position: 4,
    tags: ['blue', 'light'],
  },
  {
    color: 'Magenta',
    hexCode: '#FF00FF',
    position: 5,
    tags: ['pink', 'light'],
  },
  {
    color: 'Gray',
    hexCode: '#808080',
    position: 1,
    tags: ['gray', 'neutral'],
  }
]);

</script>