<template>
  <a
    :href="href"
    class="contact-item"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel"
  >
    <div class="contact-item__icon">
      <slot name="icon"></slot>
    </div>
    <div class="contact-item__content">
      <span class="contact-item__label">{{ label }}</span>
      <span class="contact-item__value">{{ value }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  label: string
  value: string
  ariaLabel: string
  external?: boolean
}>()
</script>

<style scoped>
.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background-color: var(--color-primary-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}

.contact-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.contact-item__icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-soft);
  border-radius: var(--radius-md);
  color: var(--color-primary-green);
}

.contact-item__icon :deep(svg) {
  width: 28px;
  height: 28px;
}

.contact-item__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.contact-item__label {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-item__value {
  font-family: var(--font-body);
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-primary-green);
}

@media (max-width: 768px) {
  .contact-item {
    padding: var(--spacing-lg);
  }

  .contact-item__icon {
    width: 48px;
    height: 48px;
  }

  .contact-item__icon :deep(svg) {
    width: 24px;
    height: 24px;
  }
}
</style>
