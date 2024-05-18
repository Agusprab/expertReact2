/**
* test scenario for comments reducer
*
* - commnetReducer function
*  - should return the initial state when given by unknown action
*  - should return the comments when given by RECEIVE_COMMENTS action
*  - should return the threads with the new comment when given by ADD_COMMENT_THREAD action
*  - should return the threads with the toggled like comment when given by TOGGLE_LIKE_COMMENT action
*  - should return the threads with the toggled dislike comment when given by TOGGLE_DISLIKE_COMMENT action
*  - should return the threads with the toggled neutral like comment when given by TOGGLE_NEUTRAL_LIKE_COMMENT action
*  - should return the threads with the toggled neutral dislike comment when given by TOGGLE_NEUTRAL_DISLIKE_COMMENT action
*/

import commentReducer from './reducer';
import { describe, it, expect } from 'vitest';

describe('comments reducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arange
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = commentReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the comments when given by RECEIVE_COMMENTS action', () => {
        // arange
        const initialState = [];
        const action = {
            type: 'RECEIVE_COMMENTS',
            payload: {
                comments: [{
                    id : 'comment-1',
                    content : 'Ini adalah comment pertama',
                    createdAt : '2022-06-21T07:00:00.000Z',
                    upVotesBy : [],
                    downVotesBy : [],
                    owner : {'id': 'user-1', 'name': 'user', 'avatar': 'user.png'},
                    threadId : 'thread-1'
                }],
            },
        };

        // action
        const nextState = commentReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.comments);
    });

    it('should return the threads with the new comment when given by ADD_COMMENT_THREAD action', () => {
        // arange
        const initialState = [];
        const action = {
            type: 'RECEIVE_COMMENTS',
            payload: {
                comments: [{
                    id : 'comment-1',
                    content : 'Ini adalah comment pertama',
                    createdAt : '2022-06-21T07:00:00.000Z',
                    upVotesBy : [],
                    downVotesBy : [],
                    owner : {'id': 'user-1', 'name': 'user', 'avatar': 'user.png'},
                    threadId : 'thread-1'
                }],
            },
        };

        // action
        const nextState = commentReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.comments);
    });

    it('should return the threads with the toggled like comment when given by TOGGLE_LIKE_COMMENT action', () => {
        // arange
        const initialState = [
            {
                id : 'comment-1',
                content : 'Ini adalah comment pertama',
                createdAt : '2022-06-21T07:00:00.000Z',
                upVotesBy : [],
                downVotesBy : [],
                owner : {'id': 'user-1', 'name': 'user', 'avatar': 'user.png'},
                threadId : 'thread-1'
            }];
        
        const action = {
            type: 'TOGGLE_LIKE_COMMENT',
            payload: {
                threadId: 'thread-1',
                commentId: 'comment-1',
                userId: 'user-1',
            },
        }

        // action
        const nextState = commentReducer(initialState, action);

        // assert
        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [action.payload.userId],
            }]);
        
    
    });

    it('should return the threads with the toggled dislike comment when given by TOGGLE_DISLIKE_COMMENT action', () => {
        // arange
        const initialState = [
            {
                id : 'comment-1',
                content : 'Ini adalah comment pertama',
                createdAt : '2022-06-21T07:00:00.000Z',
                upVotesBy : [],
                downVotesBy : [],
                owner : {'id': 'user-1', 'name': 'user', 'avatar': 'user.png'},
                threadId : 'thread-1'
            }];
        
        const action = {
            type: 'TOGGLE_DISLIKE_COMMENT',
            payload: {
                threadId: 'thread-1',
                commentId: 'comment-1',
                userId: 'user-1',
            },
        }

        // action
        const nextState = commentReducer(initialState, action);

        // assert
        expect(nextState).toEqual([
            {
                ...initialState[0],
                downVotesBy: [action.payload.userId],
            }]);
    });

    it('should return the threads with the toggled neutral like comment when given by TOGGLE_NEUTRAL_LIKE_COMMENT action', () => {
        // arange
        const initialState = [
            {
                id : 'comment-1',
                content : 'Ini adalah comment pertama',
                createdAt : '2022-06-21T07:00:00.000Z',
                upVotesBy : ['user1'],
                downVotesBy : [],
                owner : {'id': 'user-1', 'name': 'user', 'avatar': 'user.png'},
                threadId : 'thread-1'
            }];
        
        const action = {
            type: 'TOGGLE_NEUTRAL_LIKE_COMMENT',
            payload: {
                threadId: 'thread-1',
                commentId: 'comment-1',
                userId: 'user-1',
            },
        }

        // action
        const nextState = commentReducer(initialState, action);

        // assert
        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: initialState[0].upVotesBy.includes(action.payload.userId)
                && initialState[0].upVotesBy.filter((id) => id !== action.payload.userId),
            }]);
    });

    it('should return the threads with the toggled neutral dislike comment when given by TOGGLE_NEUTRAL_DISLIKE_COMMENT action', () => {
    
       // arange
       const initialState = [
        {
            id : 'comment-1',
            content : 'Ini adalah comment pertama',
            createdAt : '2022-06-21T07:00:00.000Z',
            upVotesBy : [],
            downVotesBy : ['user1'],
            owner : {'id': 'user-1', 'name': 'user', 'avatar': 'user.png'},
            threadId : 'thread-1'
        }];
    
    const action = {
        type: 'TOGGLE_NEUTRAL_DISLIKE_COMMENT',
        payload: {
            threadId: 'thread-1',
            commentId: 'comment-1',
            userId: 'user-1',
        },
    }

    // action
    const nextState = commentReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
        {
            ...initialState[0],
            downVotesBy: initialState[0].downVotesBy.includes(action.payload.userId)
            && initialState[0].downVotesBy.filter((id) => id !== action.payload.userId),
        }]);
    });
        
});