/**
* test scenario for threads reducer
*
* - threadsReducer function
*  - should return the initial state when given by unknown action
*  - should return the threads when given by RECEIVE_THREADS action
*  - should return the threads with the new thread when given by ADD_THREAD action
*  - should return the threads with the toggled like thread when given by TOGGLE_LIKE_THREAD action
*  - should return the threads with the toggled dislike thread when given by TOGGLE_DISLIKE_THREAD action
*  - should return the threads with the toggled neutral like thread when given by TOGGLE_NEUTRAL_LIKE_THREAD action
*  - should return the threads with the toggled neutral dislike thread when given by TOGGLE_NEUTRAL_DISLIKE_THREAD action
*/

import threadsReducer from './reducer';
import { describe, it, expect } from 'vitest';

describe('threadsReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arange
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = threadsReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the threads when given by RECEIVE_THREADS action', () => {
        // arange
        const initialState = [];
        const action = {
            type: 'RECEIVE_THREADS',
            payload: {
                threads: [
                    {
                    id: 'thread-1',
                    title: 'Thread Pertama',
                    body: 'Ini adalah thread pertama',
                    createdAt: '2022-06-21T07:00:00.000Z',
                    category: 'General',
                    upVotesBy: [],
                    downVotesBy: [],
                    totalComments: 0,
                    ownerId : 'user-1'
                    },{
                    id: 'thread-2',
                    title: 'Thread Kedua',
                    body: 'Ini adalah thread kedua',
                    createdAt: '2022-06-22T07:00:00.000Z',
                    category: 'General',
                    upVotesBy: [],
                    downVotesBy: [],
                    totalComments: 1,
                    ownerId : 'user-2'
                    }
                ]
            }        
        };

        // action
        const nextState = threadsReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.threads);
    });

    it('should return the threads with the new thread when given by ADD_THREAD action', () => {
        // arange
        const initialState = [
            {
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
        ];
        const action = {
            type: 'ADD_THREAD',
            payload: {
                thread: [
                    {
                        id: 'thread-2',
                        title: 'Thread Kedua',
                        body: 'Ini adalah thread kedua',
                        createdAt: '2022-06-22T07:00:00.000Z',
                        category: 'General',
                        upVotesBy: [],
                        downVotesBy: [],
                        totalComments: 1,
                        ownerId : 'user-2'
                        }
                ]
            }        
        };

        // action
        const nextState = threadsReducer(initialState, action);

        // assert
        expect(nextState).toEqual([action.payload.thread, ...initialState]);
    });

    it('should return the threads with the toggled like thread when given by TOGGLE_LIKE_THREAD action', () => {
        // arange
        const initialState = [
            {
                id: 'thread-1',
                title: 'Thread Pertama',
                body: 'Ini adalah thread pertama',
                createdAt: '2022-06-21T07:00:00.000Z',
                category: 'General',
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0,
                ownerId : 'user-1',
                userId : 'user-1'

            }];

        const action = {
            type: 'TOGGLE_LIKE_THREAD',
            payload: {
                threadId: 'thread-1',
                userId: 'user-1',
            },
        };
        // action: upvote thread
        const nextState = threadsReducer(initialState, action);

        // assert
        expect(nextState).toEqual([
            {
              ...initialState[0],
              upVotesBy: [action.payload.userId],
            },
          ]);
      
        });
        
        it('should return the threads with the toggled dislike thread when given by TOGGLE_DISLIKE_THREAD action', () => {
             // arange
        const initialState = [
            {
                id: 'thread-1',
                title: 'Thread Pertama',
                body: 'Ini adalah thread pertama',
                createdAt: '2022-06-21T07:00:00.000Z',
                category: 'General',
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0,
                ownerId : 'user-1',
                userId : 'user-1'

            }];

        const action = {
            type: 'TOGGLE_DISLIKE_THREAD',
            payload: {
                threadId: 'thread-1',
                userId: 'user-1',
            },
        };
        // action: upvote thread
        const nextState = threadsReducer(initialState, action);

        // assert
        expect(nextState).toEqual([
            {
              ...initialState[0],
              downVotesBy: [action.payload.userId],
            },
          ]);
        });


        it('should return the threads with the toggled neutral like thread when given by TOGGLE_NEUTRAL_LIKE_THREAD action', () => {
            // arange
        const initialState = [
            {
                id: 'thread-1',
                title: 'Thread Pertama',
                body: 'Ini adalah thread pertama',
                createdAt: '2022-06-21T07:00:00.000Z',
                category: 'General',
                upVotesBy: ['user-1'],
                downVotesBy: [],
                totalComments: 0,
                ownerId : 'user-1',
                userId : 'user-1'

            }];

        const action = {
            type: 'TOGGLE_NEUTRAL_LIKE_THREAD',
            payload: {
                threadId: 'thread-1',
                userId: 'user-1',
            },
        };
        // action: upvote thread
        const nextState = threadsReducer(initialState, action);

        // assert
        expect(nextState).toEqual([
            {
              ...initialState[0],
              upVotesBy: initialState[0].upVotesBy.includes(action.payload.userId)
              && initialState[0].upVotesBy.filter((id) => id !== action.payload.userId),
            },
          ]);
        })

        it('should return the threads with the toggled neutral dislike thread when given by TOGGLE_NEUTRAL_DISLIKE_THREAD action', () => {
               // arange
        const initialState = [
            {
                id: 'thread-1',
                title: 'Thread Pertama',
                body: 'Ini adalah thread pertama',
                createdAt: '2022-06-21T07:00:00.000Z',
                category: 'General',
                upVotesBy: [],
                downVotesBy: ['user-1'],
                totalComments: 0,
                ownerId : 'user-1',
                userId : 'user-1'

            }];

        const action = {
            type: 'TOGGLE_NEUTRAL_DISLIKE_THREAD',
            payload: {
                threadId: 'thread-1',
                userId: 'user-1',
            },
        };
        // action: upvote thread
        const nextState = threadsReducer(initialState, action);

        // assert
        expect(nextState).toEqual([
            {
              ...initialState[0],
              downVotesBy: initialState[0].downVotesBy.includes(action.payload.userId)
              && initialState[0].downVotesBy.filter((id) => id !== action.payload.userId),
            },
          ]);
        });
});