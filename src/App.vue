<script setup lang="ts">
</script>

<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template> 

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 5rem;
}
</style>
