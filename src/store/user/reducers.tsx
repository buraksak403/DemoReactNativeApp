import { UserState } from './models';
import { UserActionTypes, ADD_USER, DELETE_USER, SET_USERS } from './actionTypes';

const initialState: UserState = {
    users: [],
};
export function userReducer(
    state = initialState,
    action: UserActionTypes,
): UserState {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
            };
        case DELETE_USER:
            return {
                users: state.users.filter(
                    user => user.id !== action.payload.id,
                ),
            };
        case SET_USERS:
            return {
                users: action.payload
            }
        default:
            return state;
    }
}