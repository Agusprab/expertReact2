import PropTypes from 'prop-types';
import LeaderBoardList from './LeaderBoardList';
import { useState } from 'react';
 
function CategoryThreads({threads, leaderboards,onChangeCategory}) {

  const [click , setClick] = useState('');
  
  function CategotyClick(id,category){
    setClick(id);
    onChangeCategory(category);
    if(click === id){
        setClick('');
        onChangeCategory(null);
    }  
  }
  
  const backgrounButton = {
      before : "btn btn-outline-dark",
      after : "btn btn-dark"
  };
 
  
  return (
    <>
    <div className="d-flex flex-column">
      <div className="d-grid gap-2 ">
        <button className="btn btn-dark p-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-plus-lg"></i> Add New Threads</button>
      </div>
      <h5 className="pt-3 mb-3">Category Populer</h5>
      <div className="d-flex flex-wrap">
        {threads.length > 0 && threads.map((thread) => (
          <div className="p-1" key={thread.id}>
            <button type="button" className={(click === thread.id) ? backgrounButton.after : backgrounButton.before} onClick={() =>{CategotyClick(thread.id, thread.category)}}>{thread.category}</button>
          </div>
        ))}
      </div>

      <div className="d-grid gap-2 d-none d-lg-block" >
        <h5 className="pt-3 mb-3">Klasmen Pengguna Aktif</h5>
        <LeaderBoardList leaderboards={leaderboards} forMobile={false}/>
      </div>
    </div>
    </>
  );
}

CategoryThreads.propTypes = {
  threads: PropTypes.array.isRequired,
  leaderboards : PropTypes.array,
  onChangeCategory : PropTypes.func
};

export { CategoryThreads };