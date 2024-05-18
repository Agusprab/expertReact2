import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ThreadDetail from "../components/ThreadDetail";
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from "react";
import { asyncReceiveThreadDetail } from "../states/threadDetail/action";
import {asyncReceiveComments,asyncAddCommentOnThread} from "../states/comments/action";
import { asyncToggleLikeThreadDetail, asyncToggleDislikeThreadDetail, asyncToggleNeutralLikeThreadDetail, asyncToggleNeutralDislikeThreadDetail } from "../states/threadDetail/action";
function DetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch(); 
    const threadDetail = useSelector((states) => states.threadDetail);
    const authUser = useSelector((states) => states.authUser);
   
 
    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(id));
        dispatch(asyncReceiveComments(id));      
      }, [id, dispatch]);
 
 
     function onLike(id){
        dispatch(asyncToggleLikeThreadDetail(id));
    }

    function onDislike(id){
        dispatch(asyncToggleDislikeThreadDetail(id));
    }

    function onNeutralLike(id){
        dispatch(asyncToggleNeutralLikeThreadDetail(id));
    }
    
    function onNeutralDislike(id){
        dispatch(asyncToggleNeutralDislikeThreadDetail(id));
    }
    function onAddComment(content){
      dispatch(asyncAddCommentOnThread({content, commentTo: id}));

    }
    
    return(
        <>
            <div>
                <Header authUser={authUser}/>
                {threadDetail && <ThreadDetail {...threadDetail} addComment={onAddComment} authUser={authUser} like={onLike} dislike={onDislike} neutralLike={onNeutralLike} neutralDislike={onNeutralDislike}/>}
            </div>
        </>        
    )
}

export default DetailPage;