import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
    hidden: true    //empty currentUser
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {           //return an object
                ...state,      //create a new state
                hidden: !state.hidden
            }
        default:  //don't care the action
            return state;
    }
}

export default cartReducer;