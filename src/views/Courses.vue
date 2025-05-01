<template>
  <div class="coursework-page">
    <h2 class="page-title">Courses</h2>

    <!-- Spring 2025 Section -->
    <div class="term-section">
      <div class="term-indicator">
        <span class="term-badge">S25</span>
        <span class="term-name">Spring 2025</span>
      </div>
      
      <div class="card">
        <div class="card-content">
          <div class="course-header">
            <h3 class="course-title">Introduction to Optimization</h3>
            <span class="course-code">CO 250</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Winter 2025 Section -->
    <div class="term-section">
      <div class="term-indicator">
        <span class="term-badge">W25</span>
        <span class="term-name">Winter 2025</span>
      </div>
      
      <div class="card">
        <div class="card-content">
          <div class="course-header">
            <h3 class="course-title">Linear Algebra 1</h3>
            <span class="course-code">MATH 136</span>
          </div>
          <p class="course-description">Linear transformations, special subspaces, eigenvectors and diagonalization</p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="course-header">
            <h3 class="course-title">Calculus 2</h3>
            <span class="course-code">MATH 138</span>
          </div>
          <p class="course-description">Integration, differential equations, numerical and power series, big O notation</p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="course-header">
            <h3 class="course-title">Elementary Algorithm Design and Data Abstraction</h3>
            <span class="course-code">CS 136</span>
          </div>
          <p class="course-description">Sorting algorithms, efficiency, modularization, dynamic memory, abstract data types</p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="course-header">
            <h3 class="course-title">Tools and Techniques for Software Development</h3>
            <span class="course-code">CS 136L</span>
          </div>
          <p class="course-description">Bash scripting, version control/git, build automation, testing and debugging</p>
        </div>
      </div>
    </div>

    <!-- Fall 2024 Section -->
    <div class="term-section">
      <div class="term-indicator">
        <span class="term-badge">F24</span>
        <span class="term-name">Fall 2024</span>
      </div>
      
      <div class="card">
        <div class="card-content">
          <div class="course-header">
            <h3 class="course-title">Algebra</h3>
            <span class="course-code">MATH 135</span>
          </div>
          <p class="course-description">Mathematical proofs, induction, divisibility, modular arithmetic, complex numbers</p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="course-header">
            <h3 class="course-title">Calculus 1</h3>
            <span class="course-code">MATH 137</span>
          </div>
          <p class="course-description">Limits, continuity, sequences, derivatives, mean value theorem, curve sketching</p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="course-header">
            <h3 class="course-title">Designing Functional Programs</h3>
            <span class="course-code">CS 135</span>
          </div>
          <p class="course-description">Functional programming, recursion, higher-order functions, abstraction</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coursework-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.page-title {
  font-size: 2.2rem;
  margin-bottom: 2rem;
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

.term-section {
  margin-bottom: 2.5rem;
}

.term-indicator {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.term-badge {
  background-color: rgba(84, 232, 128, 0.15);
  color: #54e880;
  font-weight: 600;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

.term-name {
  margin-left: 0.75rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

.card {
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 12px;
  padding: 1.25rem;
  margin: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  border-color: rgba(84, 232, 128, 0.2);
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.course-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  flex: 1;
  min-width: 200px;
}

.course-code {
  background-color: rgba(255, 255, 255, 0.08);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  margin-left: 1rem;
}

.course-description {
  color: rgba(255, 255, 255, 0.7);
  margin: 0.5rem 0 0 0;
  line-height: 1.5;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .coursework-page {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .card {
    padding: 1rem;
  }
  
  .course-header {
    flex-direction: column;
  }
  
  .course-code {
    margin: 0.5rem 0 0 0;
  }
  
  .term-indicator {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .term-name {
    margin: 0.5rem 0 0 0;
  }
}
</style>