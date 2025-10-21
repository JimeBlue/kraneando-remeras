<template>
  <section class="space-y-4 container">
    <h1 class="text-3xl font-heading font-semibold text-slate-900">
      {{ t('about.title') }}
    </h1>
    <p class="text-base text-slate-500">
      {{ t('about.intro') }}
    </p>
    <p class="text-base text-slate-500">
      {{ t('about.details') }}
    </p>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>
