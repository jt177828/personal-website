<template>
  <section class="home">
    <div class="container">
      <div class="profile-section">
        <!-- Profile image placeholder - uncomment and replace with your image if desired -->
        <!-- <div class="profile-image">
          <img src="/path-to-your-image.jpg" alt="Justin Tian" />
        </div> -->
        
        <div class="profile-content">
          <h1 class="name">Justin Tian</h1>
          <p class="subtitle">Math @ University of Waterloo</p>
          
          <div class="social-links">
            <a href="https://github.com/jt177828/" target="_blank" class="social-link" aria-label="GitHub Profile">
              <i class="devicon-github-original"></i>
              <span class="link-text">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/justintian72/" target="_blank" class="social-link" aria-label="LinkedIn Profile">
              <i class="devicon-linkedin-plain"></i>
              <span class="link-text">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  max-width: 1200px;
  width: 100%;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Uncomment if you add a profile image */
/* .profile-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(84, 232, 128, 0.3);
  margin-bottom: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

.profile-content {
  max-width: 700px;
}

.name {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
  background: #54e880;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.5rem 0 2rem;
  font-weight: 500;
}

.tagline {
  position: relative;
  padding-left: 1.5rem;
  margin: 2rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.accent-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #54e880;
  border-radius: 2px;
}

.tagline p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  text-align: left;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2.5rem 0;
}

.social-link {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
}

.social-link i {
  font-size: 1.8rem;
  margin-right: 0.5rem;
}

.social-link:hover {
  color: #54e880;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.link-text {
  font-weight: 500;
}

@media (max-width: 768px) {
  .home {
    padding: 1.5rem;
    text-align: center;
  }
  
  .name {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .tagline {
    padding-left: 0;
    padding-top: 1.5rem;
  }
  
  .accent-bar {
    left: 50%;
    top: 0;
    bottom: auto;
    width: 60px;
    height: 4px;
    transform: translateX(-50%);
  }
  
  .tagline p {
    text-align: center;
    font-size: 1.1rem;
  }
  
  .social-links {
    gap: 1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>