
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

// combine all reducers together
export default combineReducers({
    user: userReducer
});