import {
  MODAL_HIDE,
  MODAL_SHOW,
  FORM_CONTACT_SUBMIT,
  BLOG_POSTS_FETCH_PENDING,
  BLOG_POSTS_FETCH_SUCCESS,
  BLOG_POST_FETCH_PENDING,
  BLOG_POST_FETCH_SUCCESS,
  BLOG_CATEGORIES_FETCH_SUCCESS,
  BLOG_CATEGORIES_FETCH_PENDING, EXAMPLES_FETCH_PENDING, EXAMPLES_FETCH_SUCCESS
} from './types'

export const modalShow = render => dispatch => {
  return dispatch({
    type: MODAL_SHOW,
    render
  });
};

export const modalHide = () => dispatch => {
  return dispatch({ type: MODAL_HIDE });
};

export const contactSubmit = (values, history) => dispatch => {
  return dispatch({ type: FORM_CONTACT_SUBMIT });
};

export const fetchPosts = filters => dispatch => {
  return dispatch({ type: BLOG_POSTS_FETCH_PENDING, filters });
};

export const fetchedPosts = posts => dispatch => {
  return dispatch({ type: BLOG_POSTS_FETCH_SUCCESS, posts });
};

export const fetchPost = slug => dispatch => {
  return dispatch({ type: BLOG_POST_FETCH_PENDING, slug });
};

export const fetchedPost = post => dispatch => {
  return dispatch({ type: BLOG_POST_FETCH_SUCCESS, post });
};

export const fetchCategories = () => dispatch => {
  return dispatch({ type: BLOG_CATEGORIES_FETCH_PENDING });
};

export const fetchedCategories = categories => dispatch => {
  return dispatch({ type: BLOG_CATEGORIES_FETCH_SUCCESS, categories  });
};

export const fetchArchives = posts => async dispatch => {
  return dispatch({ type: BLOG_POST_FETCH_PENDING, posts  });
};

export const fetchExamples = () => dispatch => {
  return dispatch({ type: EXAMPLES_FETCH_PENDING });
};

export const fetchedExamples = examples => dispatch => {
  return dispatch({ type: EXAMPLES_FETCH_SUCCESS, examples });
};