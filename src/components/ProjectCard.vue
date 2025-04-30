<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a :href="link" target="_blank">View Project</a>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string
    description: string
    link: string
  }>()
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
  }
  a {
    color: blue;
    text-decoration: underline;
  }
  </style>
  