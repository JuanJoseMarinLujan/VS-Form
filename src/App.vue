<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header class="h-20 w-full flex justify-center items-center bg-secundaryColor shadow-md">
    <article class="flex w-4/5 max-w-7xl justify-around p-2">
      <a href="/" class="text-4xl text-mainColor font-bold">VS - Form</a>
      <article class="flex justify-around items-center gap-10">
        <a
          :class="[this.$route.fullPath === '/' ? 'text-grayColor font-semibold' : this.$route.fullPath === '/Paso2' || this.$route.fullPath === '/Paso3' ? 'text-green font-semibold' : this.$route.fullPath === '/Paso1' ? 'text-mainColor font-semibold' : '']">Paso
          1 <i class="uil uil-check-circle"></i></a>
        <a
          :class="[this.$route.fullPath === '/' || this.$route.fullPath === '/Paso1' ? 'text-grayColor font-semibold' : this.$route.fullPath === '/Paso3' ? 'text-green font-semibold' : this.$route.fullPath === '/Paso2' ? 'text-mainColor font-semibold' : '']">Paso
          2 <i class="uil uil-check-circle"></i></a>
        <a
          :class="[this.$route.fullPath === '/' || this.$route.fullPath === '/Paso1' || this.$route.fullPath === '/Paso2' ? 'text-grayColor font-semibold' : this.$route.fullPath === '/Paso3' ? 'text-mainColor font-semibold' : '']">Paso
          3 <i class="uil uil-check-circle"></i></a>
      </article>
    </article>
  </header>
  <main class="h-full min-h-[800px] w-full flex flex-col justify-center items-start py-16 gap-10">
    <RouterView />
  </main>
  <footer class="h-14 w-full flex flex-col justify-center items-center bg-mainColor shadow-lg">
    <h2 class="text-sm text-secundaryColor font-semibold">VS-Form</h2>
    <p class="text-secundaryColor text-base font-bold">Juan Jose Marin Lujan</p>
  </footer>
</template>

<style scoped></style>
