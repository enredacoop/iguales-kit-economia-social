<template>
  <div>
    <header class="mx-4 sm:mx-8">
      <NavBar />
    </header>

    <main class="min-h-dvh">
      <slot />
      <!-- <div class="fixed bottom-0 right-0 z-50 p-2">
        <ButtonCTA @click="changeLang" >
          Cambiar Idioma
        </ButtonCTA>
      </div>  -->
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<!-- <script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['langcode']),
  },
  methods: {
    ...mapActions(['setLangcode']),
    changeLang() {
      const newLang = this.langcode === 'es' ? 'cat' : 'es';
      this.setLangcode(newLang);
      this.$router.push({ path: `/${newLang}` });
    }
  }
}
</script> -->