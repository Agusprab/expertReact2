import { ActionType } from "./action";

function commentsReducer(comments = [], actions = {}) {
    switch (actions.type) {
      case ActionType.ADD_COMMENT_THREAD:
        return [actions.payload.comment]; 
        case ActionType.RECEIVE_COMMENTS:
            return actions.payload.comments;
            case ActionType.TOGGLE_LIKE_COMMENT:
                return comments.map((comment) => {
                    if (comment.id === actions.payload.commentId) {
                        return {
                            ...comment,
                            upVotesBy: comment.upVotesBy.includes(actions.payload.userId)
                                ? comment.upVotesBy.filter((id) => id !== actions.payload.userId)
                                : comment.upVotesBy.concat([actions.payload.userId]),
                        };
                    }
                    return comment;
                });
                case ActionType.TOGGLE_DISLIKE_COMMENT:
                    return comments.map((comment) => {
                        if (comment.id === actions.payload.commentId) {
                            return {
                                ...comment,
                                downVotesBy: comment.downVotesBy.includes(actions.payload.userId)
                                    ? comment.downVotesBy.filter((id) => id !== actions.payload.userId)
                                    : comment.downVotesBy.concat([actions.payload.userId]),
                            };
                        }
                        return comment;
                    });    
                    case ActionType.TOGGLE_NEUTRAL_LIKE_COMMENT:
                        return comments.map((comment) => {
                          if (comment.id === actions.payload.commentId) {
                            return {
                              ...comment,
                              upVotesBy:
                                comment.upVotesBy.includes(actions.payload.userId)
                                && comment.upVotesBy.filter((id) => id !== actions.payload.userId),
                            };
                          }
                          return comment;
                        });
                      case ActionType.TOGGLE_NEUTRAL_DISLIKE_COMMENT:
                        return comments.map((comment) => {
                          if (comment.id === actions.payload.commentId) {
                            return {
                              ...comment,
                              downVotesBy:
                                comment.downVotesBy.includes(actions.payload.userId)
                                && comment.downVotesBy.filter((id) => id !== actions.payload.userId),
                            };
                          }
                          return comment;
                        });   
         default:
            return comments;
    }
}

export default commentsReducer;