<template>
  <section class="py-16">
    <div class="container">
      <header class="mx-auto max-w-3xl text-center">
        <h1 class="font-headline text-4xl tracking-wider uppercase text-slate-900 sm:text-5xl">
          Nuestras Remeras
        </h1>
        <p class="mt-4 text-base text-slate-600">
          Diseños originales inspirados en la cultura gráfica local. Elegí tu favorita y vestí una historia distinta.
        </p>
      </header>

      <div class="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :subtitle="product.subtitle"
          :description="product.description"
          :image="product.image"
          :image-alt="product.imageAlt"
          :price="product.price"
          :currency="product.currency"
        >
          <template #action>
            <button
              type="button"
              class="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Ver detalles
            </button>
          </template>
        </ProductCard>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    id: 'kraneando-original',
    title: 'Kraneando Original',
    subtitle: 'Edición lanzamiento',
    description:
      'La remera que inició todo. Intervenir la grúa es parte del ADN porteño y esta prenda lo celebra con una paleta vibrante y tipografía audaz.',
    image: '/images/sample-t-shirt-black.png',
    imageAlt: 'Remera Kraneando Original color negro',
    price: 17500,
    currency: 'ARS'
  },
  {
    id: 'barrio-sur',
    title: 'Barrio Sur',
    subtitle: 'Serie barrios',
    description:
      'Inspirada en los pasillos y murales más icónicos del sur de la ciudad. Texturas serigrafiadas en tres capas para un acabado único.',
    image: '/images/sample-blue-t-shirt.png',
    imageAlt: 'Remera Barrio Sur color azul',
    price: 18500,
    currency: 'ARS'
  },
  {
    id: 'carrusel-nocturno',
    title: 'Carrusel Nocturno',
    subtitle: 'Ilustración de autor',
    description:
      'Ilustrada por Nahuel López, esta pieza captura la energía de la noche y la mezcla con un toque futurista de neón.',
    image: '/images/sample-t-shirt-red.png',
    imageAlt: 'Remera Carrusel Nocturno color roja',
    price: 21000,
    currency: 'ARS'
  },
  {
    id: 'riberas',
    title: 'Riberas',
    subtitle: 'Colección río',
    description:
      'Colores suaves y ondas en serigrafía de alto relieve que evocan el movimiento del Río de la Plata en un atardecer de verano.',
    image: '/images/sample-t-shirt-yellow.png',
    imageAlt: 'Remera Riberas color amarilla',
    price: 19500,
    currency: 'ARS'
  },
  {
    id: 'pista-libre',
    title: 'Pista Libre',
    subtitle: 'Serie urbana',
    description:
      'Detalles reflectivos y tipografía stencil para los que viven sobre ruedas. Ideal para skaters, bikers y exploradores nocturnos.',
    image: '/images/black-t-shirt.png',
    imageAlt: 'Remera Pista Libre color negra',
    price: 20500,
    currency: 'ARS'
  },
  {
    id: 'cobalto',
    title: 'Cobalto',
    subtitle: 'Edición limitada',
    description:
      'Un degradado profundo sobre base azul cobalto y tintas eco-friendly. Disponible sólo por tiempo limitado.',
    image: '/images/remera-lista-azul.png',
    imageAlt: 'Remera Cobalto color azul',
    price: 22500,
    currency: 'ARS'
  }
]
</script>
