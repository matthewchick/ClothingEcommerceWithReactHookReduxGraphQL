import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';
import { removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,    // check cart button whether it is clicked
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {           //return an object
                ...state,      //create a new state
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: 
                state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id)
            }
        default:  //don't care the action
            return state;
    }
}

export default cartReducer;