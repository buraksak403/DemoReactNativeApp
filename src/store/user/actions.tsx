import { UserData } from './models'
import { UserActionTypes, ADD_USER, DELETE_USER, SET_USERS } from './actionTypes';

export function addUser(newUser: UserData): UserActionTypes {
    return {
        type: ADD_USER,
        payload: newUser,
    };
}

export function deleteUser(id: number): UserActionTypes {
    return {
        type: DELETE_USER,
        payload: {
            id
        }
    };
}

export function setUsers(users: UserData[]): UserActionTypes {
    return {
        type: SET_USERS,
        payload: users
    };
}