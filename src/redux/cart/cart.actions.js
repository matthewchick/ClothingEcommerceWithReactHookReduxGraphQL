import { CartActionTypes } from './cart.types';

// Action Creator and Action pass user as a parameter 
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN

});