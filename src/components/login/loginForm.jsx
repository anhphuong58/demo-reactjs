import React, { useEffect, useState } from 'react'
import './loginForm.scss'
import LoginService from '../../services/LoginServices';
import { useNavigate } from 'react-router-dom';
import { authSuccess, authFailure } from '../../actions';
import { useDispatch } from "react-redux";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userInfo  ,setUserInfo] = useState(null);


    //Call request login API in Login Service 
    useEffect(()=>{
        function fetchLogin() 
        {
            LoginService.login(userInfo).then((res) => 
            {
                if(res.data.result === 'success')
                    {
                        dispatch(authSuccess(res.data.data));
                        navigate('/homepage');
                    }
                    else 
                    {
                        dispatch(authFailure('invalid'));
                    }
            }).catch(error => {
            dispatch(authFailure(error));
            });
        }
        if(userInfo !== null ) fetchLogin();
    },[dispatch,navigate,userInfo]);

    //check validate of email 
    const validateEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
    
    //Check valid email and passowrd
    function validate(email, password){
        if (!validateEmail(email)) 
        {
            alert('Invalid Email');
            return false;
        }      
        if (password.length < 8) 
        {
            alert('Password must be at least 8 chars long');
            return false;
        }
        return true;
    }

    // catch login button click event generate data sent to login API
    function loginRequest() {
        
        let email = document.getElementById('email').value; 
        let password = document.getElementById('pass').value;
        if (validate(email,password))
        {
            var info = {
                email: email,
                password: password
            }
            setUserInfo(info);
        }
    }

    // catch enter button click in password event is same login button click 
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          loginRequest()
        }
      }

    return(
        <div className='form'>
            <form>
                <label className='title'>WELCOME</label>
                <div className='input-container'>
                    <input type='email' id='email' placeholder='Email' required />
                </div>
                <div className='input-container'>
                    <input type='password' id='pass' onKeyDown={handleKeyDown} placeholder='Password' required />
                </div>
                <div className='button-container'>
                    <input className='login-button' onClick={loginRequest} type='button' value={'Login'}></input>.
                </div>
                <div className='extension-login'>
                    <button className='login-facebook'>Facebook</button>
                    <button className='login-gmail'>Google</button>
                </div>
            </form>
        </div>
    );
}
export default LoginForm;

