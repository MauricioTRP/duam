<template>
  <section id="contacto" class="contact-section" aria-labelledby="contact-title">
    <div class="contact-section__container">
      <h2 id="contact-title" class="contact-section__title">Contacto</h2>
      <p class="contact-section__subtitle">
        Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios.
      </p>
      <div class="contact-section__grid">
        <ContactItem
          href="https://wa.me/56935475684"
          label="Teléfono"
          value="+569 35475684"
          ariaLabel="Escribe al teléfono +569 35475684"
          :external="true"
        >
          <template #icon>
            <IconPhone />
          </template>
        </ContactItem>

        <ContactItem
          href="https://docs.google.com/forms/d/e/1FAIpQLSfVRc2CsyADm9uWxk2QUYAZahOd8G5DrEru-Ed0iLHHveBssw/viewform"
          label="Formulario Contacto"
          value="Escríbenos"
          ariaLabel="Enlace a formulario de contacto"
          :external="true"
        >
          <template #icon>
            <IconGlobe />
          </template>
        </ContactItem>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactItem from './ContactItem.vue'
import IconPhone from './icons/IconPhone.vue'
import IconGlobe from './icons/IconGlobe.vue'
</script>

<style scoped>
.contact-section {
  padding: var(--section-gap) 0;
  background-color: var(--color-background-soft);
}

.contact-section__container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.contact-section__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: 700;
  text-align: center;
  color: var(--color-heading);
  margin-bottom: var(--spacing-md);
}

.contact-section__subtitle {
  font-family: var(--font-body);
  font-size: var(--font-size-lg);
  text-align: center;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-3xl);
}

.contact-section__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .contact-section {
    padding: var(--spacing-2xl) 0;
  }

  .contact-section__title {
    font-size: var(--font-size-2xl);
  }

  .contact-section__subtitle {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-xl);
  }

  .contact-section__grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}
</style>
