//https://redux.js.org/api/applymiddleware
import { createStore, applyMiddleware } from 'redux';
//https://itnext.io/react-native-why-you-should-be-using-redux-persist-8ad1d68fa48b
//persistStore will be used in the store, after being created, and it will define that the store will use Redux-Persist
import { persistStore } from 'redux-persist'
// create a redux store like insurance company's departments
import logger from 'redux-logger';

import rootReducer from './root-reducer';   //call filename, rootReducer

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
