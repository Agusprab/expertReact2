import api from '../../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
const ActionType = {    
    RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
    CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',    
    TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
    TOGGLE_DISLIKE_THREAD_DETAIL: 'TOGGLE_DISLIKE_THREAD_DETAIL',
    TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL: 'TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL',
    TOGGLE_NEUTRAL_DISLIKE_THREAD_DETAIL: 'TOGGLE_NEUTRAL_DISLIKE_THREAD_DETAIL',
    ADD_COMMENT_THREAD: 'ADD_COMMENT_THREAD',
}

function receiveThreadDetailActionCreator(threadDetail) {
    return {
        type : ActionType.RECEIVE_THREAD_DETAIL,
        payload : {
            threadDetail
        }
    }
}

function clearThreadDetailActionCreator() {
    return {
        type : ActionType.CLEAR_THREAD_DETAIL
    }
}




function toggleLikeThreadDetailActionCreator({ threadId, userId }){

    return {
        type : ActionType.TOGGLE_LIKE_THREAD_DETAIL,
        payload : {
            threadId,
            userId
        }
    }
}

function toggleDislikeThreadDetailActionCreator({ threadId, userId }){
    return {
        type : ActionType.TOGGLE_DISLIKE_THREAD_DETAIL,
        payload : {
            threadId,
            userId
        }
    }
}

function toggleNeutralLikeThreadDetailActionCreator({ threadId, userId }){
    return {
        type : ActionType.TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL,
        payload : {
            threadId,
            userId
        }
    }
}

function toggleNeutralDislikeThreadActionCreator({ threadId, userId }){
    return {
        type : ActionType.TOGGLE_NEUTRAL_DISLIKE_THREAD_DETAIL,
        payload : {
            threadId,
            userId
        }
    }
}

function asyncReceiveThreadDetail(threadId) {

    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const threadDetail = await api.getThreadDetail(threadId);
        dispatch(receiveThreadDetailActionCreator(threadDetail));
      } catch (error) {
        alert(error.message);
      }
      dispatch(hideLoading());
    };
  }


  
function  asyncToggleLikeThreadDetail(threadId) {
    return async (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(showLoading());
        dispatch(toggleLikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
    
        try {
          await api.toggleUpVoteThread(threadId);
        } catch (error) {
          alert(error.message);
          dispatch(toggleLikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
        }
        dispatch(hideLoading());
      };
}


function asyncToggleDislikeThreadDetail(threadId) {
    return async (dispatch, getState) => {
      const { authUser } = getState();
      dispatch(showLoading());
      dispatch(toggleDislikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
      try {
        await api.toggleDownVoteThread(threadId);
      } catch (error) {
        alert(error.message);
        dispatch(toggleDislikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
      }
      dispatch(hideLoading());
    };
  }
  
  function asyncToggleNeutralLikeThreadDetail(threadId) {
    return async (dispatch, getState) => {
      const { authUser } = getState();
  
      dispatch(showLoading());
      dispatch(toggleNeutralLikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
      try {
        await api.toggleNeutralVoteThread(threadId);
      } catch (error) {
        alert(error.message);
        dispatch(toggleNeutralLikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
      }
      dispatch(hideLoading());
    };
  }
  
  function asyncToggleNeutralDislikeThreadDetail(threadId) {
    return async (dispatch, getState) => {
      const { authUser } = getState();
      dispatch(showLoading());
      dispatch(toggleDislikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
      try {
        await api.toggleNeutralVoteThread(threadId);
      } catch (error) {
        alert(error.message);
        dispatch(toggleDislikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
      }  dispatch(hideLoading());
    };
  }

  export {
    ActionType,
    receiveThreadDetailActionCreator,
    clearThreadDetailActionCreator,
    
    toggleLikeThreadDetailActionCreator,
    toggleDislikeThreadDetailActionCreator,
    toggleNeutralLikeThreadDetailActionCreator,
    toggleNeutralDislikeThreadActionCreator,
    
    asyncToggleLikeThreadDetail,
    asyncToggleDislikeThreadDetail,
    asyncToggleNeutralLikeThreadDetail,
    asyncToggleNeutralDislikeThreadDetail,
    asyncReceiveThreadDetail
  }


