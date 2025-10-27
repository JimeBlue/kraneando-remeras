<template>
  <ClientOnly>
    <div :class="['relative spinning-text-wrapper', props.class]">
      <!-- Static background circle -->
      <div class="spinning-background"></div>

      <!-- Center logo -->
      <div class="center-logo">
        <img src="/images/logo-kraneando-transparent.png" alt="Logo" class="w-8 h-8 lg:w-16 lg:h-16" />
      </div>

      <!-- Spinning text -->
      <div class="spinning-container" :style="{
          '--duration': props.duration + 's',
          '--direction': props.reverse ? 'reverse' : 'normal'
        }">
        <span v-for="(letter, index) in letters" :key="`${letter}-${index}`" class="absolute left-1/2 top-1/2" :style="{
            transform: `
              translate(-50%, -50%)
              rotate(calc(360deg / ${letters.length} * ${index}))
              translateY(calc(${radius}ch * -1))
            `,
            transformOrigin: 'center',
          }">
          {{ letter }}
        </span>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 10
  },
  class: {
    type: String,
    default: ''
  },
  reverse: {
    type: Boolean,
    default: false
  },
  radius: {
    type: Number,
    default: 5
  }
})

const letters = computed(() => {
  let letters = props.text.split('')
  letters.push(' ')
  return letters
})
</script>

<style scoped>
.spinning-text-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinning-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: black;
  border: 2px solid white;
  border-radius: 50%;
  z-index: 1;
}

@media (min-width: 1024px) {
  .spinning-background {
    width: 140px;
    height: 140px;
  }
}

.center-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.spinning-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: spin var(--duration) linear infinite;
  animation-direction: var(--direction);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: white;
  -webkit-text-stroke: none;
  text-shadow: none;
  z-index: 2;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

