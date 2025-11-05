<template>
  <BaseHero />

  <section class="py-16">
    <div class="container">
      <h2 class="text-3xl font-bold text-center mb-12">productos</h2>

      <UCarousel v-slot="{ item }" :items="productCategories" :arrows="isMdAndUp"
        :prev="{ size: 'xl', variant: 'solid', class: 'bg-red-500 text-white border-red-500 hover:bg-red-600 focus-visible:ring-red-500' }"
        :next="{ size: 'xl', variant: 'solid', class: 'bg-red-500 text-white border-red-500 hover:bg-red-600 focus-visible:ring-red-500' }"
        prev-icon="streamline-emojis:backhand-index-pointing-left-2"
        next-icon="streamline-emojis:backhand-index-pointing-right-2" :ui="{
          item: 'basis-[70%] md:basis-[42%] lg:basis-[30%]',
          container: 'flex items-center rounded-lg',
        }">
        <div class="p-2">
          <UCard :ui="{ root: 'ring-2' }" class="overflow-hidden bg-white rounded-4xl">
            <div class="aspect-square overflow-hidden">
              <img :src="item.image" :alt="item.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-4xl" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2 rounded-4xl">{{ item.title }}</h3>
              <p class="text-gray-700 text-sm">{{ item.description }}</p>
            </div>
          </UCard>
        </div>
      </UCarousel>
    </div>
  </section>



</template>

<script setup>
const isMdAndUp = useMediaQuery('(min-width: 768px)', {
  ssrWidth: 320 // Mobile-first SSR approach
})

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

const featuredProducts = [
  {
    title: 'Premium Hoodie',
    description: 'Soft fleece blend with minimalist embroidery for everyday wear.'
  },
  {
    title: 'Graphic Tee',
    description: 'Lightweight cotton tee featuring our signature streetwear print.'
  },
  {
    title: 'Customizable Tote',
    description: 'Durable canvas bag ready for your favorite patches and pins.'
  },
  {
    title: 'Embroidered Cap',
    description: 'Classic six-panel cap with adjustable strap for a perfect fit.'
  }
]
</script>
