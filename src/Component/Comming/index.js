import React from 'react';
import './style.css';


function Comming() {
    return (
        <div className="comming">
        <div className="container">
            <div className="content">
                <div className="logo">
                    <img src="img/logo.svg" alt="" />
                    <h5>ZODY</h5>
                </div>
                <h1>Zody is Almost Ready</h1>
                <div className="commingContent">
                    <h6>Notify me when it’s ready</h6>
                    <p>Please let us know your email</p>
                    <div className="disF">
                        <input type="email" id="email" placeholder="Email" className="email " />
                        <div className="">
                            <button>I want to be first!</button>
                        </div>
                    </div>
                </div>
                <div className="countDown">
                   <p>Time left until launching</p>
                    <div id="clock">
                    </div>
                </div>
            </div>
        </div>
        <div className="overlay"></div>
    </div>
      
      
    );
  }
  
  export default Comming;

 