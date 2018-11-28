import { MODAL_HIDE, MODAL_SHOW } from '../actions/types';

const initialState = {
  show: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MODAL_HIDE:
      return initialState
    case MODAL_SHOW:
      let { url, img, description} = action;
      return {
        ...state,
        show: true,
        url,
        img,
        description
      };
    default:
      return state;
  }
}
