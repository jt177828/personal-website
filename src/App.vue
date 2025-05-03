<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
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
