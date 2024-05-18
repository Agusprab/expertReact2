import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
const ActionType = {
    ADD_COMMENT: 'ADD_COMMENT',
    RECEIVE_COMMENTS: 'RECEIVE_COMMENTS', 
    TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT',
    TOGGLE_NEUTRAL_LIKE_COMMENT: 'TOGGLE_NEUTRAL_LIKE_COMMENT',
    TOGGLE_DISLIKE_COMMENT: 'TOGGLE_DISLIKE_COMMENT',
    TOGGLE_NEUTRAL_DISLIKE_COMMENT: 'TOGGLE_NEUTRAL_DISLIKE_COMMENT',
    CLEAR_COMMENTS: 'CLEAR_COMMENTS',
}

function addCommentThreadActionCreator(comment) {
  return {
      type : ActionType.ADD_COMMENT,
      payload : {
          comment
      }
  }  
}
function receiveCommentsActionCreator(comments) {
    return {
        type: ActionType.RECEIVE_COMMENTS,
        payload: {
            comments
        }
    }
}
function ToggleLikeCommentActionCreator({ threadId, commentId, userId }) {

    return {
        type: ActionType.TOGGLE_LIKE_COMMENT,
        payload: {
            threadId,
            commentId,
            userId
        }
}
}
function ToggleNeutralLikeCommentActionCreator({ threadId, commentId, userId }) {

    return {
        type: ActionType.TOGGLE_NEUTRAL_LIKE_COMMENT,
        payload: {
            threadId,
            commentId,
            userId
        }
}
}

function ToggleDislikeCommentActionCreator({ threadId, commentId, userId }) {

    return {
        type: ActionType.TOGGLE_DISLIKE_COMMENT,
        payload: {
            threadId,
            commentId,
            userId
        }
}
}
function ToggleNeutralDislikeCommentActionCreator({ threadId, commentId, userId }) {

    return {
        type: ActionType.TOGGLE_NEUTRAL_DISLIKE_COMMENT,
        payload: {
            threadId,
            commentId,
            userId
        }
}
}

function asyncToggleLikeComment({ threadId, commentId }) {
    return async (dispatch, getState) => {
      const { authUser } = getState();
      dispatch(showLoading());
      dispatch(ToggleLikeCommentActionCreator({ threadId, commentId, userId: authUser.id }));
  
      try {
        await api.toggleUpVoteComment({threadId, commentId});
      } catch (error) {
        alert(error.message);
        dispatch(ToggleLikeCommentActionCreator({ threadId, commentId, userId: authUser.id }));
      }
      dispatch(hideLoading());

    };
  }

  function asyncToggleDislikeComment({ threadId, commentId }) {
    return async (dispatch, getState) => {
      const { authUser } = getState();
      dispatch(showLoading());
      dispatch(ToggleDislikeCommentActionCreator({ threadId, commentId, userId: authUser.id }));
  
      try {
        await api.toggleDownVoteComment({threadId, commentId});
      } catch (error) {
        alert(error.message);
        dispatch(ToggleDislikeCommentActionCreator({ threadId, commentId, userId: authUser.id }));
      }
      dispatch(hideLoading());
    };
  }
  function asyncToggleNeutralLikeComment({ threadId, commentId }) {
    return async (dispatch, getState) => {
      const { authUser } = getState();
      dispatch(showLoading());
      dispatch(ToggleNeutralLikeCommentActionCreator({ threadId, commentId, userId: authUser.id }));
  
      try {
        await api.toggleNeutralVoteComment({threadId,commentId});
      } catch (error) {
        alert(error.message);
        dispatch(ToggleNeutralLikeCommentActionCreator({ threadId,commentId, userId: authUser.id }));
      }
      dispatch(hideLoading());
    };
  }
  function asyncToggleNeutralDislikeComment({ threadId, commentId }) {
    return async (dispatch, getState) => {
      const { authUser } = getState();
  
      dispatch(ToggleNeutralDislikeCommentActionCreator({ threadId,commentId, userId: authUser.id }));
      dispatch(showLoading());
      try {
        await api.toggleNeutralVoteComment({threadId,commentId});
      } catch (error) {
        alert(error.message);
        dispatch(ToggleNeutralDislikeCommentActionCreator({ threadId,commentId, userId: authUser.id }));
      }
      dispatch(hideLoading());
    };
  }
  
function asyncReceiveComments(threadId) {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const threadDetail = await api.getThreadDetail(threadId);
        dispatch(receiveCommentsActionCreator(threadDetail.comments));
      } catch (error) {
        alert(error.message);
      }
      dispatch(hideLoading());
    };
  }

  function asyncAddCommentOnThread({ content, commentTo }) {
    return async (dispatch) => {
      dispatch(showLoading());
  
      try {
        const comment = await api.createComment({ content, commentTo });
        dispatch(addCommentThreadActionCreator(comment));
      } catch (error) {
        alert(error.message);
        }
        dispatch(hideLoading());
    };
  }
 
export { ActionType,
    addCommentThreadActionCreator, 
    receiveCommentsActionCreator,
    asyncReceiveComments,
    ToggleLikeCommentActionCreator,
    asyncToggleLikeComment,
    asyncToggleDislikeComment,
    ToggleNeutralDislikeCommentActionCreator,
    ToggleNeutralLikeCommentActionCreator,
    asyncToggleNeutralDislikeComment,
    asyncToggleNeutralLikeComment,
    asyncAddCommentOnThread
   
}