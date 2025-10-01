<template>
  <nav class="relative bg-white">
    <div class="mx-auto flex justify-between items-center h-20">
      <!-- Logo -->
      <NuxtLink :to="`/${langcode}/`">
        <img
          width="121.22628021240234"
          height="48"
          alt="logo-kit-economia-social-iguales"
          src="/assets/img/logo-iguales-kit.png"
        />
      </NuxtLink>

      <!-- Desktop menu -->
      <ul class="hidden md:flex items-center gap-6 font-semibold text-sm-custom">
        <li><NuxtLink :to="`/${langcode}/`" class="hover:bg-button-hover hover:text-white p-2 rounded-lg">INICIO</NuxtLink></li>
        <li><NuxtLink to="https://aula.kit-eco.social/" class="hover:bg-button-hover hover:text-white p-2 rounded-lg">GUÍA PASO A PASO</NuxtLink></li>
        <li><NuxtLink to="https://www.kit-eco.social/es/" class="hover:bg-button-hover hover:text-white p-2 rounded-lg">KIT-ECO.SOCIAL</NuxtLink></li>
       
      </ul>

      <!-- Mobile menu toggle -->
      <button 
        class="md:hidden focus:outline-none"
        @click="handleMenu">
          <svg v-if="!menuIsOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
          <svg v-if="menuIsOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-2"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-2"
    >
    <div v-show="menuIsOpen" class="lg:hidden p-5 bg-gradient-conic rounded-3xl min-h-svh">
        <ul class="space-y-4 text-sm-custom text-end w-fit ml-auto">
          <li class="p-2"><NuxtLink :to="`/${langcode}/`">INICIO</NuxtLink></li>
          <li class="p-2"><NuxtLink to="https://aula.kit-eco.social/">GUÍA PASO A PASO</NuxtLink></li>
          <li class="p-2"><NuxtLink to="https://www.kit-eco.social/es/">KIT-ECO.SOCIAL</NuxtLink></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      dropdownOpen: false,
      menuIsOpen: false,
    };
  },
  watch: {
    '$route': function() {
      this.dropdownOpen = false; // Close dropdown on language change
      this.menuIsOpen = false; // Close mobile menu on language change
    }
  },
  computed: {
    langcode() {
      return this.$store.getters.langcode;
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    handleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleClickOutside(e) {
      const dropdown = this.$refs.dropdownRef;
      if (dropdown && !dropdown.contains(e.target)) {
        this.dropdownOpen = false;
      }
    },
    handleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    }
  },
};
</script>
