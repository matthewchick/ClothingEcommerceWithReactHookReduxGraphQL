import { CartActionTypes } from './cart.types';

// Action Creator and Action pass user as a parameter 
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN

});
// add item to Cart
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
// remove item from Cart
export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});
// clear item from Cart
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});
