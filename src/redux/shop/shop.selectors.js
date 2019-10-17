import { createSelector } from 'reselect';

const selectShop = state => state.shop;
//const selectUser = state => state.user;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections  // put shop collections inside shop.reducer.js into state
);

/* shop.reducer.js
import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        
        default:  //don't care the action
            return state;
    }
}

export default shopReducer;
*/