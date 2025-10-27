<template>
  <div class="flex h-20 w-20 items-center justify-center">
    <article class="relative flex h-full w-full items-center justify-center rounded-full border-2 border-white bg-black">
      <svg viewBox="0 0 200 200" class="absolute inset-0 h-full w-full animate-[spin_8s_linear_infinite]">
        <defs>
          <path id="badgeCircle" d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
        </defs>
        <text class="fill-white tracking-widest text-lg font-bold uppercase">
          <textPath xlink:href="#badgeCircle" startOffset="0%">
            • Deslizà y descubri • Deslizà y descubri
          </textPath>
        </text>
      </svg>
      <picture class="z-10 flex h-20 w-20 items-center justify-center rounded-full">
        <img src="/images/logo-kraneando-transparent.png" alt="Kraneando logo" class="h-10 w-10 object-contain" />
      </picture>
    </article>
  </div>
</template>

<script setup>
</script>
