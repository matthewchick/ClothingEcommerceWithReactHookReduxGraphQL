import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({  
    toggleCartHidden: () => dispatch(toggleCartHidden())
}); 

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})
/*
Reselect handles the memoization.
In Redux, whenever an action is called anywhere in the application, 
all mounted & connected components call their 'mapStateToProps' function. 
This is why Reselect is awesome. 
It will just return the memoized result if nothing has changed.

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
*/
/*
const mapStateToProps = ({ cart: { cartItems }}) => ({

    itemCount: cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0) 
})
*/

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);