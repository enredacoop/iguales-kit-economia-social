<template>
  <div
    class="flex flex-col gap-4 rounded-3xl"
    :class="{
      'border-4 border-white min-h-64 md:min-h-full max-w-80 sm:max-w-full': color === 'number',
      'border-4 border-white min-h-20.9 md:min-h-full max-h-full max-w-80 sm:max-w-full': color === 'transparent',
      'shadow-tool-card hover:border-4 border-white transition-all duration-300 ease-in-out min-h-22.3 sm:min-h-21.8 min-w-full lg:min-w-80 max-w-fit sm:max-w-80 w-fit': color !== 'transparent' && color !== 'number',
      'bg-linear-to-t from-consumo-base  to-consumo-light hover:to-consumo-extra-light': color === 'consumo',
      'bg-linear-to-t from-iguales-base to-iguales-light hover:to-iguales-extra-light': color === 'iguales',
      'bg-linear-to-t from-aula-base to-aula-light hover:to-aula-extra-light': color === 'aula',
      'bg-linear-to-t from-certifica-base to-certifica-light hover:to-certifica-extra-light': color === 'certifica',
      'bg-linear-to-t from-foro-base to-foro-light hover:to-foro-extra-light': color === 'foro',
      'bg-linear-to-t from-ods-base to-ods-light hover:to-ods-extra-light': color === 'ods',
    }"
  >
    <NuxtLink v-if="link" :to="`/${langcode}/${link}`" class="p-8 flex flex-col gap-4 items-center">
      <div class="min-h-10.2 w-full">
        <img 
          v-if="image"
          :src="`/img/${image.src}`"
          :alt="image.alt"
          class="w-full h-full object-cover"
        />
        <!-- <img v-else src="" alt="imagen-error"> -->
        <!-- TODO: Add a fallback image -->
      </div>
      <div class="flex flex-col gap-2 items-center">
        <h4 class="font-semibold uppercase">{{ title }}</h4>
        <p class="text-center max-w-xl text-base-custom" v-html="description"></p>
      </div>
    </NuxtLink>
    <div v-if="!link" class="flex flex-col gap-4 px-8 py-12 items-center">
      <div v-if="image" class="h-25 w-25">
        <img 
          :src="`/img/${image.src}`"
          :alt="image.alt"
          class="w-full h-full object-cover"
        />
        <!-- <img v-else src="" alt="imagen-error"> -->
        <!-- TODO: Add a fallback image -->
      </div>
      <div v-if="number" class="h-15 w-15">
        <h3 class="w-full h-full rounded-full border font-bold flex items-center justify-center">
        {{ number }}</h3>
      </div>
      <div class="flex flex-col gap-2 items-center text-center">
        <h4 class="font-semibold uppercase">{{ title }}</h4>
        <p class="text-center text-base-custom" v-html="description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "consumo",
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    image: {
        type: Object,
        default: null,
    },
    number: {
        type: String,
        default: null
    },
    link: {
        type: String,
        default: null
    },
  },
  computed: {
    langcode() {
      return this.$store.getters.langcode;
    },
  },
}
</script>