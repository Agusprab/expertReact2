import api from '../../utils/api';
import {receiveThreadsActionCreator} from '../threads/action';
import {receiveUsersActionCreator} from '../users/action';
import {receiveLeaderBoardActionCreator} from '../leaderboards/action';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
function asyncPopulateUsersAndThreads() {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const users = await api.getAllUsers();
        const threads = await api.getAllThreads();
        const leaderboards = await api.getAllLeaderBoards();
        dispatch(receiveLeaderBoardActionCreator(leaderboards));
        dispatch(receiveUsersActionCreator(users));
        dispatch(receiveThreadsActionCreator(threads));
      } catch (error) {
        alert(error.message);
      }
      dispatch(hideLoading());
    };
  }


export { asyncPopulateUsersAndThreads }