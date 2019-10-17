import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-out/sign-in-out.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends Component{
  /* constructor() { //use redux, the following are not needed
    super();
    this.state = {
      currentUser: null
    }
  } */
  unsubsribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //if storing google user authentication, 
        userRef.onSnapshot(snapShot => {
          console.log('Get Firebase',snapShot.data());  //snapShot.data() includes createdAt, displayName and email
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          }); 
          /*this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log('this.state', this.state);
            }) 
          }) */  
        }
        setCurrentUser(userAuth);
    })
  }
  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }
  /*
  'Switch' is used to wrap multiple <Route/> components. It only picks the first matching
  */
  render() { // remove <Header currentUser={this.state.currentUser}/> when using redux
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />   
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})
//map redux state to props
/* const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
*/
export default connect(mapStateToProps, {setCurrentUser})(App);
/*
const mapDispatchToProps = dispatch => ({  // https://react-redux.js.org/using-react-redux/connect-mapdispatch
  setCurrentUser: user => dispatch(setCurrentUser(user))
}); 
export default connect(null, mapDispatchToProps)(App);
*/
