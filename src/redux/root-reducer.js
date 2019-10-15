
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// combine all reducers together
export default combineReducers({
    //user and cart are state
    user: userReducer,
    cart: cartReducer
});