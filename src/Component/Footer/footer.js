import React from 'react';
import './style.css';

function Footer() {
    return (
      <div className="footer">
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-4">
                            <p>All right reserved, 2020</p>
                        </div>
                        <div className="col-sm-5">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h4> <a href="">Contact Us</a></h4>
                                </div>
                                <div className="col-sm-4">
                                    <h4> <a href="">FAQ</a></h4>
                                </div>
                                <div className="col-sm-4">
                                    <h4> <a href="">Support</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default Footer;