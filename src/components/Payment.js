// Payment.js
import React from 'react';
import Layout from './Layout';

const paymentContainerStyle = {
    padding: '20px',
};

const paymentFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    margin: 'auto',
};

const inputStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
};

const submitButtonStyle = {
    padding: '10px',
    backgroundColor: '#ffdd57',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const Payment = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle payment submission logic here
        alert('Payment submitted successfully!');
    };

    return (
        <Layout>
            <div style={paymentContainerStyle}>
                <h2>Payment</h2>
                <form style={paymentFormStyle} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Card Number" style={inputStyle} required />
                    <input type="text" placeholder="Card Holder Name" style={inputStyle} required />
                    <input type="text" placeholder="Expiration Date (MM/YY)" style={inputStyle} required />
                    <input type="text" placeholder="CVV" style={inputStyle} required />
                    <button type="submit" style={submitButtonStyle}>Submit Payment</button>
                </form>
            </div>
        </Layout>
    );
};

export default Payment;
