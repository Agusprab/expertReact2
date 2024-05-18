/**
* test scenario for leaderboards reducer
*
* - leaderboardsReducer function
*  - should return the initial state when given by unknown action
*  - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
*/

import leaderboardsReducer from "./reducer";
import { describe, it, expect } from "vitest";

describe('leaderboardsReducer function', () => {
    it("should return the initial state when given by unknown action", () => {
        // arange
        const initialState = true;
        const action = { type: "UNKNOWN" };

        // action
        const nextState = leaderboardsReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    })

    it("should return the leaderboards when given by RECEIVE_LEADERBOARDS action", () => {
        // arange
        const initialState = [];
        const action = {
            type: "RECEIVE_LEADERBOARDS",
            payload: {
                leaderboards : {
                    user : 'user-1',
                    score : 100

                }
            }}

        // action
        const nextState = leaderboardsReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.leaderboards);
    })
})