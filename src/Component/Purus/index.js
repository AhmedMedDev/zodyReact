import React, {Component} from 'react';
import axios from 'axios';
import './style.css';


class Purus extends Component {


    render(){

        return (
        <div className="purus">
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Praesent purus ipsum</h2>
                        </div>
                        <div className="col-md-6 disF-j">
                        <div className="box">
                            <button>
                                <i className="fab fa-apple"></i>
                                <span>Download App</span>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          );
    }
  
}

export default Purus;