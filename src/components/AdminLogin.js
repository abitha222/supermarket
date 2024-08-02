import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';


const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook for navigation

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        marginTop: '150px', // Adjusted to move the component upwards
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

    const handleAdminLogin = () => {
        if (email === 'ammu' && password === '123456') {
            navigate('/admin'); // Redirect to the admin page
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={textStyle}>Admin Login</div>
                <div style={underlineStyle}></div>
            </div>
            <div style={inputsStyle}>
                <div style={inputStyle}>
                    <img src={email_icon} alt='' style={inputImgStyle} />
                    <input
                        type="text"
                        placeholder='Username'
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
            </div>
            <div style={submitContainerStyle}>
                <div
                    style={submitStyle}
                    onClick={handleAdminLogin}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
