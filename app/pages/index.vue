<template>
  <div class="space-y-10">
    <section class="space-y-6 text-center">
      <div class="mx-auto flex max-w-3xl flex-col gap-4">
        <UBadge variant="solid" color="primary" size="lg" class="self-center">
          Nuxt 4 · Tailwind 4 · Nuxt UI 4
        </UBadge>
        <h1 class="text-4xl font-heading font-semibold tracking-tight text-blue-900 md:text-5xl">
          Starter SSR boilerplate ready for your next project
        </h1>
        <p class="text-lg text-slate-500 md:text-xl">
          This template ships with an opinionated setup using the latest Nuxt, Tailwind CSS, and Nuxt UI so you can focus on building features.
        </p>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <UButton to="https://nuxt.com" target="_blank" color="primary">
          Explore Nuxt 4 Docs
        </UButton>
        <UButton to="https://tailwindcss.com" target="_blank" variant="outline">
          Tailwind CSS Docs
        </UButton>
      </div>
    </section>

    <section class="grid gap-6 md:grid-cols-3">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm"
      >
        <UIcon :name="feature.icon" class="mb-4 h-10 w-10 text-primary-500" />
        <h2 class="mb-2 text-xl font-heading font-semibold text-slate-900">
          {{ feature.title }}
        </h2>
        <p class="text-sm text-slate-500">
          {{ feature.description }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Server-rendered out of the box',
    description: 'SSR mode is enabled so you get SEO benefits immediately without extra configuration.',
    icon: 'i-carbon:cloud-alerting',
  },
  {
    title: 'Tailwind CSS 4',
    description: 'The brand-new Tailwind pipeline is pre-configured via @tailwindcss/postcss.',
    icon: 'i-carbon:build-tool',
  },
  {
    title: 'Nuxt UI 4',
    description: 'Leverage the latest Nuxt UI components, theming, and design tokens globally.',
    icon: 'i-carbon:palette',
  },
] as const
</script>
