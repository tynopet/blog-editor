// @flow
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pages from './reducers/pages';

const configureStore = (history: any): any => {
  const middlewares = applyMiddleware(thunk, routerMiddleware(history), logger);
  const reducers = combineReducers({
    routing,
    pages,
  });
  return createStore(reducers, middlewares);
};

export default configureStore;
