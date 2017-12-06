import { persistStore, autoRehydrate } from 'redux-persist';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import questions from './reducer';

const reducers = combineReducers({
  questions,
});

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(logger),
    autoRehydrate(),
  ),
);

persistStore(store)

export default store;
