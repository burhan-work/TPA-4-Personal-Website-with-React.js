import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import "./about.css";

function About() {
  return (
    <>
      <Navbar />

      <div className="row justify-content-center mt-5">
        <p className="paragraph">
        My name is Burhanuddin and I am a beginner Front-End Developer
        </p>               
      </div>

      <div className="box-container">
        <div className="box">
          <p> Gender : <span>Male</span> </p>
          <p> Place of birth : <span>Mapin Kebak, West Alas</span> </p>
          <p> Date of birth : <span>12th March 1997</span> </p>
        </div>

        <div className="box">
        <p> Address : <span>Sumbawa, West Nusa Tenggara</span> </p>
        <p> Country : <span>Indonesia</span> </p>
        <p> Language : <span>Indonesia, English</span> </p>
        </div>
      </div>
  
      <div class="contact">
        <div class="icon">
          <i class="fas fa-envelope"></i>
            <h3>My Email</h3>
            <p>burhan.bnw@gmail.com</p>
        </div>

        <div class="icon">
          <i class="fas fa-phone"></i>
              <h3>My Number</h3>
              <p>+62 8786-3502-137</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
