<template>
  <button
    :class="['btn', `btn--${variant}`, { 'btn--full-width': fullWidth }]"
    :type="type"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  white-space: nowrap;
}

.btn--full-width {
  width: 100%;
}

.btn--primary {
  background-color: var(--color-accent-gold);
  color: var(--color-primary-green);
}

.btn--primary:hover {
  background-color: #C19D2E;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn--primary:active {
  transform: translateY(0);
}

.btn--secondary {
  background-color: var(--color-accent-teal);
  color: var(--color-primary-white);
}

.btn--secondary:hover {
  background-color: #0B7D71;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn--outline {
  background-color: transparent;
  color: var(--color-primary-white);
  border-color: var(--color-primary-white);
}

.btn--outline:hover {
  background-color: var(--color-primary-white);
  color: var(--color-primary-green);
}

@media (max-width: 768px) {
  .btn {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: var(--font-size-base);
  }
}
</style>
