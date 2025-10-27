<template>
  <section class="bg-primary-500">
    <div class="container">
      <div >
        <h1
          class="flex flex-col font-headline uppercase tracking-[.45em] text-center lg:text-center relative border border-pink-400">
          <span
            class="text-red-500 headline-outline text-4xl min-[425px]:text-5xl md:text-6xl lg:text-8xl xl:text-[120px] break-words"
            v-motion :initial="{ y: 100, opacity: 0 }"
            :enter="{ y: 0, opacity: 1, transition: { duration: 1000, ease: 'easeOut' } }">
            kra<wbr>neando
          </span>
          <span
            class="text-white headline-outline text-3xl min-[425px]:text-4xl min-[500px]:text-5xl md:text-6xl lg:ml-24 lg:text-8xl xl:text-[120px]"
            v-motion :initial="{ y: 100, opacity: 0 }"
            :enter="{ y: 0, opacity: 1, transition: { duration: 1000, delay: 500, ease: 'easeOut' } }">
            remeras
          </span>
        </h1>
        <SpinningBadge class="" />
      </div>
      <div class="hero-remera">
        <img src="/images/remera-lista-azul.png" alt="Remera color azul"
          class="hero-remera__image hero-remera__image--primary" />
        <img src="/images/remera-lista-negra.png" alt="Remera color negra"
          class="hero-remera__image hero-remera__image--secondary" />
        <img src="/images/remera-lista-blanca.png" alt="Remera color blanca"
          class="hero-remera__image hero-remera__image--tertiary" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SpinningBadgeTest from '~/components/SpinningBadge.vue'

const { t } = useI18n()
</script>
