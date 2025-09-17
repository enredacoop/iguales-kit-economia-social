import { kitecosocialStore } from '~/store/index';

export default defineNuxtPlugin((nuxtApp) => {
  const store = kitecosocialStore()
  nuxtApp.vueApp.use(store)
  nuxtApp.provide('store', store)
});
