<template>
  <header class="app-header" :class="{ 'app-header--scrolled': isScrolled }">
    <div class="app-header__container">
      <div class="app-header__logo">
        <RouterLink to="/" class="app-header__logo-link">
          <span class="app-header__logo-text">DUAM</span>
          <span class="app-header__tagline">PREUNIVERSITARIO</span>
        </RouterLink>
        <span class="app-header__motto">Educamos la voluntad.</span>
      </div>

      <nav class="app-header__nav" :class="{ 'app-header__nav--open': mobileMenuOpen }">
        <RouterLink to="/" class="app-header__nav-link" @click="closeMobileMenu">
          Inicio
        </RouterLink>
        <RouterLink to="/about" class="app-header__nav-link" @click="closeMobileMenu">
          Nosotros
        </RouterLink>
        <a href="#contacto" class="app-header__nav-link" @click="closeMobileMenu">
          Contacto
        </a>
      </nav>

      <button
        class="app-header__menu-toggle"
        @click="toggleMobileMenu"
        :aria-label="mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
        :aria-expanded="mobileMenuOpen"
      >
        <span class="app-header__menu-icon"></span>
        <span class="app-header__menu-icon"></span>
        <span class="app-header__menu-icon"></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-primary-white);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
  transition: all var(--transition-base);
}

.app-header--scrolled {
  box-shadow: var(--shadow-md);
}

.app-header__container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-md) var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-header__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.app-header__logo-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--color-primary-green);
}

.app-header__logo-text {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
}

.app-header__tagline {
  font-family: var(--font-body);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-light);
}

.app-header__motto {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-style: italic;
  color: var(--color-accent-teal);
  display: none;
}

.app-header__nav {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
}

.app-header__nav-link {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
  transition: color var(--transition-fast);
  position: relative;
}

.app-header__nav-link:hover {
  color: var(--color-primary-green);
}

.app-header__nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent-gold);
  transition: width var(--transition-fast);
}

.app-header__nav-link:hover::after,
.app-header__nav-link.router-link-active::after {
  width: 100%;
}

.app-header__menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
}

.app-header__menu-icon {
  width: 24px;
  height: 3px;
  background-color: var(--color-primary-green);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

@media (max-width: 768px) {
  .app-header__container {
    padding: var(--spacing-sm) var(--container-padding);
  }

  .app-header__logo-text {
    font-size: var(--font-size-xl);
  }

  .app-header__tagline {
    font-size: 0.65rem;
  }

  .app-header__motto {
    display: none;
  }

  .app-header__menu-toggle {
    display: flex;
  }

  .app-header__nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-primary-white);
    flex-direction: column;
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
  }

  .app-header__nav--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .app-header__nav-link {
    width: 100%;
    padding: var(--spacing-sm) 0;
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .app-header__motto {
    display: block;
  }
}
</style>
