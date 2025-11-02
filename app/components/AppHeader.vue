<template>
  <header class="z-40 flex w-full flex-col justify-center bg-white">


    <div class="container relative flex h-20 items-center">
      <div class="flex flex-1 items-center gap-x-6 lg:justify-between lg:gap-x-1">
        <NuxtLink :to="localePath(root)" :aria-label="t('navigation.home')">
          <picture class="mx-auto flex size-10 items-center justify-center rounded-full border-2 border-white bg-black">
            <img src="/images/logo-kraneando-transparent.png" alt="Kraneando logo" class="size-8 object-contain" />
          </picture>
        </NuxtLink>


        <nav v-if="pages.length > 1" class="hidden lg:block">
          <ul class="flex flex-wrap items-center gap-x-4 xl:gap-x-6">
            <li v-for="{ to, label } in pages" :key="to">
              <NuxtLink :to="localePath(to)"
                class="border-b border-transparent text-base text-black transition hover:border-current aria-[current=page]:border-red-500 aria-[current=page]:text-red-500">
                {{ label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex items-center gap-x-2 lg:ml-4 ">
          <UDropdownMenu :items="localeItems" :popper="{ placement: 'bottom-start' }" :ui="{
              content: 'bg-primary/70 border-none shadow-none p-0 text-white',
              item: 'text-white before:bg-transparent data-[state=open]:before:bg-transparent data-highlighted:before:bg-transparent data-highlighted:text-primary-500',
            }">
            <UButton color="primary" variant="ghost" icon="heroicons:globe-alt" size="sm" :label="locale"
              class="uppercase" />
            <template #item="{ item }">
              <span class="truncate">{{ item.label }}</span>

              <UIcon v-if="item.current" name="i-heroicons-check-20-solid"
                class="text-primary ms-auto size-5 shrink-0 " />
            </template>
          </UDropdownMenu>
        </div>

        <USlideover v-model:open="menuOpen" :transition="false" title="Menu" :ui="{
            header: 'h-20',
            close: 'top-4 end-4 text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md',
            content: 'fixed bg-slate-950/95 divide-y divide-white/10 sm:ring-0 ring-0 shadow-none flex flex-col focus:outline-none',
          }">
          <UButton size="md" color="primary" variant="soft" square padded class="relative lg:hidden"
            @click="menuOpen = true">
            <template #leading>
              <div class="text-primary grid size-5 transform place-items-center">
                <span aria-hidden="true"
                  class="absolute block h-0.5 w-5 transform rounded-lg bg-current transition duration-300 ease-in-out"
                  :class="{
                    'rotate-45': menuOpen,
                    ' -translate-y-1.5': !menuOpen,
                  }" />
                <span aria-hidden="true"
                  class="absolute block h-0.5 w-5 transform rounded-lg bg-current transition duration-300 ease-in-out"
                  :class="{ 'opacity-0': menuOpen }" />
                <span aria-hidden="true"
                  class="absolute block h-0.5 w-5 transform rounded-lg bg-current transition duration-300 ease-in-out"
                  :class="{
                    '-rotate-45': menuOpen,
                    ' translate-y-1.5': !menuOpen,
                  }" />
              </div>
            </template>
            <span class="sr-only lg:not-sr-only">Menu</span>
          </UButton>

          <template #body>
            <div class="flex-1">
              <ul class="space-y-3">
                <li v-for="{ to, label } in pages" :key="to">
                  <UButton :to="localePath(to)" variant="ghost" color="primary" block justify="start" class="font-bold"
                    @click="menuOpen = false">
                    {{ label }}
                  </UButton>
                </li>
              </ul>
            </div>
          </template>
        </USlideover>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from '~/assets/svg/brain.svg?component'

const root = '/'

const { t } = useI18n()
const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
// const eventStartDate = computed(() => event.value?.starts_at || null)

const menuOpen = ref(false)

const pages = computed(() => ([
  { label: t('navigation.home'), to: '/' },
  { label: 'Remeras', to: '/products' },
  { label: t('navigation.about'), to: '/about' },
  { label: t('navigation.contact'), to: '/contact' }
]).filter(Boolean))

const visibleLocales = ['en', 'de']

const localeItems = computed(() => {
  return [locales.value
    .filter(l => visibleLocales.includes(l.code))
    .map((l) => ({ to: switchLocalePath(l.code), label: l.name, current: locale.value === l.code, disabled: locale.value === l.code }))]
})
</script>
