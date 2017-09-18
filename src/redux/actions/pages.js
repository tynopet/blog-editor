// @flow

import { ADD_PAGE, DELETE_PAGE, FETCH_PAGES, SAVE_PAGE } from '../constants';
import { add, get, save, remove } from '../../api/pages';
import type { Page } from '../../types/State';
import type { Action } from '../../types/Action';

const pageIsAdded = (page: Page): Action => ({
  type: ADD_PAGE,
  page,
});

const pageIsDeleted = (id: number): Action => ({
  type: DELETE_PAGE,
  id,
});

const pagesIsFetching = (pages: Array<Page>): Action => ({
  type: FETCH_PAGES,
  pages,
});

const pageIsSaved = (page: Page): Action => ({
  type: SAVE_PAGE,
  page,
});

export const addPage = (): function => (dispatch: any): void => {
  add()
    .then((page: Page): void => dispatch(pageIsAdded(page)))
    .catch((e: Error): void => console.error(e));
};

export const deletePage = (id: number): function => (dispatch: any): void => {
  remove(id)
    .then((): void => dispatch(pageIsDeleted(id)))
    .catch((e: Error): void => console.error(e));
};

export const fetchPages = (): function => (dispatch: any): void => {
  get()
    .then((pages: Array<Page>): void => dispatch(pagesIsFetching(pages)))
    .catch((e: Error): void => console.error(e));
};

export const savePage = (page: Page): function => (dispatch: any): void => {
  save(page)
    .then((): void => dispatch(pageIsSaved(page)))
    .catch((e: Error): void => console.error(e));
};
