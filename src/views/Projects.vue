<template>
    <div>
      <h2>My Projects</h2>
      <ProjectCard
        v-for="(p, i) in projects"
        :key="i"
        :title="p.title"
        :description="p.description"
        :link="p.link"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import ProjectCard from '../components/ProjectCard.vue'
  
  const projects = [
    {
      title: 'Wordle Solver Bot',
      description: 'A Selenium script that solves Wordle in your browser.',
      link: 'https://github.com/yourname/wordle-solver'
    },
    {
      title: 'Portfolio Website',
      description: 'This site you’re looking at!',
      link: '#'
    }
  ]
  </script>
  