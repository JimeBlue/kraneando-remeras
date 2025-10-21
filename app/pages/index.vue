<template>
  <div class="space-y-10 container">
    <section class="space-y-6 text-center">
      <div class="mx-auto flex max-w-3xl flex-col gap-4">
        <UBadge variant="solid" color="primary" size="lg" class="self-center">
          {{ t('home.badge') }}
        </UBadge>
        <h1 class="text-4xl font-heading font-semibold tracking-tight text-blue-900 md:text-5xl">
          {{ t('home.hero.title') }}
        </h1>
        <p class="text-lg text-slate-500 md:text-xl">
          {{ t('home.hero.subtitle') }}
        </p>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <UButton to="https://nuxt.com" target="_blank" color="primary">
          {{ t('home.hero.primaryCta') }}
        </UButton>
        <UButton to="https://tailwindcss.com" target="_blank" variant="outline">
          {{ t('home.hero.secondaryCta') }}
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

<script setup>

const { t } = useI18n()

const features = computed(() => [
  {
    title: t('home.features.ssr.title'),
    description: t('home.features.ssr.description'),
    icon: 'i-carbon:cloud-alerting',
  },
  {
    title: t('home.features.tailwind.title'),
    description: t('home.features.tailwind.description'),
    icon: 'i-carbon:build-tool',
  },
  {
    title: t('home.features.nuxtUi.title'),
    description: t('home.features.nuxtUi.description'),
    icon: 'i-carbon:palette',
  },
])
</script>
