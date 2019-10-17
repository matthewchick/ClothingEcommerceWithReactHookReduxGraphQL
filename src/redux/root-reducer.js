
import { combineReducers } from 'redux';
//persistReducer will be used in our rootReducer to define it as something we want to persist.
import { persistReducer } from 'redux-persist';
// use localstorage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
/*
key: this value will define what will be the key that we will use as identifier to save the persisted information. 
Once created must be the same always (if you change the name after there was a persistence, 
redux-persist won’t find any information and it will load the default values)
storage: The engine we will use for persistence.
blacklist: list of reducers names that will be ignored when the persistence will be done
whitelist: list of reducers names that will be used when the persistence will be done. 
Other reducers will be ignored
*/
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

// combine all reducers together
const rootReducer = combineReducers({
    //user, cart and directory are state
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);