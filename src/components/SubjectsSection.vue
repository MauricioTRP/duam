<template>
  <section class="subjects-section" aria-labelledby="subjects-title">
    <div class="subjects-section__container">
      <h2 id="subjects-title" class="subjects-section__title">Nuestro Enfoque Académico</h2>
      <div class="subjects-section__grid">
        <!-- Matematicas -->
        <DuamCard hover class="subjects-section__card">
          <template #icon>
            <IconCalculator />
          </template>
          <template #title>
            Matemáticas (M1)
          </template>
          <template #subtitle>
            ¡Menos memoria, más estrategia!
          </template>
          <template #content>
            En la prueba obligatoria de Competencia Matemática M1,
            entregamos herramientas que permitan pensar de manera lógica y pensamiento matemático.
            Reforzamos las bases de 1° a 2° medio, enfocándonos en la resolución de problemas reales,
            el manejo del tiempo y tácticas para evitar errores comunes.
          </template>
          <template #footer>
            Transforma los números en tu mejor aliado para subir tu puntaje.
          </template>
        </DuamCard>

        <!-- Competencia lectora -->
        <DuamCard hover class="subjects-section__card">
          <template #icon>
            <IconBook />
          </template>
          <template #title>
            Competencia Lectora
          </template>
          <template #subtitle>
            ¡El poder de interpretar con precisión!
          </template>
          <template #content>
            En la aprueba obligatoria de Comprensión lectora te enseñamos a descodificar.
            Aprenderás a desarrollar habilidades críticas de rastreo,
            inferencia y evaluación de textos,
            identificar distractores y a dominar el vocabulario en contexto
            para asegurar respuestas correctas en la prueba más transversal de todas.
          </template>
          <template #footer>
            Esta es la materia que potencia a todas las demás.
          </template>
        </DuamCard>

        <!-- Ciencias -->
        <DuamCard hover class="subjects-section__card">
          <template #icon>
            <IconFlask />
          </template>
          <template #title>
            Ciencias
          </template>
          <template #subtitle>
            ¡Razonamiento científico para un mundo complejo!
          </template>
          <template #content>
            Explora la Biología, Física y Química desde el método científico.
            Te preparamos para dominar tanto el tronco común como tu mención electiva,
            priorizando el análisis de datos, gráficos y experimentos.
          </template>
          <template #footer>
            Convierte la curiosidad en conocimiento
          </template>
        </DuamCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DuamCard from './DuamCard.vue'
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
