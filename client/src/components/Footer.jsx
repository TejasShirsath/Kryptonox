import React, { useState } from "react";
import { FaInstagram, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook, FaClipboard } from "react-icons/fa";
import logo from "../../images/logo.png";

const Footer = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackMessage = encodeURIComponent(feedback);
    
    // Check if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    let mailUrl;
    
    if (isMobile) {
      // Open the mail link directly in the mailbox app
      mailUrl = `mailto:kryptonoxfeedback@gmail.com?subject=Feedback&body=${feedbackMessage}`;
    } else {
      // Open the mail link in the mail website
      mailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kryptonoxfeedback@gmail.com&subject=Feedback&body=${feedbackMessage}`;
    }
    
    window.open(mailUrl, '_blank');
  };
  
  const handleCopy = () => {
    const hashLabel = document.getElementById('hash-label');
    navigator.clipboard.writeText('0x414D081cDDbBc420A2069D2A4da10E61285D93Ff');
    window.alert('Hash has been copied!');
  }
  

  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex flex-col justify-center items-center my-4">
      <div class="flex flex-col sm:flex-row justify-center items-start sm:items-center w-full sm:w-3/4 mx-auto">
  <div class="blog-section">
    <footer id="blogs"></footer>
    <a href="#home" class="text-3xl text-black block text-center hover:text-blue-500">Latest Blogs</a>
    <div class="sm:w-[90%] w-full h-[1px] bg-gray-400 mt-5 transition-all duration-500" />
    <br></br>
    <div class="blog-post transition-all duration-500">
      <h2 class="text- font-bold text-black text-center">The Future of Cryptocurrency: Trends to Watch in 2023</h2>
      
      <br></br>
      <img src="https://th.bing.com/th/id/OIP.XLyDg8gByG29L5gFBaPt8wHaEK?pid=ImgDet&rs=1" alt="Blog Post 1 Image" class="mx-auto transition-all duration-500 hover:scale-110"/>
      <br></br>
      <p>"Trends to Watch in 2023" is an article that discusses the potential trends and advancements in the cryptocurrency industry that are likely to occur in the year 2023. The article delves into the current state of the cryptocurrency market, including the rise of decentralized finance (DeFi) and non-fungible tokens (NFTs), and how these trends may continue to evolve in the coming years.

The article also explores the potential impact of new technologies such as blockchain 3.0, which promises to offer faster transaction speeds and increased scalability, as well as the emergence of central bank digital currencies (CBDCs), which could potentially revolutionize the way we interact with traditional banking systems.

Overall, the article provides valuable insights into the future of cryptocurrency and the potential opportunities and challenges that may arise in the years ahead. It serves as a helpful resource for those interested in staying up-to-date with the latest developments in the cryptocurrency industry.</p>
      <div class="sm:w-[90%] w-full h-[1px] bg-gray-400 mt-5 transition-all duration-500" />
      <br></br>
    </div>
    <div class="blog-post transition-all duration-500">
      <h2 class="text- font-bold text-black text-center">Crypto and the Environment: Separating Fact from Fiction</h2>
      <br></br>
      <img src="https://billionairesdime.com/wp-content/uploads/2023/03/as-19-300x175.jpg" alt="Blog Post 1 Image" class="mx-auto transition-all duration-500 hover:scale-110"/>
      <br></br>
      <p>Crypto and the environment is a topic that has sparked debate in recent years, with concerns being raised about the energy consumption associated with cryptocurrency mining. While it is true that cryptocurrencies such as Bitcoin require a significant amount of energy to operate, it is important to consider the broader context. For example, many cryptocurrencies use renewable energy sources such as hydropower, and the development of more efficient mining technology is constantly reducing energy requirements. Furthermore, some argue that the decentralized nature of cryptocurrencies can actually promote sustainability and reduce the carbon footprint of financial transactions by eliminating the need for intermediaries. While the environmental impact of cryptocurrencies is still a topic of debate, it is clear that there are many factors to consider beyond just energy consumption.</p>
    </div>
    <div class="sm:w-[90%] w-full h-[1px] bg-gray-400 mt-5 transition-all duration-500" />
    <br></br>
    <div class="blog-post transition-all duration-500">
      <h2 class="text- font-bold text-black text-center">The Importance of Decentralization in the Cryptocurrency Ecosystem</h2>
      <br></br>
      <img src="https://i2.wp.com/bayardpartnership.com/wp-content/uploads/2017/10/Fotolia_111770690_Virtual-teams.jpg?fit=439%2C273&ssl=1" alt="Blog Post 1 Image" class="mx-auto transition-all duration-500 hover:scale-110"/>
      <br></br>
      <p>The concept of decentralization is at the heart of the cryptocurrency ecosystem. By removing the need for a central authority, cryptocurrencies operate on a peer-to-peer network that allows for more secure, transparent, and innovative transactions. Decentralization allows anyone to participate in the network, and all transactions are recorded on a public ledger that can be verified by anyone. This transparency ensures that all transactions are legitimate and can be traced back to their source, providing users with a high level of trust in the system.

Decentralization also promotes innovation and competition. In a centralized system, the central authority controls the rules and regulations of the system, which can limit innovation and competition. In a decentralized system, anyone can participate and contribute to the development of the network, creating a level playing field for innovation and competition. </p>
    </div>

    <div className="sm:w-[90%] w-full h-[1px] bg-gray-400 mt-5" />
<br></br>
<div className="newsletter-section">
  <h3 className="text-3xl text-black text-center hover:text-blue-500">Join Our Newsletter</h3>
  <p className="text-black text-center">Stay up to date on the latest news and trends in the cryptocurrency industry by subscribing to our newsletter.</p>
  <br></br>
  <a href="mailto:contactkryptonox@gmail.com?subject=Subscribe to Kryptonox to join NewsLetter" class="flex justify-center">
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Subscribe</button>
</a>

</div>
<div className="sm:w-[90%] w-full h-[2px] bg-gray-400 mt-5"></div>
<br></br>
<div className="donation-section">
          <h3 className="text-3xl text-black text-center hover:text-blue-500">
            Donate Now
          </h3>
          <p className="text-black text-center">
Support our mission and help us grow by making a donation. Every little bit counts!
</p>
<div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
  <button
    className="cursor-pointer text-3xl text-blue-500 hover:text-blue-700"
    onClick={handleCopy}
    title="Click to copy Hash"
  >
    <FaClipboard />
    <span id="hash-label"></span>
  </button>
</div>

</div>

  </div>
</div>
<div className="flex flex-col justify-center items-center w-full">
  <div className="sm:w-[90%] w-full h-[2px] bg-gray-400 mt-5"></div>
  <footer id="about-us"></footer>
  <br />
  <a href="#home" className="text-xl font-bold text-black hover:text-blue-500">Contact Us</a>
  <br />
  <p className="text-black text-sm text-center">
    Feel free to reach out to us with any questions or concerns!
  </p>
</div>
</div>
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <a href="#home">

          <img src={logo} alt="logo" className="w-64 cursor-pointer" />
          </a>
        </div>

        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5  w-full">
          <span title="Follow us on Instagram">
            <a href="https://www.instagram.com/kryptonox.tech/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-3xl cursor-pointer mx- hover:text-gray-400 transition-colors" />
            </a>
          </span>
          <span title="Follow us on Twitter">
            <a href="https://twitter.com/kryptonox_tech/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-500 text-3xl cursor-pointer mx-2 hover:text-gray-400 transition-colors" />
            </a>
          </span>
          <span title="Mail Us">
          <a href="mailto:contactkryptonox@gmail.com?subject=Hello Krytonox">
              <FaEnvelope className="text-white text-3xl cursor-pointer mx-2 hover:text-gray-400 transition-colors" />
            </a>
            </span>

          <span title="Connect with us on LinkedIn">
            <a href="https://www.linkedin.com/in/kryptonox-tech-4b46b5270/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500 text-3xl cursor-pointer mx-2 hover:text-gray-400 transition-colors" />
            </a>
          </span>
          <span title="Follow us on Facebook">
            <a href="https://www.facebook.com/profile.php?id=100091355902704" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-500 text-3xl cursor-pointer mx-2 hover:text-gray-400 transition-colors" />
            </a>
          </span>
                      
        </div>
      </div>

      <div className="sm:w-[90%] w-full h-[2px] bg-gray-400 mt-5"></div>

      <div className="w-full flex flex-col justify-center items-center my-4">
        <div className="w-full sm:w-3/4">
                  
        <a href="#home" class="text-xl font-bold text-black block text-center hover:text-blue-500">About Us</a>
          <br></br>
          <p className="text-black text-sm text-center">
            At Kryptonox, our goal is to make sending cryptocurrencies as fast, easy, and affordable as possible. Our platform is designed to be user-friendly and intuitive, allowing you to send cryptocurrencies to anyone, anywhere in the world with just a few clicks. Our team is dedicated to providing you with a seamless and hassle-free experience, and we are always looking for ways to improve. If you have any feedback or suggestions, please feel free to share them with us using the form below.
          </p>
          </div>

        <form className="w-full sm:w-3/4 mt-4" onSubmit={handleSubmit}>
        <div style={{ textAlign: "center" }}>
  <label htmlFor="feedback" className="text-black font-medium">
    Have feedback or questions? We'd love to hear from you!
  </label>
</div>
<textarea id="feedback" className="w-full h-24 p-2 border border-gray-400 rounded-md mt-2" value={feedback} onChange={handleFeedbackChange} required></textarea>
<div className="flex justify-end">
  <button type="submit" className="bg-blue-500 text-black font-medium rounded-md px-4 py-2 mt-2 hover:bg-blue-600 transition-colors">Submit</button>
</div>
</form>
{feedbackList.length > 0 && (
      <div className="w-full sm:w-3/4 mt-4">
        <h3 className="text-lg font-bold text-black text-center">Feedback Received</h3>
        {feedbackList.map((feedback, index) => (
          <p key={index} className="text-black text-sm mt-2">{feedback}</p>
        ))}
      </div>
    )}



  </div>

  <div className="flex justify-center items-center flex-col mt-5">
            <p className="text-black text-sm text-center">Come join us and hear for the unexpected miracle</p>
            <p className="text-black text-sm text-center font-medium mt-2">@kryptonox.tech</p>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-black text-arial font-bold text-left text-xs">© 2023 Kryptonox</p>
            <p className="text-black text-arial font-bold text-right text-xs">All rights reserved</p>
            </div>
            </div>
);
};

export default Footer;
