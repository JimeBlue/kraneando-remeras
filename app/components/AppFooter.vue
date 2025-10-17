<template>
  <footer class="border-t border-slate-200 bg-slate-50">
    <div class="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
      <p>&copy; {{ new Date().getFullYear() }} Starter Basic. All rights reserved.</p>
      <div class="flex items-center gap-4">
        <NuxtLink to="/about" class="hover:text-primary-600 transition-colors">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-primary-600 transition-colors">Contact</NuxtLink>
      </div>
    </div>
  </footer>
</template>
