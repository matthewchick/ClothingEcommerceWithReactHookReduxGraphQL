// https://redux.js.org/api/applymiddleware
import { createStore, applyMiddleware } from 'redux';
// https://itnext.io/react-native-why-you-should-be-using-redux-persist-8ad1d68fa48b
// persistStore will be used in the store, after being created, and it will define that the store will use Redux-Persist
import { persistStore } from 'redux-persist'
// create a redux store like insurance company's departments
import logger from 'redux-logger';
// https://medium.com/@gethylgeorge/understanding-how-redux-thunk-works-72de3bdebc50
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';   //call filename, rootReducer

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
