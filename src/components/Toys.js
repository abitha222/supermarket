import React, { useContext, useState } from 'react';
import Layout from './Layout';
import { CartContext } from './CartContext';
import popit from '../assets/popit.jpg';
import teddybear from '../assets/teddybear.jpg';
import woodtoy from '../assets/woodtoy.jpg';
import unikorn from '../assets/unikorn.jpg';
import penguin from '../assets/penguin.jpg';
import elephant from '../assets/elephant.jpg';
import panda from '../assets/panda.jpg';
import tomandjerry from '../assets/tomandjerry.jpg';
import mini from '../assets/mini.jpg';
import keychain from '../assets/keychain.jpg';
import micky from '../assets/micky.jpg';
import dolphin from '../assets/dolphin.jpg';
import pikachu from '../assets/pikachu.jpg';
import cat from '../assets/cat.jpg';
import sad from '../assets/sad.jpg';

const vegetableContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
    overflowY: 'auto', // Make it scrollable
    maxHeight: 'calc(100vh - 150px)', // Adjust this value based on the height of your header and footer
};

const vegetableCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
    textAlign: 'center',
};

const vegetableImageStyle = {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
};

const vegetableInfoStyle = {
    padding: '15px',
};

const vegetableNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
};

const vegetablePriceStyle = {
    fontSize: '16px',
    color: '#007bff',
};

const addToCartButtonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#433a40',
    color: '#ffdd57',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const quantityControlsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
};

const quantityButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#433a40',
    color: '#ffdd57',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const quantityTextStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
};

const Vegetable = () => {
    const { addToCart, updateCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    const handleAddToCart = (vegetable) => {
        const updatedQuantities = { ...quantities, [vegetable.id]: (quantities[vegetable.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        addToCart(vegetable);
        updateCart(vegetable.id, updatedQuantities[vegetable.id]);
    };

    const handleIncrease = (vegetable) => {
        const updatedQuantities = { ...quantities, [vegetable.id]: (quantities[vegetable.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        updateCart(vegetable.id, updatedQuantities[vegetable.id]);
    };

    const handleDecrease = (vegetable) => {
        if (quantities[vegetable.id] > 1) {
            const updatedQuantities = { ...quantities, [vegetable.id]: quantities[vegetable.id] - 1 };
            setQuantities(updatedQuantities);
            updateCart(vegetable.id, updatedQuantities[vegetable.id]);
        } else {
            const updatedQuantities = { ...quantities };
            delete updatedQuantities[vegetable.id];
            setQuantities(updatedQuantities);
            updateCart(vegetable.id, 0);
        }
    };

    const vegetables = [
        { id: 1, name: 'Popit', price: '₹40', imgSrc: popit },
        { id: 2, name: 'Teddybear', price: '₹560', imgSrc: teddybear },
        { id: 3, name: 'Woodtoy', price: '₹150', imgSrc: woodtoy },
        { id: 4, name: 'Unicorn', price: '₹600', imgSrc: unikorn },
        { id: 5, name: 'Penguin', price: '₹700', imgSrc: penguin },
        { id: 6, name: 'Elephant', price: '₹545', imgSrc: elephant},
        { id: 7, name: 'panda', price: '₹800', imgSrc: panda },
        { id: 8, name: 'Tom & jerry', price: '₹1200', imgSrc: tomandjerry },
        { id: 9, name: 'Miniature', price: '₹50', imgSrc: mini },
        { id: 10, name: 'KeyChain', price: '₹20', imgSrc: keychain },
        { id: 11, name: 'MickyMouse', price: '₹460', imgSrc: micky },
        { id: 12, name: 'Dolphin', price: '₹890', imgSrc: dolphin },
        { id: 13, name: 'Pikachu', price: '₹800', imgSrc: pikachu },
        { id: 14, name: 'Deer', price: '₹100', imgSrc: cat },
        { id: 15, name: 'SoftToy', price: '₹730', imgSrc: sad},
    ];

    return (
        <Layout>
            <div style={vegetableContainerStyle}>
                {vegetables.map((vegetable) => (
                    <div key={vegetable.id} style={vegetableCardStyle}>
                        <img src={vegetable.imgSrc} alt={vegetable.name} style={vegetableImageStyle} />
                        <div style={vegetableInfoStyle}>
                            <div style={vegetableNameStyle}>{vegetable.name}</div>
                            <div style={vegetablePriceStyle}>{vegetable.price}</div>
                            {quantities[vegetable.id] ? (
                                <div style={quantityControlsStyle}>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleDecrease(vegetable)}
                                    >
                                        -
                                    </button>
                                    <span style={quantityTextStyle}>{quantities[vegetable.id]}</span>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleIncrease(vegetable)}
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    style={addToCartButtonStyle}
                                    onClick={() => handleAddToCart(vegetable)}
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Vegetable;
