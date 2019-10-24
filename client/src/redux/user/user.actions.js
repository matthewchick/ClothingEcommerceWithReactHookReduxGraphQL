import { UserActionTypes } from './user.types';

// Action Creator and Action pass user as a parameter 
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});