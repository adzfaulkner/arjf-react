import { FORM_CONTACT_SUBMIT, FORM_CONTACT_SUBMIT_ERROR, FORM_CONTACT_SUBMIT_SUCCESS } from '../actions/types';

const initialState = {
  error: false,
  name: null,
  email: null,
  message: null,
  subject: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FORM_CONTACT_SUBMIT:
      let { name, email, subject, message } = action;
      return {
        ...state,
        name,
        email,
        subject,
        message
      };
    case FORM_CONTACT_SUBMIT_ERROR:
      return {
        ...state,
        error: true
      };
    case FORM_CONTACT_SUBMIT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
