<template>
  <Header :title = "headerProps.title" :content = "headerProps.content" />
  <main class="m-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
    <section>
      
    </section>
    <ColorSwatches :colorSwatches="colorSwatches" />
  </main>
</template>
<script setup>
import Header from '../components/Header.vue';
import { ref, onMounted } from 'vue';
import { sortColorSwatchArray } from '../utils/helpers.js';
import ColorSwatches from '../components/ColorSwatches.vue';

onMounted(() => {
  document.title = 'Accessories | Boise Tuxedo Shop';
  sortColorSwatchArray(colorSwatches.value);
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