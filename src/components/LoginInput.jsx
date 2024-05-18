// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput'; 
 

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    return(
    <>
    <form>
        <h3 className="text-center mb-5">Login Page</h3>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="text" value={email} onChange={onEmailChange} className="form-control" aria-describedby="emailHelp" placeholder="Email" id="email" name="email"/>
            <div id="emailHelp" className="form-text">Enter your email correctly.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" value={password} onChange={onPasswordChange} className="form-control" id="password" placeholder="Password" name="password"/>
        </div>
        <div className="d-grid gap-2">
            <button className="btn btn-dark" type="button" onClick={() => login({ email, password })}>Login</button>  
        </div>
    </form>
    </>
    )
}
LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
  };

export default LoginInput;