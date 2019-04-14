import { MODAL_HIDE, MODAL_SHOW } from '../actions/types';

const initialState = {
  show: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MODAL_HIDE:
      return initialState
    case MODAL_SHOW:
      let { render } = action;
      return {
        ...state,
        show: true,
        render
      };
    default:
      return state;
  }
}
