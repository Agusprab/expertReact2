/**
 * skenario test
 *
 * - asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, beforeEach, afterEach, it, vi, expect, } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncPopulateUsersAndThreads } from './action';
import {receiveThreadsActionCreator} from '../threads/action';
import {receiveUsersActionCreator} from '../users/action';
import {receiveLeaderBoardActionCreator} from '../leaderboards/action';

    const fakeThreadsResponse = [
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
        },
  ];
   
  const fakeUsersResponse = [
    { 
        id: 'u1', 
        name: 'User 1', 
        email: 'user@user', 
        avatar: 'user.png' },
  ];

    const fakeLeaderBoardsResponse = [{
        user : 'user-1',
        score : 100
    }];

    const fakeErrorResponse = new Error('Ups, something went wrong');

   

  describe('asyncPopulateUsersAndThreads thunk', () => {
    beforeEach(() => {
        api._getAllUsers = api.getAllUsers;
        api._getAllThreads= api.getAllThreads;
        api._getAllLeaderBoards = api.getAllLeaderBoards;
      });
     
      afterEach(() => {
        api.getAllUsers = api._getAllUsers;
        api.getAllThreads = api._getAllThreads;
        api.getAllLeaderBoards = api._getAllLeaderBoards;

        // delete backup data
        delete api._getAllUsers;
        delete api._getAllThreads;
        delete api._getAllLeaderBoards;
      });

      it('should dispatch action correctly when data fetching success', async () => {
        // arrange
        // stub implementation
        api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
        api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
        api.getAllLeaderBoards = () => Promise.resolve(fakeLeaderBoardsResponse);
        // mock dispatch
        const dispatch = vi.fn();


        // action
        await asyncPopulateUsersAndThreads()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(receiveLeaderBoardActionCreator(fakeLeaderBoardsResponse));
        expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
        expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
      });

      it('should dispatch action and call alert correctly when data fetching failed', async () => {
        // arrange
        // stub implementation
        api.getAllUsers = () => Promise.reject(fakeErrorResponse);
        api.getAllThreads = () => Promise.reject(fakeErrorResponse);
        api.getAllLeaderBoards = () => Promise.reject(fakeErrorResponse);
        // mock dispatch
        const dispatch = vi.fn();
        // mock alert
        window.alert = vi.fn();    
           
        // action
        await asyncPopulateUsersAndThreads()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
   
      });

      
  })