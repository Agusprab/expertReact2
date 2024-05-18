import RegisterInput from "../components/RegisterInput";
import Header from "../components/Header"
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
function RegisterPage(){
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    function onRegister({ name, email, password }){
        dispatch(asyncRegisterUser({ name,email, password }));
        navigate('/');
    }
    return(
        <>
        <Header/>
        <div className="container">
            <div className="row justify-content-center pt-5">
                <div className="col-md-5">
                    <RegisterInput register={onRegister}/>
                    <p>
                    Already have an account?
          {' '}
          <Link to="/">Login</Link>
        </p>  
                </div>    
            </div> 
        </div>
        </>
    )
}

export default RegisterPage;