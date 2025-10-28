<template>
  <section class="bg-primary-500 py-16">
    <div class="container">
      <div class="relative">
        <h1 class="flex flex-col font-headline uppercase tracking-[8px] text-center text-[clamp(9vw,10vw,8vw)]">
          <span class="flex flex-col lg:flex-row items-center justify-center text-red-500 headline-outline leading-none"
            v-motion :initial="{ y: 100, opacity: 0 }"
            :enter="{ y: 0, opacity: 1, transition: { duration: 1000, ease: 'easeOut' } }">
            <span class="leading-none">kra</span>
            <span class="leading-none">neando</span>
          </span>
          <span class="text-white headline-outline leading-none" v-motion :initial="{ y: 100, opacity: 0 }"
            :enter="{ y: 0, opacity: 1, transition: { duration: 1000, delay: 500, ease: 'easeOut' } }">
            remeras
          </span>
        </h1>
        <SpinningBadge
          class="absolute -top-12 right-[6%] min-[500px]:right-[16vw] sm:right-[16%] lg:-bottom-4 lg:top-auto lg:right-[1vw] 2xl:-right-40" />
      </div>
      <div class="hero-remera md:-mt-4">
        <img 
          v-for="(image, index) in tshirtImages" 
          :key="image.id"
          :src="image.src" 
          :alt="image.alt"
          class="hero-remera__image"
          :style="{ 
            '--animation-delay': `${index * animationStaggerDelay}s`,
            '--total-images': tshirtImages.length
          }"
          :class="index === 0 ? 'hero-remera__image--base' : 'hero-remera__image--stacked'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SpinningBadge from '~/components/SpinningBadge.vue'

const { t } = useI18n()

const tshirtImages = ref([
  {
    id: 1,
    src: '/images/remera-lista-azul.png',
    alt: 'Remera color azul'
  },
  {
    id: 2,
    src: '/images/remera-lista-negra.png',
    alt: 'Remera color negra'
  },
  {
    id: 3,
    src: '/images/remera-lista-blanca.png',
    alt: 'Remera color blanca'
  }
  
])

const animationDuration = 3
const animationStaggerDelay = animationDuration / tshirtImages.value.length
</script>