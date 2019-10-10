
const INITIAL_STATE = {
    currentUser: null     //empty currentUser
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {           //return an object
                ...state,      //create a new state
                currentUser: action.payload
            }
        default:  //don't care the action
            return state;
    }
}

export default userReducer;