import { EXAMPLES_FETCH_FAILED, EXAMPLES_FETCH_PENDING, EXAMPLES_FETCH_SUCCESS } from '../actions/types';

const initialState = {
  loading: true,
  examples: [],
  error: null,
  filters: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EXAMPLES_FETCH_SUCCESS:
      return {
        ...state,
        examples: action.examples,
        error: null,
        loading: false
      };
    case EXAMPLES_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        examples: [],
        loading: false
      };
    case EXAMPLES_FETCH_PENDING:
      return {
        ...state,
        filters: action.filters,
        examples: [],
        loading: true
      };
    default:
      return state;
  }
}
