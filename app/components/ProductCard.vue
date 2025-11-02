<template>
  <article
    class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <figure class="relative aspect-square w-full bg-slate-100 p-6">
      <img
        :src="image"
        :alt="imageAlt || title"
        class="h-full w-full object-contain"
        loading="lazy"
      />
    </figure>
    <header class="mb-4 space-y-1 px-6 pt-6">
      <p v-if="subtitle" class="text-xs font-semibold uppercase tracking-[0.25em] text-primary-500">
        {{ subtitle }}
      </p>
      <h3 class="text-2xl font-semibold text-slate-900">
        {{ title }}
      </h3>
    </header>

    <p class="flex-1 px-6 text-sm leading-relaxed text-slate-600">
      {{ description }}
    </p>

    <footer class="mt-6 flex items-center justify-between gap-4 px-6 pb-6">
      <span class="text-lg font-bold text-slate-900">
        {{ formattedPrice }}
      </span>
      <slot name="action" />
    </footer>
  </article>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'ARS'
  }
})

const formattedPrice = computed(() => {
  try {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: props.currency,
      maximumFractionDigits: 0
    }).format(props.price)
  } catch {
    return `${props.currency} ${props.price}`
  }
})
</script>
