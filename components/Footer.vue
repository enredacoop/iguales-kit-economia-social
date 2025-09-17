<template>
  <footer class=" bg-gradient-to-t from-background-dark-2 to-button text-white py-12 px-4 md:px-8 flex flex-col gap-8 rounded-t-3xl">
    <div class="flex flex-col lg:flex-row gap-16 md:gap-12 lg:gap-16">

      <div class="flex flex-col gap-6 items-center md:items-start w-full md:w-1/3 lg:w-1/6">
        <div class="mb-4">
          <img src="/assets/svg/logo.svg" alt="Kit-ECO.SOCIAL Logo" class="h-15 w-auto">
        </div>
        <p class=" text-lg-custom mb-4 text-center md:text-start">Síguenos y entérate de los próximos eventos, novedades y recursos.</p>
        <ul class="flex space-x-4">
          <li class="h-12 lg:h-8 w-12 lg:w-8 rounded-full border border-white hover:bg-white hover:text-background-dark">
            <NuxtLink to="#" class="flex items-center justify-center h-full w-full">
              <img src="/assets/svg/instagram.svg" alt="Instagram" class="w-4 h-4" />
            </NuxtLink>
          </li>
          <li class="h-12 lg:h-8 w-12 lg:w-8 rounded-full border border-white">
            <NuxtLink to="#" class="flex items-center justify-center h-full w-full">
              <img src="/assets/svg/facebook.svg" alt="Facebook" class="w-4 h-4">
            </NuxtLink>
          </li>
          <li class="h-12 lg:h-8 w-12 lg:w-8 rounded-full border border-white">
            <NuxtLink to="#" class="flex items-center justify-center h-full w-full">
              <img src="/assets/svg/linkedin.svg" alt="LinkedIn" class="w-4 h-4">
            </NuxtLink>
          </li>
          <li class="h-12 lg:h-8 w-12 lg:w-8 rounded-full border border-white">
            <NuxtLink to="#" class="flex items-center justify-center h-full w-full">
              <img src="/assets/svg/x.svg" alt="X-Twitter" class="w-4 h-4">
            </NuxtLink>
          </li>
        </ul>
        <a href="mailto:info@kit-eco.social">info@kit-eco.social</a>
      </div>

      <div class="flex flex-col md:flex-row justify-between gap-16 md:gap-0 lg:gap-16 w-full lg:w-5/6">
        <div class="flex md:w-2/3 lg:w-1/2">
          <div class="flex flex-col w-1/2">
            <h3 class="font-semibold text-lg-custom mb-6">Herramientas</h3>
            <ul class="space-y-3 text-left text-lg-custom">
              <li><NuxtLink to="https://www.kit-eco.social/es/consumo-cuidado" class="hover:font-semibold">Consumo Cuidado</NuxtLink></li>
              <li><NuxtLink to="https://www.kit-eco.social/es/aula-virtual" class="hover:font-semibold">Aula Virtual</NuxtLink></li>
              <li><NuxtLink to="https://www.kit-eco.social/es/iguales" class="hover:font-semibold">Iguales</NuxtLink></li>
              <li><NuxtLink to="https://www.kit-eco.social/es/objetivo2030" class="hover:font-semibold">Objetivo 2030</NuxtLink></li>
              <li><NuxtLink to="https://www.kit-eco.social/es/certifica-t" class="hover:font-semibold">Certifica-T</NuxtLink></li>
              <li><NuxtLink to="https://www.kit-eco.social/es/foro" class="hover:font-semibold">Foro</NuxtLink></li>
            </ul>
          </div>
  
          <div class="flex flex-col w-1/2">
            <h3 class="font-semibold text-lg-custom mb-6">Enlaces rápidos</h3>
            <ul class="space-y-3 text-left">
              <li><a href="https://www.kit-eco.social/es/nosotras" class="hover:underline">Nosotras</a></li>
              <li><a href="#" class="hover:underline">Contactanos</a></li>
              <li><a href="#" class="hover:underline">Terminos y condiciones</a></li>
              <li><a href="#" class="hover:underline">Politica de privacidad</a></li>
              <li><a href="#" class="hover:underline">Aviso legal</a></li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col items-center md:items-end md:w-1/3 lg:w-1/2">
          <h3 class="font-semibold text-lg-custom mb-4">Proyecto financiado por:</h3>
          <div class="grid grid-cols-12 gap-y-3 w-full">
            <img src="/assets/img/uelogo 1.png" alt="Financiado por la Unión Europea - NextGenerationEU" class="h-12 lg:h-14 col-span-6 md:col-span-12 mx-auto md:mx-0 md:ml-auto">
            <img src="/assets/img/logotipo_ministerio.png" alt="Gobierno de España" class="h-12 lg:h-14 col-span-6 md:col-span-12 mx-auto md:mx-0 md:ml-auto">
            <img src="/assets/img/logotipo_PRTR.png" alt="Plan de Recuperación, Transformación y Resiliencia" class="h-12 lg:h-14 col-span-12 md:col-span-12 mx-auto md:mx-0 md:ml-auto">
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-background-extra-light mt-8 pt-4 text-center">
      <p class="text-xs-custom"><span>{{ year }}</span> © kit-ECO.SOCIAL | Diseñado y desarrollado por <a href="https://enreda.coop">Enreda Coop</a></p>
    </div>
  </footer>
</template>

<script>
import { getCurrentYear } from "@/utils/dates.js";
export default {
  computed: {
    langcode() {
      return this.$store.getters.langcode;
    },
    year() {
      return getCurrentYear();
    },
  },
};
</script>