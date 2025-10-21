<template>
  <section class="space-y-4 container">
    <div class="grid gri lg:grid-cols-2 gap-6">
      <img src="/images/sample.jpg" alt="">
      <article>
        <h1 class="text-3xl font-heading font-semibold text-slate-900">
          {{ t('about.title') }}
        </h1>
        <p class="text-base text-slate-500">
          {{ t('about.intro') }}
        </p>
        <p class="text-base text-slate-500">
          {{ t('about.details') }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>
