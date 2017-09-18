// @flow
import { ADD_PAGE, DELETE_PAGE, FETCH_PAGES, SAVE_PAGE } from '../constants';
import type { Page, Pages } from '../../types/State';
import type { Action } from '../../types/Action';

const defaultState = {
  pages: [],
};

const pages = (state: Pages = defaultState, action: Action): Pages => {
  switch (action.type) {
    case ADD_PAGE:
      return {
        pages: [...state.pages, action.page],
      };
    case DELETE_PAGE:
      return {
        pages: state.pages.filter((page: Page): Pages => page.id !== action.id),
      };
    case FETCH_PAGES:
      return {
        pages: action.pages,
      };
    case SAVE_PAGE:
      return {
        pages: state.pages.map(
          (page: Page): Pages => (page.id === action.page.id ? action.page : page),
        ),
      };
    default:
      return state;
  }
};

export default pages;
