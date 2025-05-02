<template>
    <div class="about-page">
      <div class="container">
        <section class="about-section">
          <h2 class="section-title">About Me</h2>
          <div class="section-content">
            <div class="about-card">
              <p class="intro">
                Second-year student at the University of Waterloo, pursuing a degree in Mathematics. 
              </p>
            </div>
          </div>
        </section>
  
        <section class="skills-section">
          <h2 class="section-title">Skills</h2>
          <div class="section-content">
            <div class="skills-container">
              <div class="skills-category">
                <h3 class="category-title">Languages</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <i class="devicon-javascript-plain colored"></i>
                    <span class="skill-name">JavaScript</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-typescript-plain colored"></i>
                    <span class="skill-name">TypeScript</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-python-plain colored"></i>
                    <span class="skill-name">Python</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-java-plain colored"></i>
                    <span class="skill-name">Java</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-c-plain colored"></i>
                    <span class="skill-name">C</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-cplusplus-plain colored"></i>
                    <span class="skill-name">C++</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-html5-plain colored"></i>
                    <span class="skill-name">HTML</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-css3-plain colored"></i>
                    <span class="skill-name">CSS</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-bash-plain"></i>
                    <span class="skill-name">Bash</span>
                  </div>
                </div>
              </div>
              
              <div class="skills-category">
                <h3 class="category-title">Frameworks + libraries</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <i class="devicon-vuejs-plain colored"></i>
                    <span class="skill-name">Vue.js</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-react-original colored"></i>
                    <span class="skill-name">React</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-numpy-plain colored"></i>
                    <span class="skill-name">Numpy</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-express-original colored"></i>
                    <span class="skill-name">Express</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-tailwindcss-original colored"></i>
                    <span class="skill-name">Tailwind</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-pytorch-original colored"></i>
                    <span class="skill-name">Pytorch</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-streamlit-plain colored"></i>
                    <span class="skill-name">Streamlit</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-selenium-original colored"></i>
                    <span class="skill-name">Selenium</span>
                  </div>
                </div>
              </div>
              
              <div class="skills-category">
                <h3 class="category-title">Tools + technologies</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <i class="devicon-linux-plain"></i>
                    <span class="skill-name">Linux</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-git-plain colored"></i>
                    <span class="skill-name">Git</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-github-original"></i>
                    <span class="skill-name">GitHub</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-nodejs-plain colored"></i>
                    <span class="skill-name">Node.js</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-vscode-plain colored"></i>
                    <span class="skill-name">VSCode</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-postman-plain colored"></i>
                    <span class="skill-name">Postman</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-mongodb-plain colored"></i>
                    <span class="skill-name">MongoDB</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-powershell-plain"></i>
                    <span class="skill-name">Powershell</span>
                  </div>
                  <div class="skill-item">
                    <i class="devicon-vite-original colored"></i>
                    <span class="skill-name">Vite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about-page {
    padding: 6rem 1.5rem 3rem;
    min-height: 100vh;
  }
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #54e880;
    border-radius: 2px;
  }
  
  .section-content {
    margin-bottom: 4rem;
  }
  
  .about-card {
    border: 1px solid rgba(204, 204, 204, 0.2);
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .intro {
    font-size: 1.2rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
  }
  
  .about-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .detail-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .detail-icon {
    background-color: rgba(84, 232, 128, 0.1);
    color: #54e880;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  
  .detail-content h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .detail-content p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }
  
  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  
  .skills-category {
    border: 1px solid rgba(204, 204, 204, 0.2);
    border-radius: 8px;
    padding: 1.2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .category-title {
    font-size: 1.3rem;
    margin: 0 0 1.5rem 0;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    display: inline-block;
    padding-bottom: 0.5rem;
  }
  
  .category-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: rgba(84, 232, 128, 0.7);
    border-radius: 2px;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1.5rem;
  }
  
  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .skill-item:hover {
    transform: translateY(-5px);
  }
  
  .skill-item i {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
  }
  
  .skill-name {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.8);
  }
  
  @media (max-width: 768px) {
    .about-page {
      padding: 5rem 1rem 2rem;
    }
    
    .section-title {
      font-size: 1.8rem;
    }
    
    .intro {
      font-size: 1.1rem;
    }
    
    .about-details {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      gap: 1rem;
    }
    
    .skill-item i {
      font-size: 2rem;
    }
  }
  </style>