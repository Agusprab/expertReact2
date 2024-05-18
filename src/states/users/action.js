import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
const ActionType = {
    RECEVE_USERS: 'RECEIVE_USERS',
  };

  function receiveUsersActionCreator(users) {
    return {
      type: ActionType.RECEVE_USERS,
      payload: {
        users,
      },
    };
  }
function asyncRegisterUser({ name, email, password }) {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        await api.register({name, email , password });
      } catch (error) {
        alert(error.message);
      } 
      dispatch(hideLoading());     
    };
  }

  
export {
    ActionType,    
    asyncRegisterUser,
    receiveUsersActionCreator
  };
  