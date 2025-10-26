<template>
  <section class="space-y-4 container">
    <div class="grid gri lg:grid-cols-2 gap-6">
      <img 
        v-motion-slide-visible-once-left
        src="/images/sample.jpg" 
        alt=""
      >
      <article>
        <h1 
          v-motion-slide-visible-once-right
          class="text-3xl font-heading font-semibold text-slate-900"
        >
          {{ t('about.title') }}
        </h1>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          class="text-base text-slate-500"
        >
          {{ t('about.intro') }}
        </p>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 600 } }"
          class="text-base text-slate-500"
        >
          {{ t('about.details') }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>
