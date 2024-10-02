import React from 'react';
import { Navbar, Footer } from '../components'


const AboutUs = () => {
  return (
    <div>
      <Navbar>aboutus</Navbar>
      <section className="about-main">
        <div className="about-heading">
            <h1>About Us</h1>
            <p>Welcome to Affiliate Store!</p>
        </div>
        <div className="about-container">
            <div className="about">
                <div className="about-image">
                    <img src="images/developer.jpg" alt=""/>
                </div>
                <div className="about-content">
                    <h2>Hi there 👋</h2>
                    <p>Welcome to Affiliate Store, your ultimate destination for discovering unique products.
                       Founded by Tejas Shirsath, a passionate Computer Engineering diploma graduate currently pursuing studies in
                       IT engineering, Affiliate Store aims to revolutionize the way you shop online by curating a collection of
                       distinctive products sourced from various trusted sites.</p>
                    <p>Unlike traditional e-commerce websites, Affiliate Store does not sell products directly. Instead, we act as a
                       gateway to a world of unique finds by providing affiliate links to products from trusted retailers and brands.
                       Whether you're looking for stylish gadgets, trendy fashion accessories, innovative tech gadgets, or home decor
                       essentials, our carefully curated selection has something for everyone.</p>
                    <a href="contact.html" className="contact-button">Contact Us</a>
                </div>
            </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;


