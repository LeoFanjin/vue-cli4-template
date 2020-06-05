import {API} from 'utils';

export const setCurrentResource = ({commit}, currentResource) => {
  commit('SET_CURRENT_RESOURCE', currentResource);
};
