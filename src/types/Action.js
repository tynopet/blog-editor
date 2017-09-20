// @flow
import { ADD_PAGE, DELETE_PAGE, FETCH_PAGES, SAVE_PAGE } from '../redux/constants';
import type { Page } from './State';

export type AddAction = {
  type: typeof ADD_PAGE,
  page: Page,
};

export type DeleteAction = {
  type: typeof DELETE_PAGE,
  id: number,
};

export type FetchAction = {
  type: typeof FETCH_PAGES,
  pages: Array<Page>,
};

export type SaveAction = {
  type: typeof SAVE_PAGE,
  page: Page,
};

export type Action = AddAction | DeleteAction | FetchAction | SaveAction;
