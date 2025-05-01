<template>
    <header class="navbar">
      <div class="nav-container">
        <nav class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/courses">Courses</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #192429;
    z-index: 1000;
  }
  
  .nav-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .logo {
    font-weight: bold;
    font-size: 2.5rem;
    color: #333;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
  }
  
  .router-link-active {
    border-bottom: 2px solid #54e880;
  }
  
  router-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
  </style>
  