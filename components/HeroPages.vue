<template>
  <section
    :id="id"
    class="relative flex flex-col p-8 md:p-12 mb-8 items-center justify-center gap-4 md:gap-8 text-center rounded-3xl min-h-[346px]"
    :class="{
        'bg-gradient-conic-hero': bgColor === 'gradient',
        'bg-consumo-base bg-linear-to-t from-consumo-base to-consumo-extra-light': bgColor === 'consumo',
        'bg-iguales-base bg-linear-to-t from-iguales-base to-iguales-extra-light': bgColor === 'iguales',
        'bg-aula-base bg-linear-to-t from-aula-base to-aula-extra-light': bgColor === 'aula',
        'bg-certifica-base bg-linear-to-t from-certifica-base to-certifica-extra-light': bgColor === 'certifica',
        'bg-foro-base bg-linear-to-t from-foro-base to-foro-extra-light': bgColor === 'foro',
        'bg-ods-base bg-linear-to-t from-ods-base to-ods-extra-light': bgColor === 'ods',
      }">
    
    <img 
    
      v-if="bgImage" 
      :src="`/img/${bgImage.src}`" 
      :alt="bgImage.alt" 
      class="absolute left-0 bottom-0 w-full h-auto" >

    <div class=" flex flex-col items-center z-10 gap-6">
      <h1 class="font-bold max-w-4xl">{{ title }}</h1>
      <p class="text-2xl-custom max-w-3xl" v-html="subtitle"></p>
      <!-- <NuxtLink v-if="button" :to="button.link">
        <ButtonCTA :color="button.color" class="uppercase mt-6">
          {{ button.label }}
        </ButtonCTA>
      </NuxtLink> -->
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
    }
  },
  
};
</script>