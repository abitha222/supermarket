// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import your store
import Home from './Home';
import Vegetable from './components/Vegetable';
import Fruits from './components/Fruits';
import Grocery from './components/Grocery';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart';
import LoginSignup from './components/LoginSignup';
import { CartProvider } from './components/CartContext';
import Chocolates from './components/Chocolates';
import DairyProducts from './components/DairyProducts';
import Payment from './components/Payment';
import AdminLogin from './components/AdminLogin';
import Toys from './components/Toys';
import Footware from './components/Footware';

const RouterComponent = () => {
    return (
        <Provider store={store}> {/* Provide Redux store */}
            <CartProvider>
                <Router>
  
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/vegetables" element={<Vegetable />} />
                        <Route path="fruits" element={<Fruits />} />
                        <Route path="grocery" element={<Grocery />} />
                        <Route path="toys" element={<Toys />} />
                        <Route path="footware" element={<Footware />} />
                        <Route path="chocolates" element={<Chocolates />} />
                        <Route path="dairy" element={<DairyProducts />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="about" element={<About />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="payment" element={<Payment />} />
                        <Route path="login" element={<LoginSignup />} />
                        <Route path="adminLogin" element={<AdminLogin />} />
                    </Routes>
                </Router>
            </CartProvider>
        </Provider>
    );
};

export default RouterComponent;
