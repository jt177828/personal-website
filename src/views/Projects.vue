<template>
  <div class="projects-page">
    <h2 class="page-title">Projects</h2>

    <div class="card">
      <div class="card-content">
        <h3 class="project-title">Personal website</h3>
        <p class="project-description">Built a Vue.js + TypeScript website to showcase my experiences</p>
        <div class="card-footer">
          <a href="https://github.com/jt177828/personal-website" target="_blank" class="github-link">
            <span class="link-text">View on Github</span>
            <span class="link-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.page-title {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: #54e880;
  border-radius: 2px;
}

.card {
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  background-color: rgba(255, 255, 255, 0.03);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: rgba(84, 232, 128, 0.3);
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
}

.project-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.card-footer {
  display: flex;
  justify-content: flex-start;
  border-top: 1px solid rgba(204, 204, 204, 0.1);
  padding-top: 1rem;
  margin-top: 0.5rem;
}

.github-link {
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.github-link:hover {
  color: #54e880;
  cursor: pointer;
}

.link-text {
  margin-right: 0.5rem;
}

.link-icon {
  transition: transform 0.2s ease;
}

.github-link:hover .link-icon {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .projects-page {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .card {
    padding: 1.2rem;
  }
}
</style>