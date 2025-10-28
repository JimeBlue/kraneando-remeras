<template>
  <BaseHero />
  <section class="py-16">
    <div class="container">
      <h2 class="text-3xl font-bold text-center mb-12">productos</h2>

      <UCarousel v-slot="{ item }" :items="productCategories" :ui="{
          item: 'basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4',
          container: 'flex items-center rounded-lg',
          arrows: {
            wrapper: 'absolute inset-0 flex items-center justify-between z-20 pointer-events-none px-4',
            base: 'pointer-events-auto rounded-full bg-primary-500 hover:bg-primary-600 text-red-500 shadow-lg border p-2',
            prev: 'left-2',
            next: 'right-2'
          }
        }" arrows indicators class="rounded-lg overflow-hidden relative">
        <div class="p-2">
          <UCard class="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
            <div class="aspect-square overflow-hidden">
              <img :src="item.image" :alt="item.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg" />
            </div>
            <div >
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
              <p class="text-gray-700 text-sm">{{ item.description }}</p>
            </div>
          </UCard>
        </div>
      </UCarousel>
    </div>
  </section>
</template>

<script setup>
const productCategories = [
  {
    title: 'Sweatshirts',
    image: '/images/remera-lista-azul.png',
    description: 'Comfortable and stylish sweatshirts for everyday wear'
  },
  {
    title: 'Patches',
    image: '/images/sample.jpg',
    description: 'Custom embroidered patches to personalize your style'
  },
  {
    title: 'T-Shirts',
    image: '/images/remera-lista-blanca.png',
    description: 'High-quality cotton t-shirts with unique designs'
  },
  {
    title: 'Mugs',
    image: '/images/sample.jpg',
    description: 'Ceramic mugs perfect for your morning coffee'
  },
  {
    title: 'Caps',
    image: '/images/remera-lista-negra.png',
    description: 'Trendy caps and hats for sun protection and style'
  },
  {
    title: 'Stickers',
    image: '/images/sample.jpg',
    description: 'Vibrant stickers to decorate your favorite items'
  }
]
</script>
