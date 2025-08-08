import React from 'react'
import { Navbar, Footer } from '../components'

function Contactus() {
  return (
    <div>
      <Navbar>contactus</Navbar>
      <section class="contactUs">
        <div class="box">
            {/*     Form     */}
            <div class="contact sec-1">
                <h2>Get In Touch</h2>
                <h3>we are here for you! How can we help?</h3>
                <form action="https://formsubmit.co/tejasshirsath_inft@atharvacoe.ac.in" method="POST">
                    <div class="sec-1Box">
                        <div class="inputBox">
                            <input placeholder="Name" type="text" name="Name" required="required"/>
                        </div>
                
                        <div class="inputBox">
                            <input placeholder="Email" type="email" name="Email"/>
                        </div>

                        <div class="inputBox">
                            <textarea placeholder="Write your message here..." type="text" name="Message"></textarea>
                        </div>
                        <div class="inputBox">
                            <input type="submit" value="Submit"/>
                        </div>
                    </div>
                </form>
            </div>
            
            {/*     Contact Image      */}
            <div class="contact sec-2">
                <img src="https://res.cloudinary.com/dqofnqmsi/image/upload/v1754646378/contactImage_nlxanq.svg" alt=""/>
            </div>

            {/*     Contact Details      */}
            <div class="contact sec-3">
                <div class="sec-3Box">
                    <div>
                        <span>
                            <ion-icon name="location-sharp"></ion-icon>
                        </span>
                        <a href="https://maps.app.goo.gl/A3P3iw8MmZGqiqRh7">Atharva College Of Engineering, Mumbai - 400095</a>
                    </div>
                    <div>
                        <span>
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <a href="mailto:tejasshirsath_inft@atharvacoe.ac.in">contact@abc.com</a>
                    </div>
                    <div>
                        <span>
                            <ion-icon name="call"></ion-icon>
                        </span>
                        <a href="tel:+91987xxxx210">+91 987-xxxx-210</a>
                    </div>
                    {/*  Social Media Links  */}
                    <ul class="soci">
                        <li>
                            <a href="#">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/tejas-shirsath-18149b2bb">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/tejas_s_shirsath/">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/+91987xxxx210">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Contactus

