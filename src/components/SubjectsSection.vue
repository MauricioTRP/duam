<template>
  <section class="subjects-section" aria-labelledby="subjects-title">
    <div class="subjects-section__container">
      <h2 id="subjects-title" class="subjects-section__title">Nuestro Enfoque Académico</h2>
      <div class="subjects-section__grid">
        <Card hover class="subjects-section__card">
          <template #icon>
            <IconCalculator />
          </template>
          <template #title>
            Matemáticas (MI)
          </template>
          <template #content>
            Preparación integral en matemáticas para las pruebas de ingreso universitario.
            Desarrolla habilidades analíticas y resolución de problemas complejos.
          </template>
        </Card>

        <Card hover class="subjects-section__card">
          <template #icon>
            <IconBook />
          </template>
          <template #title>
            Competencia Lectora
          </template>
          <template #content>
            Fortalece tu comprensión lectora y habilidades de análisis textual.
            Mejora tu capacidad de interpretación y comunicación efectiva.
          </template>
        </Card>

        <Card hover class="subjects-section__card">
          <template #icon>
            <IconFlask />
          </template>
          <template #title>
            Ciencias
          </template>
          <template #content>
            Domina los conceptos fundamentales de física, química y biología.
            Prepara tus conocimientos científicos para el ingreso universitario.
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import IconCalculator from './icons/IconCalculator.vue'
import IconBook from './icons/IconBook.vue'
import IconFlask from './icons/IconFlask.vue'
</script>

<style scoped>
.subjects-section {
  padding: var(--section-gap) 0;
  background-color: var(--color-primary-white);
}

.subjects-section__container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.subjects-section__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: 700;
  text-align: center;
  color: var(--color-heading);
  margin-bottom: var(--spacing-3xl);
}

.subjects-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
}

@media (max-width: 1024px) {
  .subjects-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .subjects-section {
    padding: var(--spacing-2xl) 0;
  }

  .subjects-section__title {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-xl);
  }

  .subjects-section__grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}
</style>
