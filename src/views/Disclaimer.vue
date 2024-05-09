<template>
  <Header :title="headerProps.title" />
  <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
    <a class="link" href="https://app.termly.io/document/disclaimer/a782a7fa-f1ad-4b68-bc9c-1beb07bcd2ad">
      Click here to read our disclaimer.
    </a>
  </main>
</template>
<script setup>
import Header from '../components/Header.vue';

const headerProps = {
  title: `Disclaimer`,
}
</script>