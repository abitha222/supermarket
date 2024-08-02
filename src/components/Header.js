import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../redux/userSlice';
import logo from '../assets/logo.jpg';
import cartIcon from '../assets/cart.jpeg';
import profileIcon from '../assets/profile.png';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
    const [activeIcon, setActiveIcon] = useState('');
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearUser());
    };

    // Styles
    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: '#343a40',
        color: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 1,
    };

    const topSectionStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        marginBottom: '20px',
    };

    const logoContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    };

    const logoStyle = {
        height: '60px',
    };

    const appNameStyle = {
        color: '#ffdd57',
        fontSize: '20px',
    };

    const searchBarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1',
        maxWidth: '600px',
    };

    const inputStyle = {
        padding: '10px',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        flex: '1',
    };

    const buttonStyle = {
        padding: '10px 15px',
        backgroundColor: '#ffdd57',
        color: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#000000',
    };

    const iconButtonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    };

    const iconButtonStyle = (icon) => ({
        background: 'none',
        border: activeIcon === icon ? '2px solid yellow' : 'none',
        cursor: 'pointer',
        height: '40px',
        width: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // To position dropdown correctly
    });

    const iconStyle = {
        height: '100%',
        width: '100%',
    };

    const navContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    };

    const navStyle = {
        listStyle: 'none',
        display: 'flex',
        gap: '100px',
        margin: '0',
        padding: '0',
    };

    const linkStyle = {
        textDecoration: 'none',
        padding: '20px',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '16px',
        transition: 'color 0.3s',
    };

    const linkHoverStyle = {
        color: '#ffdd57',
    };

    const dropdownStyle = {
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: '#343a40',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 2,
        minWidth: '150px',
    };

    const loginDropdownStyle = {
        position: 'absolute',
        top: '100%',
        right: '0',
        backgroundColor: '#343a40',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 2,
        minWidth: '150px',
        marginTop: '5px', // Small margin to separate the dropdown from the button
    };

    const dropdownItemStyle = {
        padding: '10px 20px',
        color: '#fff',
        textDecoration: 'none',
        display: 'block',
    };

    const dropdownItemHoverStyle = {
        backgroundColor: '#ffdd57',
    };

    return (
        <header style={headerStyle}>
            <div style={topSectionStyle}>
                <div style={logoContainerStyle}>
                    <Link to="/">
                        <img src={logo} alt="Supermarket Logo" style={logoStyle} />
                    </Link>
                    <div style={appNameStyle}>Supermarket</div>
                </div>
                <div style={searchBarStyle}>
                    <input type="text" placeholder="Search products..." style={inputStyle} />
                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                    >
                        Search
                    </button>
                </div>
                <div style={iconButtonContainerStyle}>
                    <Link
                        to="/cart"
                        style={iconButtonStyle('cart')}
                        onClick={() => setActiveIcon('cart')}
                    >
                        <img src={cartIcon} alt="Cart" style={iconStyle} />
                    </Link>
                    <div
                        style={iconButtonStyle('profile')}
                        onClick={() => {
                            setIsLoginDropdownOpen(!isLoginDropdownOpen);
                            setActiveIcon('profile');
                        }}
                    >
                        <img src={profileIcon} alt="Profile" style={iconStyle} />
                        {isLoginDropdownOpen && (
                            <div style={loginDropdownStyle}>
                                {user ? (
                                    <>
                                        <div style={dropdownItemStyle}>
                                            Logged in as {user.name || user.email}
                                        </div>
                                        <div
                                            style={dropdownItemStyle}
                                            onMouseOver={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
                                            onMouseOut={(e) => (e.target.style.backgroundColor = dropdownStyle.backgroundColor)}
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to="/login"
                                            style={dropdownItemStyle}
                                            onMouseOver={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
                                            onMouseOut={(e) => (e.target.style.backgroundColor = dropdownStyle.backgroundColor)}
                                        >
                                            User Login
                                        </Link>
                                        <Link
                                            to="/adminLogin"
                                            style={dropdownItemStyle}
                                            onMouseOver={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
                                            onMouseOut={(e) => (e.target.style.backgroundColor = dropdownStyle.backgroundColor)}
                                        >
                                            Admin Login
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <nav style={navContainerStyle}>
                <ul style={navStyle}>
                    <li
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        style={{ position: 'relative' }}
                    >
                        <Link
                            to="#"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                        >
                            Products
                        </Link>
                        {isDropdownOpen && (
                            <div style={dropdownStyle}>
                                <Link
                                    to="/vegetables"
                                    style={dropdownItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownStyle.backgroundColor)}
                                >
                                    Vegetables
                                </Link>
                                <Link
                                    to="/fruits"
                                    style={dropdownItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownStyle.backgroundColor)}
                                >
                                    Fruits
                                </Link>
                                <Link
                                    to="/grocery"
                                    style={dropdownItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownStyle.backgroundColor)}
                                >
                                    Grocery
                                </Link>
                                <Link
                                    to="/dairy"
                                    style={dropdownItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownStyle.backgroundColor)}
                                >
                                    Dairy Products
                                </Link>
                                <Link
                                    to="/footware"
                                    style={dropdownItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownStyle.backgroundColor)}
                                >
                                    Footware
                                </Link>
                                <Link
                                    to="/toys"
                                    style={dropdownItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownStyle.backgroundColor)}
                                >
                                    Toys
                                </Link>
                                <Link
                                    to="/chocolates"
                                    style={dropdownItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownStyle.backgroundColor)}
                                >
                                    Chocolates
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                        >
                            About Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
