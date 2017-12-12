import { persistStore, autoRehydrate } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import questions from './reducer';

const store = createStore(
  questions,
  compose(
    applyMiddleware(logger),
    autoRehydrate(),
  ),
);

persistStore(store)

export default store;
