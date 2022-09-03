import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <>
    <nav>
      <div className="container">
        <Link to="/" className="navbar">Burhan</Link>
          <div class="nav-navbar">
              <ul>
                <li>
                  <Link to="/about" className="current-page">About</Link>
                </li>
                <li>
                  <Link to="/gallery" className="current-page">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact" className="current-page">Contact</Link>
                </li>
              </ul>
          </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;