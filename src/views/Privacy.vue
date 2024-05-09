<template>
  <Header :title="headerProps.title" />
  <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
    <a class="link" href="https://app.termly.io/document/privacy-policy/daa297aa-9a40-4820-8d62-0f4dae3aac2e">
    Click here to read our Privacy Policy.
  </a>
  </main>
</template>
<script setup>
import Header from '../components/Header.vue';

const headerProps = {
  title: `Privacy Policy`,
}
</script>