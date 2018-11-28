import { BLOG_POSTS_FETCH_SUCCESS, BLOG_POSTS_FETCH_FAILED, BLOG_POSTS_FETCH_PENDING } from '../actions/types';

const initialState = {
  loading: true,
  posts: [],
  error: null,
  filters: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BLOG_POSTS_FETCH_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        error: null,
        loading: false
      };
    case BLOG_POSTS_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        posts: [],
        loading: false
      };
    case BLOG_POSTS_FETCH_PENDING:
      return {
        ...state,
        filters: action.filters,
        posts: [],
        loading: true
      };
    default:
      return state;
  }
}
