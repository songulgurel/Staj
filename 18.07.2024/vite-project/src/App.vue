<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://www.btkakademi.gov.tr/portal" target="_blank">
      <img src="/src/assets/images.png" class="logo btk" alt="btk logo" />
    </a>
    <a href="https://bilgeis.net/" target="_blank">
      <img src="/src/assets/bilgeis.jpg" class="bilgeis logo " alt="logo bilgeis" />
    </a>
  </div>
  <HelloWorld msg="Bilgeiş + BTK Akademi" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #934b9daa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
