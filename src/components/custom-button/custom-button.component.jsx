import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {console.log('children', children)}
        {console.log('otherProps',otherProps)}
        {children}
    </button>
)

export default CustomButton;