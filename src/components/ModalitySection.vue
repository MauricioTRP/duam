<template>
  <section class="modality-section" aria-labelledby="modality-title">
    <div class="modality-section__container">
      <h2 id="modality-title" class="modality-section__title">Modalidades de Estudio</h2>
      <div class="modality-section__grid">
        <Card hover class="modality-section__card">
          <template #icon>
            <IconClassroom />
          </template>
          <template #title>
            PRESENCIAL EN ANCUD
          </template>
          <template #content>
            Clases interactivas en nuestro centro educativo. Aprende en un ambiente
            presencial con profesores experimentados y compañeros de estudio.
          </template>
        </Card>

        <Card hover class="modality-section__card">
          <template #icon>
            <IconLaptop />
          </template>
          <template #title>
            ONLINE EN LA PROVINCIA
          </template>
          <template #content>
            Aprende desde cualquier lugar con nuestro aula virtual. Accede a clases
            en vivo, materiales de estudio y apoyo docente desde la comodidad de tu hogar.
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import IconClassroom from './icons/IconClassroom.vue'
import IconLaptop from './icons/IconLaptop.vue'
</script>

<style scoped>
.modality-section {
  padding: var(--section-gap) 0;
  background-color: var(--color-background-soft);
}

.modality-section__container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.modality-section__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: 700;
  text-align: center;
  color: var(--color-heading);
  margin-bottom: var(--spacing-3xl);
}

.modality-section__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-2xl);
}

@media (max-width: 768px) {
  .modality-section {
    padding: var(--spacing-2xl) 0;
  }

  .modality-section__title {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-xl);
  }

  .modality-section__grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}
</style>
