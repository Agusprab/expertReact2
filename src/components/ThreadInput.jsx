import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({addThread}){
    const [title, setTitle] = useInput('');
    const [category, setCategory] = useInput('');
    const [body, setBody] = useInput('');    
    function handleSubmit() {
        addThread({ title, category, body });
        window.location.reload();
        
    }
    return(
   <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Threads</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="" >
      <div className="modal-body">
        <div className="mb-3">
            <label htmlFor="tittle" className="form-label">Tittle</label>
            <input type="text" value={title} onChange={setTitle} className="form-control" id="tittle" placeholder='Tittle'/>
        </div>
        <div className="mb-3">
            <label htmlFor="tittle" className="form-label">Category</label>
            <input type="text" value={category} onChange={setCategory} className="form-control" id="tittle" placeholder='Category'/>
        </div>
        <div className="mb-3">
            <label htmlFor="bodyText" className="form-label">Thread</label>
            <textarea className="form-control" onChange={setBody} value={body} id="bodyText" rows="3" placeholder="Thread"></textarea>
        </div>         
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-dark" onClick={handleSubmit} >Kirim</button>
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
