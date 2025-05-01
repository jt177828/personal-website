<template>
    <div class="projectspage">
      <h2>Projects</h2>

      <div class="card">
        <h3>Personal website (Vue.js, TypeScript)</h3>
        <p>Built a Vue.js + TypeScript website to showcase my experiences</p>
        <a>View on Github</a>
      </div>

    </div>
  </template>


<style scoped>
  .projectspage {
    transition: all 0.2s ease;
  }

  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
  }
  i {
    font-size: 2rem;
    margin-right: 0.5rem;
    margin-bottom: 2rem;
    color: #54e880;
  }
  a {
    color: white;
    font-size: 0.85rem;
  }
  a:hover {
    color: #54e880;
    cursor: pointer;
  }
  </style>