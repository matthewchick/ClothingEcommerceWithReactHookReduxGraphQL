import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
// A selector to retrieve shop from a store
const selectShop = state => state.shop;
//const selectUser = state => state.user;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections  // put shop collections inside shop.reducer.js into state
);

export const selectCollection = collectionUrlParam => createSelector(  //selectCollection(collectionUrlParam)
    [selectCollections],
    collections =>
        collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )

)
/* currying https://stackoverflow.com/questions/36314/what-is-currying
function add (a, b) {
  return a + b;
}

add(3, 4); // returns 7
function add (a) {
  return function (b) {
    return a + b;
  }
}
add(3)(4);
var add3 = add(3);
add3(4);
*/
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