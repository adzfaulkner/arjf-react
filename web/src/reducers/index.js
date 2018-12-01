import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import contactFormReducer from './contactFormReducer';
import blogReducer from './blogReducer';
import postReducer from './postReducer';
import categoriesReducer from './categoriesReducer';
import archivesReducer from './archivesReducer';
import examplesReducer from './examplesReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  modal: modalReducer,
  contactForm: contactFormReducer,
  posts: blogReducer,
  post: postReducer,
  categories: categoriesReducer,
  archives: archivesReducer,
  examples: examplesReducer,
  form: reduxForm
});
