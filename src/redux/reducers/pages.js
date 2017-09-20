// @flow
import { ADD_PAGE, DELETE_PAGE, FETCH_PAGES, SAVE_PAGE } from '../constants';
import type { Page, Pages } from '../../types/State';
import type { Action } from '../../types/Action';

const defaultState = {
  pages: [],
};

// fix action type
const pages = (state: Pages = defaultState, action: any): Pages => {
  switch (action.type) {
    case ADD_PAGE:
      return {
        pages: [...state.pages, action.page],
      };
    case DELETE_PAGE:
      return {
        pages: state.pages.filter((page: Page): boolean => page.id !== action.id),
      };
    case FETCH_PAGES:
      return {
        pages: action.pages,
      };
    case SAVE_PAGE:
      return {
        pages: state.pages.map(
          (page: Page): Page => (page.id === action.page.id ? action.page : page),
        ),
      };
    default:
      return state;
  }
};

export default pages;
