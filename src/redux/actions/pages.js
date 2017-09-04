import { ADD_PAGE, DELETE_PAGE, FETCH_PAGES, SAVE_PAGE } from '../constants';
import { add, get, save, remove } from '../../api/pages';

const pageIsAdded = payload => ({
  type: ADD_PAGE,
  payload,
});

const pageIsDeleted = payload => ({
  type: DELETE_PAGE,
  payload,
});

const pagesIsFetching = payload => ({
  type: FETCH_PAGES,
  payload,
});

const pageIsSaved = payload => ({
  type: SAVE_PAGE,
  payload,
});

export const addPage = () => (dispatch) => {
  add()
    .then(page => dispatch(pageIsAdded(page)))
    .catch(e => console.error(e));
};

export const deletePage = id => (dispatch) => {
  remove(id)
    .then(() => dispatch(pageIsDeleted(id)))
    .catch(e => console.error(e));
};

export const fetchPages = () => (dispatch) => {
  get()
    .then(pages => dispatch(pagesIsFetching(pages)))
    .catch(e => console.error(e));
};

export const savePage = page => (dispatch) => {
  save(page)
    .then(() => dispatch(pageIsSaved(page)))
    .catch(e => console.error(e));
};
