import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import "./contact.css";

function Contact() {
  return (
    <>
      <Navbar />
            
      <form>
        <div className="form">
          <input type="text" placeholder="Name" className="box" />
          
          <input type="email" placeholder="Email" className="box" />
          <input type="number" placeholder="Number" className="box" />
          <textarea name="" placeholder="message" id="" cols="30" rows="10"></textarea>
          <input type="submit" className="btn" value="send message"></input>
        </div>
        {/* <div className="form">
          {alert("Thanks for your message")}
        </div> */}
      </form>

      <Footer />
    </>
  );
}

export default Contact;
