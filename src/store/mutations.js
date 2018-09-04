import { SET_COUNT } from './mutation-types';

export default {
  [SET_COUNT](state) {
    state.count += 1;
  },
};
