<template>
    <Header :title = "headerProps.title" />
</template>
<script setup>
import Header from '../components/Header.vue'

const headerProps = {
  title: 'Accessories'
}

</script>