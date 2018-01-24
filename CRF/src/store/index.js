import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules,
  plugins: [createPersistedState({
    paths: ['user'],
  })],
});

export default store;
