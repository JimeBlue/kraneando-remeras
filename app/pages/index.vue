<template>
  <section class="bg-primary-500">
    <div class="container">
      <h1 class="flex flex-col font-headline uppercase tracking-[.45em] text-center lg:text-center">
        <span
          class="text-red-500 headline-outline text-4xl min-[425px]:text-5xl md:text-6xl lg:text-8xl xl:text-[120px] break-words"
          v-motion :initial="{ y: 100, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 1000, ease: 'easeOut' } }">
          kra<wbr>neando
        </span>
        <span
          class="text-white headline-outline relative text-3xl min-[425px]:text-4xl min-[500px]:text-5xl md:text-6xl lg:ml-24 lg:text-8xl xl:text-[120px]"
          v-motion :initial="{ y: 100, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 1000, delay: 500, ease: 'easeOut' } }">
          remera<span class="relative inline-block">
            s
            <!-- <SpinningText text="deslizà para descrubrir" :duration="10" :radius="8"
              class="absolute -top-8 -right-8 text-xs lowercase text-white/80 w-16 h-16 lg:w-32 lg:h-32" /> -->
          </span>
        </span>
      </h1>
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

const { t } = useI18n()

</script>
