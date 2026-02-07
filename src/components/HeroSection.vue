<template>
  <section class="hero-section" aria-label="Sección principal de matrícula">
    <div class="hero-section__overlay" aria-hidden="true"></div>
    <div class="hero-section__container">
      <div class="hero-section__content">
        <h1 class="hero-section__headline">MATRÍCULA 2026 ABIERTA</h1>
        <p class="hero-section__subheading">PREU DUAM</p>
        <p class="hero-section__description">
          Si tu objetivo es llegar a la Universidad, prepárate para la PAES en el PREU DUAM,
          con más de 10 años de experiencia en la provincia de Chiloé
          y un equipo docente con experiencia y comprometido con el
          proceso educativo de cada estudiante.
        </p>
        <p class="hero-section__description">
          Clases en modalidad presencial y Online
        </p>
        <DuamButton variant="primary" class="hero-section__cta" @click="scrollToContact" aria-label="Ir a formulario de inscripción">
          Inscríbete Aquí
        </DuamButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DuamButton from './DuamButton.vue'
import { ref, onMounted } from 'vue'

const contactSection = ref<HTMLElement | null>(null)

onMounted(() => {
  contactSection.value = document.getElementById('contacto')
})

const scrollToContact = () => {
  if (contactSection.value) {
    contactSection.value.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-accent-teal) 0%, var(--color-primary-green) 100%);
  color: var(--color-primary-white);
  padding-top: 80px;
  overflow: hidden;
}

.hero-section__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.hero-section__container {
  position: relative;
  z-index: 2;
  max-width: var(--container-max-width);
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-4xl) var(--container-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-section__content {
  max-width: 800px;
  text-align: center;
}

.hero-section__headline {
  font-family: var(--font-heading);
  font-size: var(--font-size-5xl);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary-white);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-section__subheading {
  font-family: var(--font-heading);
  font-size: var(--font-size-3xl);
  font-weight: 600;
  margin-bottom: var(--spacing-xl);
  color: var(--color-accent-gold);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.hero-section__description {
  font-family: var(--font-body);
  font-size: var(--font-size-xl);
  line-height: 1.6;
  margin-bottom: var(--spacing-2xl);
  color: rgba(255, 255, 255, 0.95);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-section__cta {
  font-size: var(--font-size-xl);
  padding: var(--spacing-lg) var(--spacing-2xl);
}

@media (max-width: 1024px) {
  .hero-section__headline {
    font-size: var(--font-size-4xl);
  }

  .hero-section__subheading {
    font-size: var(--font-size-2xl);
  }

  .hero-section__description {
    font-size: var(--font-size-lg);
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 80vh;
    padding-top: 70px;
  }

  .hero-section__container {
    padding: var(--spacing-2xl) var(--container-padding);
  }

  .hero-section__headline {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-md);
  }

  .hero-section__subheading {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-lg);
  }

  .hero-section__description {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-xl);
  }

  .hero-section__cta {
    font-size: var(--font-size-lg);
    padding: var(--spacing-md) var(--spacing-xl);
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 375px) {
  .hero-section__headline {
    font-size: var(--font-size-2xl);
  }

  .hero-section__subheading {
    font-size: var(--font-size-lg);
  }
}
</style>
