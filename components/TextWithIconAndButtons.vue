<template>
  <section
    :id="id"
    class="relative flex flex-col p-8 md:p-12 mb-8 items-center justify-center gap-4 md:gap-8 text-center overflow-hidden rounded-3xl"
    :class="{
        'bg-consumo-base bg-linear-to-b from-consumo-light to-consumo-extra-light': bgColor === 'consumo',
        'bg-iguales-base bg-linear-to-b from-iguales-light to-iguales-extra-light': bgColor === 'iguales',
        'bg-aula-base bg-linear-to-b from-aula-light to-aula-extra-light': bgColor === 'aula',
        'bg-certifica-base bg-linear-to-b from-certifica-light to-certifica-extra-light': bgColor === 'certifica',
        'bg-foro-base bg-linear-to-b from-foro-light to-foro-extra-light': bgColor === 'foro',
        'bg-ods-base bg-linear-to-b from-ods-light to-ods-extra-light': bgColor === 'ods',
      }">
    
    <img
      v-if="bgImage" 
      :src="`/img/${bgImage.src}`" 
      :alt="bgImage.alt" 
      class="absolute left-0 top-0 w-full h-full" >

    <div class=" flex flex-col items-center z-10 gap-6">
      <img v-if="icon" :src="`/svg/${icon}`" :alt="`icon-${icon}`" class="w-15 h-15" />
      <h2 class="font-bold max-w-4xl">{{ title }}</h2>
      <p class="text-2xl-custom max-w-4xl" v-html="subtitle"></p>
      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <NuxtLink v-if="button" :to="button.link">
          <ButtonCTA :color="button.color" class="uppercase mt-6">
            {{ button.label }}
          </ButtonCTA>
        </NuxtLink>
        <NuxtLink v-if="button2" :to="button2.link">
          <ButtonCTA :color="button2.color" class="uppercase mt-6">
            {{ button2.label }}
          </ButtonCTA>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "consumo",
    },
    icon: {
      type: String,
      default: "",
    },
    bgImage: {
      type: Object,
      default: () => ({
        src: "",
        alt: "",
      }),
    },
    button: {
      type: Object,
      default: () => ({
        label: "",
        link: "",
        color: "button",
      }),
    },
    button2: {
      type: Object,
      default: null,
    }
  },
  
};
</script>