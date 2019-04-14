import { BLOG_ARCHIVES_FETCH_SUCCESS } from '../actions/types';

const initialState = {
  archives: [],
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BLOG_ARCHIVES_FETCH_SUCCESS:
      return {
        ...state,
        archives: action.archives,
        error: null
      };
    default:
      return state;
  }
}
