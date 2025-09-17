export const langcodeModule = {
  state: () => ({ 
    langcode: 'es'
  }),
  mutations: {
    SET_LANGCODE: (state, langcode) => {
      state.langcode = langcode;
    }
  },
  actions: {
    setLangcode: ({ commit }, langcode) => {
      commit("SET_LANGCODE", langcode);
    }
  },
  getters: {
    langcode: (state) => state.langcode
  },
};