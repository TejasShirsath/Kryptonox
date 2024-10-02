import React from 'react';
import { Navbar } from '../components'  // Optional: Use a separate CSS file for styling
import '../pages/about.css';
import { useState } from 'react';


const AboutUs = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Feedback submitted:', feedback);
    setFeedback(''); // Reset the form after submission
  };

  return (
    <div>
        <Navbar>aboutus</Navbar>
    <div className="about-us-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        At Kryptonox, our goal is to make sending cryptocurrencies as fast, easy, 
        and affordable as possible. Our platform is designed to be user-friendly 
        and intuitive, allowing you to send cryptocurrencies to anyone, anywhere 
        in the world with just a few clicks. Our team is dedicated to providing 
        you with a seamless and hassle-free experience, and we are always looking 
        for ways to improve. If you have any feedback or suggestions, please feel 
        free to share them with us using the form below.
      </p>
      <h3 className="feedback-title">
        Have feedback or questions? We'd love to hear from you!
      </h3>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <textarea
          className="feedback-input"
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Enter your feedback here"
          required
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AboutUs;


