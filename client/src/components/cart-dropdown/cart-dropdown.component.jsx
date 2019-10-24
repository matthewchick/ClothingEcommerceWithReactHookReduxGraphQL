import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
         {
             cartItems.length ? (
             cartItems.map(cartItem => (
                 <CartItem key={cartItem.id} item={cartItem} />
             ))
             ): (
             <span className='empty-message'>Your cart is empty</span>
             )
         }
        <CustomButton onClick={()=> {
            history.push('/checkout');      //go to checkout page
            dispatch(toggleCartHidden());   //pass action with dispatch
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);
// change the state without rendering to enhance performing
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})
/*
const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
})
*/
export default withRouter(connect(mapStateToProps)(CartDropdown));