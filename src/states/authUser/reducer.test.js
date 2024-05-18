/**
* test scenario for authUserReducer
*
* - authUserReducer function
*  - should return the initial state when given by unknown action
*  - should return the authUser when given by RECEIVE_AUTH_USER action
*/

import authUserReducer from "./reducer";
import { describe, it, expect } from 'vitest';

describe('authUserReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arange
        const initialState = null;
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = authUserReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the authUser when given by RECEIVE_AUTH_USER action', () => {
        // arange
        const initialState = null;
        const action = {
            type: 'SET_AUTH_USER',
            payload: {
               authUser : [{
                id: 'user-1',
                name: 'user 1',
                email: 'user1@user.com',
                avatar: 'user.png',
               }]
            }            
        }

        // action
        const nextState = authUserReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.authUser);
    }); 
    
    it('should return null when given by UNSET_AUTH_USER action', () => {
        // arange
        const initialState = null;
        const action = {
            type: 'UNSET_AUTH_USER',
            payload : {
                authUser : null
            }
        }

        // action
        const nextState = authUserReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.authUser);
    
    
    });
})