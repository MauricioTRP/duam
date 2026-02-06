<template>
  <section class="cta-section" aria-labelledby="cta-title">
    <div class="cta-section__container">
      <h2 id="cta-title" class="cta-section__title">Prepárate para la Universidad 2026</h2>
      <p class="cta-section__description">
        Contacta hoy mismo para más información y asegura tu cupo.
        Nuestro equipo está listo para ayudarte a alcanzar tus metas académicas.
      </p>
      <div class="cta-section__actions">
        <DuamButton variant="primary" @click="scrollToContact">
          Contáctanos
        </DuamButton>
        <DuamButton variant="outline" @click="scrollToContact">
          Más Información
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
.cta-section {
  padding: var(--section-gap) 0;
  background: linear-gradient(135deg, var(--color-accent-teal) 0%, var(--color-primary-green) 100%);
  color: var(--color-primary-white);
}

.cta-section__container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  text-align: center;
}

.cta-section__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--color-primary-white);
  margin-bottom: var(--spacing-lg);
}

.cta-section__description {
  font-family: var(--font-body);
  font-size: var(--font-size-xl);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin: 0 auto var(--spacing-2xl);
}

.cta-section__actions {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cta-section {
    padding: var(--spacing-2xl) 0;
  }

  .cta-section__title {
    font-size: var(--font-size-2xl);
  }

  .cta-section__description {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-xl);
  }

  .cta-section__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-section__actions .btn {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
}
</style>
