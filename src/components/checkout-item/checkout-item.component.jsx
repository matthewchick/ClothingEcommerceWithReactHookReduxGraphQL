import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import './checkout-item.styles.scss';

//https://www.w3schools.com/charsets/ref_utf_dingbats.asp
/*
const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }}) => (
const CheckoutItem = ({ cartItem, clearItem }) => (
    { name, imageUrl, price, quantity } = cartItem;
*/
const CheckoutItem = ({ cartItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={ imageUrl } alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({  
    clearItem: item => dispatch(clearItemFromCart(item))
}); 

export default connect (null, mapDispatchToProps)(CheckoutItem);