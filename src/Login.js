import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
//useDispatch helps to update global state value
//useSelector helps to fetch global state
import { login,logout } from './features/user'
import{useSelector} from 'react-redux'

const Login = () => {
    const dispatch =useDispatch();
    const[name,setName]=useState('');
    const [age,setAge]=useState(0);
    const [email,setEmail]=useState('');
    const user = useSelector(state =>state.user.value)
    //reason we create states here, these are only going to use in login page , so redux is no important
  return (
    <div style={containerStyle}>
        {!user.name &&(
            <div>
               <input
                        style={commonInputStyle}
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        style={commonInputStyle}
                        type="number"
                        placeholder="Enter your age"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                    <input
                        style={commonInputStyle}
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
            </div>
        )}
        
        {!user.name?
        <button
        style={loginButtonStyle}
        onClick={()=>dispatch(login({name,age,email}))}>Login</button>
        
        :
        <button
        style={logoutButtonStyle}
        onClick={()=>dispatch(logout())}>Logout</button>}
        
    </div>
  )
}

const commonInputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px'
};

const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#fff'
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif'
};

const formContainerStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center'
};

const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007BFF'
};

const logoutButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#FF6347'
};

export default Login