
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import Layout from './Layout';

const cartContainerStyle = {
    padding: '20px',
};

const cartItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
};

const cartItemImageStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    marginRight: '10px',
};

const cartItemDetailsStyle = {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
};

const cartItemNameStyle = {
    marginRight: '10px',
    fontWeight: 'bold',
};

const cartItemPriceStyle = {
    color: '#007bff',
};

const cartItemQuantityStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
};

const quantityButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#433a40',
    color: '#ffdd47',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    margin: '0 5px',
};

const removeButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#433a40',
    color: '#ffdd47',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const proceedButtonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#433a40',
    color: '#ffdd57',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const Cart = () => {
    const { cart, removeFromCart, updateCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleQuantityChange = (item, change) => {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0) {
            updateCart(item.id, newQuantity);
        }
    };

    const handleProceedToPay = () => {
        navigate('/payment');
    };

    return (
        <Layout>
            <div style={cartContainerStyle}>
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} style={cartItemStyle}>
                            <div style={cartItemDetailsStyle}>
                                <img src={item.imgSrc} alt={item.name} style={cartItemImageStyle} />
                                <div>
                                    <div style={cartItemNameStyle}>{item.name}</div>
                                    <div style={cartItemPriceStyle}>{item.price}</div>
                                    <div style={cartItemQuantityStyle}>
                                        <button
                                            style={quantityButtonStyle}
                                            onClick={() => handleQuantityChange(item, -1)}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            style={quantityButtonStyle}
                                            onClick={() => handleQuantityChange(item, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                style={removeButtonStyle}
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
                {cart.length > 0 && (
                    <button style={proceedButtonStyle} onClick={handleProceedToPay}>
                        Proceed to Pay
                    </button>
                )}
            </div>
        </Layout>
    );
};

export default Cart;
