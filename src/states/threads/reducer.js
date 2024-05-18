import { ActionType } from "./action";

function threadsReducer(threads = [], action = {}){
    switch(action.type){
        case ActionType.RECEIVE_THREADS:
            return action.payload.threads;
        case ActionType.ADD_THREAD:
            return [action.payload.thread, ...threads];
        case ActionType.TOGGLE_LIKE_THREAD:
            return threads.map((thread) => {
                if(thread.id === action.payload.threadId){
                    return{
                        ...thread,
                        upVotesBy: thread.upVotesBy.includes(action.payload.userId)
                            ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
                             : thread.upVotesBy.concat([action.payload.userId]),
                    };
                }
                return thread;
            });
        case ActionType.TOGGLE_DISLIKE_THREAD:
            return threads.map((thread) => {
                if(thread.id === action.payload.threadId){
                    return{
                        ...thread,
                        downVotesBy: thread.downVotesBy.includes(action.payload.userId)
                            ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
                             : thread.downVotesBy.concat([action.payload.userId]),
                    };
                }
                return thread;
            });
        
        case ActionType.TOGGLE_NEUTRAL_LIKE_THREAD:
            return threads.map((thread) => {
                if(thread.id === action.payload.threadId){
                    return {
                        ...thread,
                        upVotesBy:
                        thread.upVotesBy.includes(action.payload.userId)
                        && thread.upVotesBy.filter((id) => id !== action.payload.userId),
                    }
            }
            return thread;
        });
        case ActionType.TOGGLE_NEUTRAL_DISLIKE_THREAD:
            return threads.map((thread) => {
                if (thread.id === action.payload.threadId) {
                  return {
                    ...thread,
                    downVotesBy:
                      thread.downVotesBy.includes(action.payload.userId)
                      && thread.downVotesBy.filter((id) => id !== action.payload.userId),
                  };
                }
                return thread;
              });
        default:
            return threads
        }
}

export default threadsReducer;