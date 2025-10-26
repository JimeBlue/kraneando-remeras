<template>
  <section class="bg-primary-500">
    <div class="container">
      <h1 class="flex flex-col text-9xl font-headline uppercase text-center tracking-widest">
        <span class="text-red-500 headline-outline">kraneando</span>
        <span class="text-white headline-outline ml-24">remeras</span>
      </h1>
      <div class="hero-remera mt-10">
        <img
          src="/images/remera-lista-azul.png"
          alt="Remera color azul"
          class="hero-remera__image hero-remera__image--primary"
        />
        <img
          src="/images/remera-lista-negra.png"
          alt="Remera color negra"
          class="hero-remera__image hero-remera__image--secondary"
        />
        <img
          src="/images/remera-lista-blanca.png"
          alt="Remera color blanca"
          class="hero-remera__image hero-remera__image--tertiary"
        />
      </div>
    </div>
  </section>
</template>

<script setup>

const { t } = useI18n()

</script>
