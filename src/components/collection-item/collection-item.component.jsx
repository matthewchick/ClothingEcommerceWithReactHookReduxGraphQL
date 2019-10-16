import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem=({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
)};
// mapDispatchToProps - pass redux setState to the props
const mapDispatchToProps = dispatch => ({  
    addItem: item => dispatch(addItem(item))  //call addItem() in cart.action
}); 
export default connect(null, mapDispatchToProps)(CollectionItem);