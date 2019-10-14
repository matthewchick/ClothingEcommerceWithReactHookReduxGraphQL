//https://redux.js.org/api/applymiddleware
import { createStore, applyMiddleware } from 'redux';

// create a redux store like insurance company's departments
import logger from 'redux-logger';

import rootReducer from './root-reducer';   //call filename, rootReducer

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
