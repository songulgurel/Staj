<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit Songuls
      <code>Kurs sayfalarına hoşgeldiniz. </code> 
    </p>
  </div>

  <p>
    BTK Akademi
    <a href="https://www.btkakademi.gov.tr/portal/certificates" target="_blank"
      >sertifikalarınızı</a
    > görüntülemek için tıklayınız.
  </p>
  <p>
    Yazılım kurslarına erişmek için
    <a
      href="https://www.btkakademi.gov.tr/portal/catalog?categoryId=353"
      target="_blank"
      >tıklayınız.</a
    >.
  </p>
  <p class="read-the-docs">Linke tıklayarak siz de yazılım sertifikası alabilirsiniz.</p>
</template>

<style scoped>
.read-the-docs {
  color: #4b5379;
}
</style>  
