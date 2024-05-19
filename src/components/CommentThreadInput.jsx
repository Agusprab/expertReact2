import { useState } from 'react';
import PropType from 'prop-types' 
function CommentThreadInput({addComment}) {
    const [comment,setComment] = useState('')
    
    function onSubmit(event){
        event.preventDefault();
        addComment(comment);
        setComment('');
    }
    return (
        <>
            <form action="" className="border border-start-0 border-end-0 border-top-0 mb-3" onSubmit={onSubmit} >
                <div className="mb-3">          
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"  placeholder="Leave a comment" onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
                </div>  
                <div className="d-flex justify-content-end mb-3">
                    <button type="submit" className="btn btn-dark fw-bold rounded-0 px-4"  >Balas</button>
                </div>
            </form>
        </>
    )
}

CommentThreadInput.propTypes = {
    addComment : PropType.func.isRequired,
 
 }

export default CommentThreadInput;