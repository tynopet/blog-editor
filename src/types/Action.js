// @flow
import type { Page, Pages } from './State';

type ADD_PAGE = {
  type: 'ADD_PAGE',
  page: Page,
};

type DELETE_PAGE = {
  type: 'DELETE_PAGE',
  id: number,
};

type FETCH_PAGES = {
  type: 'FETCH_PAGES',
  pages: Pages,
};

type SAVE_PAGE = {
  type: 'SAVE_PAGE',
  page: Page,
};

export type Action = ADD_PAGE | DELETE_PAGE | FETCH_PAGES | SAVE_PAGE;

// export type Action = {
//   type: string,
//   id?: number,
//   page?: Page,
//   pages?: Array<Page>,
// };
