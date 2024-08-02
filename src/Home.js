// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Layout from './components/Layout'; // Import the Layout component
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import off5 from './assets/off5.png';
import capagg from './assets/capagg.jpg';
import apple from './assets/apple.jpg';
import orange from './assets/orange.jpg';
import turmeric from './assets/turmeric.jpg';
import pepper from './assets/pepper.jpg';
import horsegram from './assets/horsegram.jpg';
import greenpeas from './assets/greenpeas.jpg';
import rice from './assets/rice.jpg';

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
  };

  const headingStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const sectionStyle = {
    width: '80%',
    textAlign: 'center',
    margin: '40px 0',
  };

  const featuredProductsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  };

  const productStyle = {
    width: '200px',
    margin: '10px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition for hover effect
  };

  const productHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Enhanced shadow on hover
  };

  const whyChooseUsStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const handleProductClick = (index) => {
    if (index === 0) { // Assuming apple is the first image
      navigate('/fruits'); // Navigate to Vegetables page
    }
    if (index === 1) { // Assuming apple is the first image
      navigate('/fruits'); // Navigate to Vegetables page
    }
    if (index === 2) { // Assuming apple is the first image
      navigate('/grocery'); // Navigate to Vegetables page
    }
    if (index === 3) { // Assuming apple is the first image
      navigate('/grocery'); // Navigate to Vegetables page
    }
    if (index === 4) { // Assuming apple is the first image
      navigate('/grocery'); // Navigate to Vegetables page
    }
    if (index === 5) { // Assuming apple is the first image
      navigate('/grocery'); // Navigate to Vegetables page
    }
  };

  return (
    <div className="content">
      <Layout>
        <div style={containerStyle}>
          <h1 style={headingStyle}>Welcome to Our Supermarket!</h1>
          <p style={headingStyle}>
            Explore a variety of fresh products and unbeatable offers.
          </p>
          <Carousel 
            showArrows={true} 
            infiniteLoop={true} 
            showThumbs={false} 
            autoPlay={true} 
            interval={1000}
            dynamicHeight={true}
          >
            {[off5, capagg, apple, orange, turmeric, pepper, horsegram, greenpeas, rice].map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Fresh Produce ${index + 1}`} style={{ width: '90%', height: '600px', objectFit: 'cover' }} />
                <p className="legend">{`Product ${index + 1}`}</p>
              </div>
            ))}
          </Carousel>
          <div style={sectionStyle}>
            <h2>Featured Products</h2>
            <div style={featuredProductsStyle}>
              {[apple, orange, turmeric, pepper, horsegram, greenpeas].map((image, index) => (
                <div 
                  key={index} 
                  style={{ 
                    ...productStyle, 
                    ...(hoveredIndex === index ? productHoverStyle : {}) 
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleProductClick(index)} // Add onClick handler
                >
                  <img src={image} alt={`Product ${index + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
                  <h3>Product {index + 1}</h3>
                  <p>Fresh and delicious {index + 1} to add to your shopping list.</p>
                </div>
              ))}
            </div>
          </div>
          <div style={sectionStyle}>
            <h2>Why Choose Us</h2>
            <div style={whyChooseUsStyle}>
              <h3>Quality Products</h3>
              <p>We offer the freshest and highest quality products available.</p>
              <h3>Best Prices</h3>
              <p>Our prices are unbeatable, offering you great value for your money.</p>
              <h3>Customer Satisfaction</h3>
              <p>We prioritize customer satisfaction and are here to assist you with any needs.</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
