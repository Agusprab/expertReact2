/**
* test scenario for isPreload reducer
*
* - isPreloadReducers function
*  - should return the initial state when given by unknown action
*  - should return the isPreload when given by SET_IS_PRELOAD action
*/

import isPreloadReducer from "./reducer";
import { describe, it, expect } from "vitest";

describe("isPreloadReducer function", () => {
    it("should return the initial state when given by unknown action", () => {
        // arange
        const initialState = true;
        const action = { type: "UNKNOWN" };

        // action
        const nextState = isPreloadReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    })

    it("should return the isPreload when given by SET_IS_PRELOAD action", () => {
        // arange
        const initialState = [];
        const action = {
            type: "SET_IS_PRELOAD",
            payload: {
                isPreload: false
            }            
        };

        // action
        const nextState = isPreloadReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.isPreload);
    })
})