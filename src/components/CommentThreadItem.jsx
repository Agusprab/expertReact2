import PropTypes from 'prop-types';
import {postedAt} from '../utils';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function CommentThreadItem({id,content,createdAt,owner,upVotesBy,downVotesBy,like,dislike,neutralLike,neutralDislike}){

    const authUser = useSelector((states) => states.authUser);
    const isThreadLiked = upVotesBy.includes(authUser.id);
    const isThreadDisliked = downVotesBy.includes(authUser.id);

 
    const { id: idThread } = useParams();    
    function onLikeClick (e){
        e.stopPropagation();
        if (!isThreadLiked && !isThreadDisliked) {
          like(idThread,id);
        } else if (isThreadDisliked) {
          neutralDislike(idThread,id);
          like(idThread,id);
        } else if (isThreadLiked) {
          neutralLike(idThread,id);
        }
    }

    function onDislikeClick (e){
        e.stopPropagation();
        
    if (!isThreadLiked && !isThreadDisliked) {
        dislike(idThread,id);
      } else if (isThreadLiked) {
        neutralLike(idThread,id);
        dislike(idThread,id);
      } else if (isThreadDisliked) {
        neutralDislike(idThread,id);
      }
    }
    return(
        <>
            <div className='p-2 mb-3 border '>
                
         <div className="d-flex flex-row mt-3">
                    <div className="p-2">
                        <img src={owner.avatar} className="rounded-circle" height="25" width="25" alt="Avatar"/>
                    </div>
                    <div className="p-2">
                        <p className="fw-bold">{owner.name}</p>
                    </div>
                    <div className="p-2">
                        <p className="fw-light fst-italic fs-6"> • { postedAt(createdAt)}</p>
                    </div>
        </div>
        <div>
            <p className="text-justify" dangerouslySetInnerHTML={{__html: content}}></p>
        </div>

        <div className="d-flex flex-row mb-2 reaction">
                        <div>
                            <button type="button" className="btn" onClick={onLikeClick}>{isThreadLiked ? <i className="bi bi-hand-thumbs-up-fill text-primary"></i> : <i className="bi bi-hand-thumbs-up"></i>} {upVotesBy.length}</button>                                          
                        </div>
                        <div>
                            <button type="button" className="btn" onClick={onDislikeClick}>{isThreadDisliked ? <i className="bi bi-hand-thumbs-down-fill text-danger"></i> : <i className="bi bi-hand-thumbs-down"></i>} {downVotesBy.length}</button>                                    
                        </div>                  
                         
                </div>        
            </div>
        </>
    )
}

CommentThreadItem.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.object,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    like: PropTypes.func.isRequired,
    dislike: PropTypes.func.isRequired,
    neutralLike: PropTypes.func.isRequired,
    neutralDislike: PropTypes.func.isRequired,
}

export default CommentThreadItem;