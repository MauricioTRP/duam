<template>
  <footer class="app-footer">
    <div class="app-footer__container">
      <p class="app-footer__copyright">
        © 2026 DUAM Preuniversitario. Educamos la voluntad.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-footer {
  background-color: var(--color-primary-navy);
  color: var(--color-primary-white);
  padding: var(--spacing-xl) 0;
  margin-top: auto;
}

.app-footer__container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  text-align: center;
}

.app-footer__copyright {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  margin: 0;
  color: var(--color-primary-white);
}

@media (max-width: 768px) {
  .app-footer {
    padding: var(--spacing-lg) 0;
  }

  .app-footer__copyright {
    font-size: var(--font-size-xs);
  }
}
</style>
