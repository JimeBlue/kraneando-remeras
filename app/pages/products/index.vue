<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Products</h1>

    <div v-if="pending" class="text-center">
      Loading products...
    </div>

    <div v-else-if="error" class="text-red-500">
      Error loading products: {{ error }}
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product._id" class="border rounded-lg p-4 hover:shadow-lg transition">
        <!-- Product Image -->
        <img v-if="product.images?.[0]" :src="urlFor(product.images[0]).width(400).url()" :alt="product.title.es"
          class="w-full h-64 object-cover rounded mb-4" />

        <!-- Product Info -->
        <h2 class="text-xl font-bold mb-2">{{ product.title.es }}</h2>
        <p class="text-gray-600 mb-2">{{ product.description?.es }}</p>
        <p class="text-lg font-semibold text-green-600 mb-2">${{ product.price }}</p>
        <p class="text-sm text-gray-500">{{ product.productType }} - {{ product.gender }}</p>
        <p v-if="product.band" class="text-sm text-gray-500">🎸 {{ product.band }}</p>
      </div>
    </div>
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
</script>