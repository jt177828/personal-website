<template>
  <header class="navbar">
    <div class="nav-container">
      <button class="mobile-menu-button" @click="toggleMobileMenu" aria-label="Toggle navigation menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      
      <nav class="nav-links" :class="{ 'active': mobileMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMobileMenu">Home</router-link>
        <router-link to="/about" class="nav-link" @click="closeMobileMenu">About</router-link>
        <router-link to="/projects" class="nav-link" @click="closeMobileMenu">Projects</router-link>
        <router-link to="/courses" class="nav-link" @click="closeMobileMenu">Courses</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  }

}
</script>
  
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #080b0f;
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: center; /* Center the navigation */
  align-items: center;
  position: relative; /* For positioning the mobile button */
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center; /* Center the links */
}

.nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: white;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #54e880;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active {
  color: white;
}

.router-link-active::after {
  width: 100%;
  background-color: #54e880;
  box-shadow: 0 0 8px rgba(84, 232, 128, 0.5);
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  position: flex;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0.75rem 1.5rem;
    justify-content: flex-start; /* Adjust for mobile */
  }
  
  .mobile-menu-button {
    display: block;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    left: -100%;
    width: 70%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: #080b0f;
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    gap: 2.5rem;
    padding: 2rem;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
  }
  
  .nav-links.active {
    left: 0;
  }
  
  .nav-link {
    font-size: 1.2rem;
  }
  
  /* Hamburger menu animation */
  .mobile-menu-button.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .mobile-menu-button.active .bar:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-button.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>