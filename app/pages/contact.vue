<template>
  <section class="space-y-4 container">
    <h1 class="text-3xl font-heading font-semibold text-slate-900">
      {{ t('contact.title') }}
    </h1>
    <p class="text-base text-slate-500">
      {{ t('contact.intro') }}
    </p>
    <UAlert
      color="primary"
      variant="subtle"
      :description="t('contact.alert')"
    />
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>
