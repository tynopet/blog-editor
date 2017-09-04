import { ADD_PAGE, DELETE_PAGE, FETCH_PAGES, SAVE_PAGE } from '../constants';

const defaultState = {
  pages: [],
};

const pages = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PAGE:
      return {
        pages: [
          ...state.pages,
          action.payload,
        ],
      };
    case DELETE_PAGE:
      return {
        pages: state.pages.filter(page => page.id !== action.payload),
      };
    case FETCH_PAGES:
      return {
        pages: action.payload,
      };
    case SAVE_PAGE:
      return {
        pages: state.pages.map(page => (page.id === action.payload.id ? action.payload : page)),
      };
    default:
      return state;
  }
};

export default pages;
