import { CartActionTypes } from './cart.types';

// Action Creator and Action pass user as a parameter 
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN

});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})