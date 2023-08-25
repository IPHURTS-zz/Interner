<script setup>
import Hero from './components/Hero.vue'
import Feature from './components/Section.vue'
import Chart from './components/Chart.vue'
</script>

<template>
  <div>
    <Hero />
    <Feature />
    <Chart />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply text-white;
    background-color: black;
    /* background-image: url("../assets/bg.jpg"); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    height: 100vh;
  }
}
</style>