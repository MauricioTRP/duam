<template>
  <div :class="['card', { 'card--hover': hover }]">
    <div v-if="$slots.icon" class="card__icon">
      <slot name="icon"></slot>
    </div>
    <div v-if="$slots.title || title" class="card__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div v-if="$slots.content || description" class="card__content">
      <slot name="content">{{ description }}</slot>
    </div>
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  hover?: boolean
}>()
</script>

<style scoped>
.card {
  background-color: var(--color-primary-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card--hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card__icon {
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: var(--color-background-soft);
  border-radius: var(--radius-md);
  color: var(--color-primary-green);
}

.card__icon :deep(svg) {
  width: 32px;
  height: 32px;
}

.card__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
}

.card__content {
  color: var(--color-text);
  line-height: 1.6;
  flex-grow: 1;
}

.card__footer {
  margin-top: var(--spacing-lg);
}

@media (max-width: 768px) {
  .card {
    padding: var(--spacing-lg);
  }

  .card__icon {
    width: 56px;
    height: 56px;
    margin-bottom: var(--spacing-md);
  }

  .card__icon :deep(svg) {
    width: 28px;
    height: 28px;
  }

  .card__title {
    font-size: var(--font-size-lg);
  }
}
</style>
