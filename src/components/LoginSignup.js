import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import user_icon from '../assets/person.png';
import Layout from './Layout';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (email === 'ammu@gmail.com' && password === '123456') {
            dispatch(setUser({ email }));
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    const handleSignup = () => {
        if (name && email && password) {
            dispatch(setUser({ name, email }));
            navigate('/');
        } else {
            alert('Please fill all fields');
        }
    };

    const handleSubmit = () => {
        if (action === "Login") {
            handleLogin();
        } else {
            handleSignup();
        }
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={textStyle}>{action}</div>
                <div style={underlineStyle}></div>
            </div>
            <div style={inputsStyle}>
                {action === "Login" ? <div></div> : (
                    <div style={inputStyle}>
                        <img src={user_icon} alt='' style={inputImgStyle} />
                        <input
                            type="text"
                            placeholder='Name'
                            style={inputFieldStyle}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )}
                <div style={inputStyle}>
                    <img src={email_icon} alt='' style={inputImgStyle} />
                    <input
                        type="email"
                        placeholder='Email Id'
                        style={inputFieldStyle}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div style={inputStyle}>
                    <img src={password_icon} alt='' style={inputImgStyle} />
                    <input
                        type="password"
                        placeholder='Password'
                        style={inputFieldStyle}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {action === "Sign Up" ? <div></div> : (
                    <div style={forgotPasswordStyle}>
                        forgot Password?<span style={forgotPasswordSpanStyle}>Click Here!</span>
                    </div>
                )}
            </div>
            <div style={submitContainerStyle}>
                <div
                    style={action === "Login" ? { ...submitStyle, ...grayStyle } : submitStyle}
                    onClick={() => {
                        setAction("Sign Up");
                        handleSignup();
                    }}
                >
                    Sign Up
                </div>
                <div
                    style={action === "Sign Up" ? { ...submitStyle, ...grayStyle } : submitStyle}
                    onClick={handleSubmit}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '150px',
    width: '600px',
    background: '#fff',
    paddingBottom: '30px',
};

const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '9px',
    width: '100%',
    marginTop: '30px',
};

const textStyle = {
    color: '#433a40',
    fontSize: '48px',
    fontWeight: '700',
};

const underlineStyle = {
    width: '61px',
    height: '6px',
    background: '#433a40',
    borderRadius: '9px',
};

const inputsStyle = {
    marginTop: '55px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
};

const inputStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    width: '480px',
    height: '80px',
    background: '#eaeaea',
    borderRadius: '6px',
};

const inputImgStyle = {
    margin: '0px 30px',
};

const inputFieldStyle = {
    height: '50px',
    width: '400px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#797979',
    fontSize: '19px',
};

const forgotPasswordStyle = {
    paddingLeft: '62px',
    marginTop: '27px',
    color: '#797979',
    fontSize: '18px',
};

const forgotPasswordSpanStyle = {
    color: '#4c00b4',
    cursor: 'pointer',
};

const submitContainerStyle = {
    display: 'flex',
    gap: '30px',
    margin: '60px auto',
};

const submitStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '220px',
    height: '59px',
    color: 'gray',
    background: 'yellow',
    borderRadius: '50px',
    fontSize: '19px',
    fontWeight: '700',
    cursor: 'pointer',
};

const grayStyle = {
    background: '#EAEAEA',
    color: '#676767',
};

export default LoginSignup;
