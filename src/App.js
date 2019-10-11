import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-out/sign-in-out.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

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
  render() { // remove <Header currentUser={this.state.currentUser}/> when using redux
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({  // https://react-redux.js.org/using-react-redux/connect-mapdispatch
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
