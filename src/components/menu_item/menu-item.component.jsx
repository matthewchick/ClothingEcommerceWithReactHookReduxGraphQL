import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

/* pass css &.large -> menu-item .large
&.large {
        height: 380px;
    }
*/
/*
Each router creates a 'history' object that it uses to keep track of the current location
and re-renders the application whenever this location changes.
*/
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
        <div className= 'background-image' 
            style={{
            backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
