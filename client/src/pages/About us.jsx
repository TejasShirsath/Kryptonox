import React from 'react';
import { Navbar, Footer } from '../components'


const AboutUs = () => {
  return (
    <div>
      <Navbar>aboutus</Navbar>
      <section className="about-main">
        <div className="about-heading">
            <h1>About Us</h1>
            <p>Welcome to Kryptonox!</p>
        </div>
        <div className="about-container">
            <div className="about">
                <div className="about-image">
                    <img src="https://res.cloudinary.com/dqofnqmsi/image/upload/v1754646378/developer_osddwl.jpg" alt=""/>
                </div>
                <div className="about-content">
                  <h2>Hi there 👋</h2>
                  <p>Welcome to Kryptonox, your trusted platform for fast and secure cryptocurrency transfers worldwide.
                    Founded by Tejas Shirsath, Ayush Raut, Dhwani Patel, Bhumika Nair, a passionate IT Engineering Students, Kryptonox is built to simplify
                    digital currency transactions with an emphasis on speed, security, and ease of use.</p><br />
                  <p>Unlike traditional financial platforms, Kryptonox provides seamless crypto transfers, allowing users to send and receive
                    cryptocurrency globally with just a few clicks. Whether you're transferring Ethereum, our platform
                    ensures quick, reliable, and low-cost transactions.</p>
                  <a href="contactus" className="contact-button">Contact Us</a>
                </div>

            </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;


