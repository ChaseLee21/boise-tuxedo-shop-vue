<template>
  <Header :title="headerProps.title" />
  <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
    <a class="link" href="https://app.termly.io/document/terms-of-service/77a808f4-8ce3-4281-aff7-a12207f3a990">
    Click here to read our Terms of Use.
  </a>
  </main>
</template>
<script setup>
import Header from '../components/Header.vue';

const headerProps = {
  title: `Terms of Use`,
}
</script>