/**
* test scenario for user reducer
*
* - usersReducer function
*  - should return the initial state when given by unknown action
*  - should return the users when given by RECEIVE_USERS action
*/

import { describe, it, expect } from "vitest";
import usersReducer from "./reducer";

describe('usersReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arange
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = usersReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the users when given by RECEIVE_USERS action', () => {
        // arange
        const initialState = [];
        const action = {
            type: 'RECEIVE_USERS',
            payload: {
                users: [{ id: 'u1', name: 'User 1', email: 'user@user', avatar: 'user.png' }]
            }
        };

        // action
        const nextState = usersReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.users);
        });
    
})
