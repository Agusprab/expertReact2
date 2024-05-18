import PropTypes from 'prop-types';
import  {postedAt}  from '../utils/';
import { useNavigate } from 'react-router-dom';
function ThreadItem({
    id,
    title,
    body,
    createdAt,
    user,
    upVotesBy,
    downVotesBy,
    totalComments,
    category,
    authUser,
    like,
    dislike,
    neutralLike,
    neutralDislike
    }) {

    const navigate = useNavigate();
    const isThreadLiked = upVotesBy.includes(authUser);
    const isThreadDisliked = downVotesBy.includes(authUser);
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

    const onThreadClick = () => {
        navigate(`/thread/${id}`);
      };
    
      const onThreadPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          navigate(`/talks/${id}`);
        }
      };
   if(title.length > 0){
    return(
        <>                     
     
        <div className="thread-item border border-top-0 border-start-0 border-end-0 pe-auto" onClick={onThreadClick} onKeyDown={onThreadPress}>
            <header>
                <div className="d-flex flex-row mt-3">
                    <div className="p-2">
                        <img src={user.avatar} className="rounded-circle" height="25" width="25" alt="Avatar"/>
                    </div>
                    <div className="p-2">
                        <p className="fw-medium">{user.name}</p>
                    </div>
                    <div className="p-2">
                       <p className="fw-light fst-italic fs-6">{postedAt(createdAt)}</p>
                    </div>
                    
                </div>
                <div className='item-cateogry'>
                    <button type="button" className="btn btn-outline-secondary btn-sm " disabled>#{category}</button>
                </div>
            </header>
            <article>
                <div className="d-flex flex-column">
                    <div><p className="fw-medium">{title}</p></div>
                    <div><p className="text-justify" dangerouslySetInnerHTML={{__html: body.length > 250 ? body.substring(0, 250) + '...' : body}}></p></div>
                </div>
            </article>
            <footer>
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
            </footer>
            </div>


        </>
    )
   }
}
ThreadItem.propTypes = {
  id : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  body : PropTypes.string.isRequired,
  createdAt : PropTypes.string.isRequired,
  user : PropTypes.object.isRequired,
  upVotesBy : PropTypes.array.isRequired,
  downVotesBy : PropTypes.array.isRequired,
  totalComments : PropTypes.number.isRequired,
  category : PropTypes.string.isRequired,
  authUser : PropTypes.string.isRequired,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralLike: PropTypes.func,
  neutralDislike: PropTypes.func,
  };
  

export default ThreadItem;