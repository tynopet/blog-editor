// @flow

import { ADD_PAGE, DELETE_PAGE, FETCH_PAGES, SAVE_PAGE } from '../constants';
import { add, get, save, remove } from '../../api/pages';
import type { Page } from '../../types/State';
import type { AddAction, DeleteAction, FetchAction, SaveAction } from '../../types/Action';

const pageIsAdded = (page: Page): AddAction => ({
  type: ADD_PAGE,
  page,
});

const pageIsDeleted = (id: number): DeleteAction => ({
  type: DELETE_PAGE,
  id,
});

const pagesIsFetching = (pages: Array<Page>): FetchAction => ({
  type: FETCH_PAGES,
  pages,
});

const pageIsSaved = (page: Page): SaveAction => ({
  type: SAVE_PAGE,
  page,
});

export const addPage = (): Function => (dispatch: Function): void => {
  add()
    .then((page: Page): void => dispatch(pageIsAdded(page)))
    .catch((e: Error): void => console.error(e));
};

export const deletePage = (id: number): Function => (dispatch: Function): void => {
  remove(id)
    .then((): void => dispatch(pageIsDeleted(id)))
    .catch((e: Error): void => console.error(e));
};

export const fetchPages = (): Function => (dispatch: Function): void => {
  get()
    .then((pages: Array<Page>): void => dispatch(pagesIsFetching(pages)))
    .catch((e: Error): void => console.error(e));
};

export const savePage = (page: Page): Function => (dispatch: Function): void => {
  save(page)
    .then((): void => dispatch(pageIsSaved(page)))
    .catch((e: Error): void => console.error(e));
};
