import { BLOG_POST_FETCH_SUCCESS, BLOG_POST_FETCH_FAILED, BLOG_POST_FETCH_PENDING } from '../actions/types';

const initialState = {
  slug: null,
  post: null,
  error: null,
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BLOG_POST_FETCH_PENDING:
      return {
        ...state,
        slug: action.slug,
        loading: true
      };
    case BLOG_POST_FETCH_SUCCESS:
      return {
        ...state,
        post: action.post,
        error: null,
        loading: false
      };
    case BLOG_POST_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        post: null,
        loading: false
      };
    default:
      return state;
  }
}
