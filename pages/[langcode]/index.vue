<template>
  <main v-if="consumoComponents" class="min-h-screen relative mx-4 md:mx-8">
    <template v-for="(component, index) in consumoComponents" :key="`consumo-component-${component.component}-${index}`">
      <component 
        :is="component.component" 
        v-if="component" 
        v-bind="component.props" />
    </template>
  </main>
</template>

<script>
import HeroPages from '~/components/HeroPages.vue';
import SectionWithCardsAndForm from '../../components/SectionWithCardsAndForm.vue';
import TextWithIconAndButtons from '../../components/TextWithIconAndButtons.vue';

export default {
  components: {
    HeroPages,
    TextWithIconAndButtons,
    SectionWithCardsAndForm,
  },
  data() {
    return {
      consumoComponents: []
    };
  },
  async created() {
    const langcode = this.$route.params.langcode;
    try {
      const res = await import(`~/data/${langcode}/index.json`);
      this.consumoComponents = res.default;
    } catch (err) {
      console.error('Error al cargar contenido:', err);
      this.consumoComponents = [
        {
          component: 'ErrorComponent',
          props: {
            message: 'Contenido no disponible',
          },
        },
      ];
    }
  }
}
</script>