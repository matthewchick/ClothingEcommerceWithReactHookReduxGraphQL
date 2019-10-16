/*
Reselect handles the memoization.
In Redux, whenever an action is called anywhere in the application, 
all mounted & connected components call their 'mapStateToProps' function. 
This is why Reselect is awesome. 
It will just return the memoized result if nothing has changed.
https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c
*/
import { createSelector } from 'reselect';

const selectCart = state => state.cart;
//const selectUser = state => state.user;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumalatedTotal, cartItem) => accumalatedTotal + cartItem.quantity * cartItem.price, 0
    )
);