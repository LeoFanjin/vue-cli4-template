import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import { baseState, baseMutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { ...baseState },
  mutations: { ...baseMutations },
  actions,
  getters,
  modules: {}
});
