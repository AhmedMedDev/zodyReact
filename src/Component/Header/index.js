import React from 'react';
import './style.css';



function Header() {
  return (
    <div className="header">
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-6 disF-a">
                            <div className="box">
                                <h1>
                                No more lonely days <br /> with <span>ZODY</span> app
                                </h1>
                                <button>
                                    <i className="fab fa-apple"></i>
                                    <span>Download App</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="img/mobile_body.svg" alt="" className="respon-img imgHeader" />
                            <img src="img/mountain.svg" alt="" className="bgimgHeader respon-img " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  );
}

export default Header;