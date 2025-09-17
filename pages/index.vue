<template>
  <div>
    <h1>{{ lang }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: '',
    };
  },
  mounted() {
    const langcode = this.$store.getters['langcode'];
    this.lang = langcode;

    this.$router.replace(`/${langcode}`);
  },
};
</script>
