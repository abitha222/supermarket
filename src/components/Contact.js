import React from 'react';
import Layout from './Layout'; // Import the Layout component

const contactContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
};

const formStyle = {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const formGroupStyle = {
    marginBottom: '15px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const textareaStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    height: '100px',
};

const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#433a40',
    color: '#ffdd57',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
};

const Contact = () => {
    return (
        <Layout>
            <div style={contactContainerStyle}>
                <h2>Contact Us</h2>
                <form style={formStyle}>
                    <div style={formGroupStyle}>
                        <label htmlFor="name" style={labelStyle}>Name</label>
                        <input type="text" id="name" name="name" style={inputStyle} required />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="email" style={labelStyle}>Email</label>
                        <input type="email" id="email" name="email" style={inputStyle} required />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="message" style={labelStyle}>Message</label>
                        <textarea id="message" name="message" style={textareaStyle} required></textarea>
                    </div>
                    <button type="submit" style={buttonStyle}>Submit</button>
                </form>
            </div>
        </Layout>
    );
};

export default Contact;
