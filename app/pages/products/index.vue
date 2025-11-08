<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Products</h1>

    <div v-if="pending" class="text-center">
      Loading products...
    </div>

    <div v-else-if="error" class="text-red-500">
      Error loading products: {{ error }}
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-1">
      <div v-for="product in products" :key="product._id" class="border rounded-lg p-4 hover:shadow-lg transition">
        <!-- Product Image (Clickable for Lightbox) -->
        <div
          v-if="product.images?.[0]"
          class="mb-4 flex h-64 w-full items-center justify-center overflow-hidden rounded bg-stone-100"
          @mouseenter="hoveredProduct = product._id"
          @mouseleave="hoveredProduct = null"
        >
          <img
            :src="urlFor(getDisplayImage(product)).width(600).quality(95).url()"
            :alt="product.title.es"
            class="h-full w-full cursor-pointer object-contain opacity-90 transition-all duration-300"
            @click="openLightbox(product)"
          />
        </div>

        <!-- Product Info -->
        <h2 class="text-xl font-bold mb-2">{{ product.title.es }}</h2>
        <p class="text-gray-600 mb-2">{{ product.description?.es }}</p>
        <p class="text-lg font-semibold text-green-600 mb-2">${{ product.price }}</p>
        <p class="text-sm text-gray-500">{{ product.productType }} - {{ product.gender }}</p>
        <p v-if="product.band" class="text-sm text-gray-500">🎸 {{ product.band }}</p>
      </div>
    </div>

    <!-- Lightbox Component (Client-side only) -->
    <ClientOnly>
      <vue-easy-lightbox
        :visible="lightboxVisible"
        :imgs="lightboxImages"
        :index="lightboxIndex"
        @hide="lightboxVisible = false"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const { client, urlFor } = useSanity()

// Fetch all products
const { data: products, pending, error } = await useAsyncData('products', async () => {
  return await client.fetch(`
    *[_type == "product"] {
      _id,
      title,
      description,
      price,
      images,
      productType,
      gender,
      band,
      inStock
    }
  `)
})

// Lightbox state
const lightboxVisible = ref(false)
const lightboxImages = ref<string[]>([])
const lightboxIndex = ref(0)

// Hover state to track which product is being hovered
const hoveredProduct = ref<string | null>(null)

// Helper function to get the image to display (first or second based on hover)
const getDisplayImage = (product: any) => {
  // If this product is hovered and has a second image, show the second image
  if (hoveredProduct.value === product._id && product.images?.[1]) {
    return product.images[1]
  }
  // Otherwise show the first image
  return product.images[0]
}

// Open lightbox with all product images
const openLightbox = (product: any) => {
  if (!product.images || product.images.length === 0) return

  // Transform all product images to high-res PNG URLs for lightbox
  lightboxImages.value = product.images.map((image: any) =>
    urlFor(image).width(1500).format('png').quality(90).url()
  )

  // Start at the first image
  lightboxIndex.value = 0
  lightboxVisible.value = true
}
</script>
