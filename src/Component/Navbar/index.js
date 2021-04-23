import React from 'react';
import './style.css';

function Nav() {
  return (
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <img src="img/logo.svg" alt="" />
                    <h5>ZODY</h5>
                </div>
                <div className="icon-nav hidden">
                    <div className="inFerst"></div>
                    <div className="inSecond"></div>
                    <div className="inThird"></div>
                </div>
                <div className="nav-links">
                    <div className="container">
                        <ul>
                            <li><a href="/">
                                <button>
                                    <i className="fab fa-apple"></i>
                                    <span>Download App</span>
                                </button>
                            </a></li>
                            <li><a href="/contactUs"><span>Contact Us</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    
  );
}

export default Nav;