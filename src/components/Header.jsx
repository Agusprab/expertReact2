import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import { Link } from 'react-router-dom';
function Header({authUser}){
 
  const dispatch = useDispatch();
  function logout(){
    dispatch(asyncUnsetAuthUser());
  }
return(
  
 <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
 
    <Link className="navbar-brand" to="/">Forum Dicoding</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {authUser && 
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
       <li className="nav-item d-block d-lg-none">
          <Link className="nav-link" to="/leaderboard">LeaderBoard</Link>
        </li>
          {/*<li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <div className="d-flex">
      <ul className="navbar-nav">       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <img src={authUser.avatar } className="rounded-circle" height="25" width="25" alt="Avatar"/>
           &nbsp;
           {authUser.name}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
          </ul>
        </li>
      </ul>
      </div>
    </div>
    }
  </div>
</nav>
 </>
)
}

Header.propTypes = {
  authUser: PropTypes.object,

};

export default Header;