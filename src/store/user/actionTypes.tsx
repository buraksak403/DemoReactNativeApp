import { UserData } from './models';

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_USERS = 'SET_USERS';

interface AddUserAction {
    type: typeof ADD_USER;
    payload: UserData;
}

interface DeleteUserAction {
    type: typeof DELETE_USER;
    payload: {
        id: number
    }
}

interface SetUsers {
    type: typeof SET_USERS;
    payload: UserData[];
}

export type UserActionTypes = AddUserAction | DeleteUserAction | SetUsers;