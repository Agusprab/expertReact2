import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import commentsReducer from './comments/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
const store = configureStore({
    reducer: {
        users: usersReducer,
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        threads : threadsReducer,
        threadDetail: threadDetailReducer,
        comments : commentsReducer,
        leaderboards : leaderboardsReducer,
        loadingBar: loadingBarReducer,
        
    },
  });
  
  export default store;
  