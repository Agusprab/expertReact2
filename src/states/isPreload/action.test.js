import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';
import {  describe, vi, it, expect, beforeEach, afterEach, } from 'vitest';

const fakeErrorResponse = () => { throw new Error('Ups something wrong'); };

const fakeUsersResponse = [
    { 
        id: 'u1', 
        name: 'User 1', 
        email: 'user@user', 
        avatar: 'user.png' },
  ];


describe('AsyncPreloadProcess Thunk', () => {
    beforeEach(() => {
        api._getOwnProfile = api.getOwnProfile;
      });
    
      afterEach(() => {
        api.getOwnProfile = api._getOwnProfile;
        delete api._getOwnProfile;
      });

      it('shoud dispatch setAuthUserActionCreator when getOwnProfile success', async () => {
        // arrange
        // stub implementation
        api.getOwnProfile = () => Promise.resolve(fakeUsersResponse);

        // mock dispatch
        const dispatch = vi.fn();

        // action
        await asyncPreloadProcess()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUsersResponse)); 
        expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));  
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
      });

      it('should dispatch setAuthUserActionCreator with argument null when getOwnProfile API call failed', async () => {
        // arrange
    
        // stub implementation
        api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    
        // mock dispatch
        const dispatch = vi.fn();
    
        // action
        await asyncPreloadProcess()(dispatch);
    
        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));  
        expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));  
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
      });
})