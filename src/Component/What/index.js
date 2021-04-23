import React, {Component} from 'react';
import axios from 'axios';
import './style.css';


class What extends Component {

    state = {
        what : []
    }
    componentDidMount (){
        axios.get('data.json').then( res => { this.setState({what: res.data.what}) } )
    }

    render(){


        const {what} = this.state;

        const whatList = what.map ( (whatItem) => {

            return(
                <div className="carousel-item" key={whatItem.id} >
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box">
                                <div className="disF">
                                    <i className={whatItem.icons}></i>
                                    <i className={whatItem.icons}></i>
                                    <i className={whatItem.icons}></i>
                                    <i className={whatItem.icons}></i>
                                    <i className={whatItem.icons}></i>
                                </div>
                                <h5>{whatItem.title}</h5>
                                <p>
                                {whatItem.body}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 responsive">
                            <div className="box">
                                <div className="disF">
                                    <i className={whatItem.icons}></i>
                                    <i className={whatItem.icons}></i>
                                    <i className={whatItem.icons}></i>
                                    <i className={whatItem.icons}></i>
                                    <i className={whatItem.icons}></i>
                                </div>
                                <h5>{whatItem.title}</h5>
                                <p>
                                {whatItem.body}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (

        <div className="what">
            <div className="container">
                <div className="content">
                    <div className="whatHeader">
                        <h2>What people say</h2>
                        <hr />
                        <p>
                            Quisque porta erat in neque interdum laoreet. Integer sed tellus euismod, ornare felis nec, consectetur elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales metus id ornare lobortis. Vivamus mattis ligula at dolor suscipit, a cursus dolor blandit.
                        </p>
                    </div>
                    <div className="whatContent">
                    <div className="row">
                            
                            <div id="demo" className="carousel slide" data-ride="carousel">

                              <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" className="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                              </ul>

                              <div className="carousel-inner">
                                <div className="carousel-item active"  >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="box">
                                                <div className="disF">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h5>Love is Everything</h5>
                                                <p>
                                                Etiam vel consectetur mauris. Suspendisse et lectus nec diam pulvinar varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus egestas ligula turpis, at sagittis nisl ultrices eu.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 responsive">
                                            <div className="box">
                                                <div className="disF">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h5>Love is Everything</h5>
                                                <p>
                                                Etiam vel consectetur mauris. Suspendisse et lectus nec diam pulvinar varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus egestas ligula turpis, at sagittis nisl ultrices eu.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {whatList}
                              </div>

                            </div>
                            <div className="box-arrow">
                              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                <i className="fas fa-arrow-left prev carousel-control-prev-icon" ></i>
                              </a>
                              <a className="carousel-control-next" href="#demo" data-slide="next">
                                <i className="fas fa-arrow-right next carousel-control-next-icon" ></i>
                              </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
          );
    }
  
}

export default What;
