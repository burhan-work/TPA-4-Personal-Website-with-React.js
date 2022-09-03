import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './home.css'

function Home() {
  return (
    <>
      <Navbar />

      <div className="description">
        <h4>Hi there ...</h4>
        <h1>I AM <span>BURHANUDDIN</span></h1>
        <h3>I am a beginner Front-End Developer</h3>
      </div>
         
      <Footer />
    </>
  )
}

export default Home;