import { createStore } from 'vuex';
import { langcodeModule } from './langcode';

export const kitecosocialStore = () => 
createStore({
  modules: {
    langcode: langcodeModule,
  },
});
