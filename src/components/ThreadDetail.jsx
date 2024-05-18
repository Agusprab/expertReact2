import PropTypes from 'prop-types';
import {ubahFormatTanggal} from '../utils/index'
import CommentThreadInput from './CommentThreadInput';
import CommentThreadList from './CommentThreadList';
 
function ThreadDetail({
    id,
    owner, 
    title, 
    body, 
    createdAt, 
    category, 
    upVotesBy, 
    downVotesBy, 
    totalComments,
    authUser, 
    like, 
    dislike, 
    neutralLike, 
    neutralDislike,
    addComment
}) {
    
    const isThreadLiked = upVotesBy?.includes(authUser.id);
    const isThreadDisliked = downVotesBy?.includes(authUser.id);

 

    function onLikeClick (e){
        e.stopPropagation();
        if (!isThreadLiked && !isThreadDisliked) {
          like(id);
        } else if (isThreadDisliked) {
          neutralDislike(id);
          like(id);
        } else if (isThreadLiked) {
          neutralLike(id);
        }
    }

    function onDislikeClick (e){
        e.stopPropagation();
        
    if (!isThreadLiked && !isThreadDisliked) {
        dislike(id);
      } else if (isThreadLiked) {
        neutralLike(id);
        dislike(id);
      } else if (isThreadDisliked) {
        neutralDislike(id);
      }
    }

  
    if(owner == null){
        return null;
    }

  return(
    <>
        <div className="container mt-5 ">
            <div className='border border-start-0 border-end-0 border-top-0'>
                <div className="d-flex flex-row mt-3">
                    <div className="p-2">
                        <img src={owner.avatar} className="rounded-circle" height="25" width="25" alt="Avatar"/>
                    </div>
                    <div className="p-2">
                        <p className="fw-bold">{owner.name}</p>
                    </div>
                    <div className="p-2">
                        <p className="fw-light fst-italic fs-6"> • { ubahFormatTanggal(createdAt)}</p>
                    </div>
                </div>
                <article>
                    <div className="d-flex flex-column">
                        <div><p className="fw-medium">{title}</p></div>
                        <div><p className="text-justify" dangerouslySetInnerHTML={{__html: body}}></p></div>
                    </div>
                </article>
                <div className='item-cateogry mb-3'>
                        <button type="button" className="btn btn-outline-secondary btn-sm " disabled>#{category}</button>
                    </div>
                <div className="d-flex flex-row mb-2 reaction">
                        <div>
                            <button type="button" className="btn" onClick={onLikeClick}>{isThreadLiked ? <i className="bi bi-hand-thumbs-up-fill text-primary"></i> : <i className="bi bi-hand-thumbs-up"></i>} {upVotesBy.length}</button>                                          
                        </div>
                        <div>
                            <button type="button" className="btn" onClick={onDislikeClick}>{isThreadDisliked ? <i className="bi bi-hand-thumbs-down-fill text-danger"></i> : <i className="bi bi-hand-thumbs-down"></i>} {downVotesBy.length}</button>                                    
                        </div>                  
                        <div>
                            <button type="button" className="btn"><i className="bi bi-reply"></i> {totalComments}</button>
                         </div>
                </div>
            </div>

            <div className="d-flex flex-row mt-3">
                    <div className="p-2">
                        <img src={authUser.avatar} className="rounded-circle" height="25" width="25" alt="Avatar"/>
                    </div>
                    <div className="p-2">
                        <p className="fw-bolder">{authUser.name}</p>
                    </div>  
            </div>

            <CommentThreadInput addComment={addComment} id={id}/>
            <CommentThreadList/>
            
        </div>
    </>
  )
}
ThreadDetail.propTypes = {
    id: PropTypes.string,
    owner: PropTypes.object,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    category: PropTypes.string,
    upVotesBy: PropTypes.array,
    downVotesBy: PropTypes.array,
    totalComments: PropTypes.number,
    authUser: PropTypes.object,
    like: PropTypes.func,
    dislike: PropTypes.func,
    neutralLike: PropTypes.func,
    neutralDislike: PropTypes.func,
    addComment: PropTypes.func
    };
export default ThreadDetail