/**
* test scenario for thread detail reducer
*
* - threadDetailReducer function
*  - should return the initial state when given by unknown action
*  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
*  - should return null with the new thread when given by CLEAR_THREAD_DETAIL action
*  - should return the thread detail with the toggled like thread when given by TOGGLE_LIKE_THREAD_DETAIL action
*  - should return the thread detail with the toggled dislike thread when given by TOGGLE_DISLIKE_THREAD_DETAIL action
*  - should return the thread detail with the toggled neutral like thread when given by TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL action
*  - should return the thread detail with the toggled neutral dislike thread when given by TOGGLE_NEUTRAL_DISLIKE_THREAD_DETAIL action
*/

import threadDetail from './reducer';
import { describe, it, expect } from 'vitest';

describe('threadDetailReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arange
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = threadDetail(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
        // arange
        const initialState = [];
        const action = {
            type: 'RECEIVE_THREAD_DETAIL',
            payload: {
                threadDetail: {
                    id: 'thread-1',
                    title: 'Thread Pertama',
                    body: 'Ini adalah thread pertama',
                    createdAt: '2022-06-21T07:00:00.000Z',
                    category: 'General',
                    upVotesBy: [],
                    downVotesBy: [],
                    totalComments: 0,
                    ownerId : 'user-1'
                }
            }
        };

        // action
        const nextState = threadDetail(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.threadDetail);
    });

    it('should return null with the new thread when given by CLEAR_THREAD_DETAIL action', () => {
        // arange
        const initialState = [];
        const action = {
            type: 'CLEAR_THREAD_DETAIL',
            payload: []
        };
    
        // action
        const nextState = threadDetail(initialState, action);
    
        // assert
        expect(nextState).toEqual(null);
    });

    it('should return the thread detail with the toggled like thread when given by TOGGLE_LIKE_THREAD_DETAIL action', () => {
        // arange
        const initialState = {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            createdAt: '2022-06-21T07:00:00.000Z',
            category: 'General',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
            ownerId : 'user-1'
        };
        const action = {
            type: 'TOGGLE_LIKE_THREAD_DETAIL',
            payload: {
                threadId: 'thread-1',
                userId: 'user-1'
            }
        };
        // action
        const nextState = threadDetail(initialState, action);
        // assert
        expect(nextState).toEqual({
            ...initialState,
            upVotesBy: [action.payload.userId],
        });
    });
    
    it('should return the thread detail with the toggled dislike thread when given by TOGGLE_DISLIKE_THREAD_DETAIL action', () => {
        // arange
        const initialState = {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            createdAt: '2022-06-21T07:00:00.000Z',
            category: 'General',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
            ownerId : 'user-1'
        };
        const action = {
            type: 'TOGGLE_DISLIKE_THREAD_DETAIL',
            payload: {
                threadId: 'thread-1',
                userId: 'user-1'
            }
        }

        // action
        const nextState = threadDetail(initialState, action);
        // assert
        expect(nextState).toEqual({
            ...initialState,
            downVotesBy: [action.payload.userId],
        });
    });

    it('should return the thread detail with the toggled neutral like thread when given by TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL action', () => {
         // arange
         const initialState = {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            createdAt: '2022-06-21T07:00:00.000Z',
            category: 'General',
            upVotesBy: ['user-1'],
            downVotesBy: [],
            totalComments: 0,
            ownerId : 'user-1'
        };
        const action = {
            type: 'TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL',
            payload: {
                threadId: 'thread-1',
                userId: 'user-1'
            }
        }

        // action
        const nextState = threadDetail(initialState, action);
        // assert
        expect(nextState).toEqual({
            ...initialState,
            upVotesBy: [],
        });    
    })

    it('should return the thread detail with the toggled neutral dislike thread when given by TOGGLE_NEUTRAL_DISLIKE_THREAD_DETAIL action', () => {
     // arange
     const initialState = {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        createdAt: '2022-06-21T07:00:00.000Z',
        category: 'General',
        upVotesBy: [],
        downVotesBy: ['user-1'],
        totalComments: 0,
        ownerId : 'user-1'
    };
    const action = {
        type: 'TOGGLE_NEUTRAL_DISLIKE_THREAD_DETAIL',
        payload: {
            threadId: 'thread-1',
            userId: 'user-1'
        }
    }

    // action
    const nextState = threadDetail(initialState, action);
    // assert
    expect(nextState).toEqual({
        ...initialState,
        downVotesBy: [],
    });      
    })

   
});