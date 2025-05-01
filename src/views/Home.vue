<template>
    <section class="home">
      <h1>Justin Tian</h1>
      <p class="subtitle">Math @ University of Waterloo</p>

      <a href="https://github.com/jt177828/" target="_blank"><i class="devicon-github-original"></i></a>
      <a href="https://www.linkedin.com/in/justintian72/" target="_blank"><i class="devicon-linkedin-plain"></i></a>

    </section>
  </template>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 4rem 2rem;
  }
  
  .subtitle {
    font-size: 1.25rem;
    color: #7c858a;
    margin-bottom: 1.5rem;
  }
  
  .intro {
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
  
  .cta {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #007acc;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .cta:hover {
    background-color: white;
  }

  a {
    transition: color 0.08s ease;
    transition-delay: 0.08s; /* delay BEFORE hover transition starts */

    position: relative;
    color: white;
    font-size: 3rem;
    margin: 3rem;
    
  }
  a:hover {
    color: #b8b8b8;
    cursor: pointer;
  }
  </style>
  