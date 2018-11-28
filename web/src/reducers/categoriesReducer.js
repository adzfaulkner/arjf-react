import { BLOG_CATEGORIES_FETCH_SUCCESS, BLOG_CATEGORIES_FETCH_FAILED } from '../actions/types';

const initialState = {
  categories: [],
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BLOG_CATEGORIES_FETCH_SUCCESS:
      return {
        categories: action.categories,
        error: null
      };
    case BLOG_CATEGORIES_FETCH_FAILED:
      return {
        error: action.error,
        categories: null
      };
    default:
      return state;
  }
}
