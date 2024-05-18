import CommentThreadItem from "./CommentThreadItem"

import { useDispatch, useSelector } from "react-redux";
import {asyncToggleLikeComment,asyncToggleDislikeComment,asyncToggleNeutralLikeComment,asyncToggleNeutralDislikeComment} from "../states/comments/action";
 
 
function CommentThreadList(){
 
    const comments = useSelector((states) => states.comments);
    const dispatch = useDispatch();
    function onLike(threadId, commentId){
        dispatch(asyncToggleLikeComment({threadId, commentId}));
    }

    function onDislike(threadId, commentId){
        
        dispatch(asyncToggleDislikeComment({threadId, commentId}));
    }

    function onNeutralLike(threadId, commentId){
   
        dispatch(asyncToggleNeutralLikeComment({threadId, commentId}));
    }
    
    function onNeutralDislike(threadId, commentId){ 
        dispatch(asyncToggleNeutralDislikeComment({threadId, commentId}));
    }   
 
    return(
        <>
            {comments.length > 0 && comments.map((comment) => (
                <CommentThreadItem key={comment.id} {...comment} like={onLike} dislike={onDislike} neutralLike={onNeutralLike} neutralDislike={onNeutralDislike} />
                
            ))}
        </>
    )
}

CommentThreadList.propTypes = {
   
}
export default CommentThreadList