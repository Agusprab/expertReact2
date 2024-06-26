import PropTypes from 'prop-types';
import { useState } from 'react';

function ThreadInput({addThread}){
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [body, setBody] = useState('');    
    function handleSubmit(e) {
        e.preventDefault();
        addThread({ title, category, body });
        setTitle('');
        setCategory('');
        setBody('');
        
    }
    return(
   <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Threads</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="" onSubmit={handleSubmit}>
      <div className="modal-body">
        <div className="mb-3">
            <label htmlFor="tittle" className="form-label">Tittle</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="tittle" placeholder='Tittle'/>
        </div>
        <div className="mb-3">
            <label htmlFor="tittle" className="form-label">Category</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" id="tittle" placeholder='Category'/>
        </div>
        <div className="mb-3">
            <label htmlFor="bodyText" className="form-label">Thread</label>
            <textarea className="form-control" onChange={(e) => setBody(e.target.value)}value={body} id="bodyText" rows="3" placeholder="Thread"></textarea>
        </div>         
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-dark">Kirim</button>
      </div>
      </form>
    </div>
  </div>
</div>
    )
}

ThreadInput.propTypes = {
    addThread : PropTypes.func.isRequired
 };

 export default ThreadInput;
