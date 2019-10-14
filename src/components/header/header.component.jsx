import React from 'react';
import { Link } from 'react-router-dom';
// https://react-redux.js.org/api/connect
// The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to ="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to ='/shop'>SHOP</Link>
            <Link className='option' to ='/contact'>CONTACT</Link>
            {
            currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
            </div>
            ) : (
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
            )}
            <CartIcon />
        </div>
    </div>
);
// it will call when the store state changes
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

//Your component will receive dispatch by default, i.e., when you do not supply a second parameter to connect():
export default connect(mapStateToProps)(Header);