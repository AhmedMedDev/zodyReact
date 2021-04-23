import React, {Component} from 'react';
import axios from 'axios';
import './style.css';


class Lorem extends Component {

    state = {
        lorem : []
    }
    componentDidMount (){
        axios.get('data.json').then( res => { this.setState({lorem: res.data.lorem}) } )
    }

    render(){

        const {lorem} = this.state;

        const loremList = lorem.map ( (loremItem) => {

            return(
                <div className="disF" key={loremItem.id}>
                    <i className="fas fa-check"></i>
                    <p>{loremItem.body}</p>
                </div>
            )
        })

        return (

            <div className="lorem">
            <div className="container">
                <div className="content">
                    <div className="loremHeader">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <hr />
                        <p>
                            Quisque porta erat in neque interdum laoreet. Integer sed tellus euismod, ornare felis nec, consectetur elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales metus id ornare lobortis. Vivamus mattis ligula at dolor suscipit, a cursus dolor blandit.
                        </p>
                    </div>
                    <div className="loremContent">
                        <div className="row">
                            <div className="col-lg-7">
                                <img src="img/lorem.svg" alt="" className="respon-img" />
                            </div>
                            <div className="col-lg-5 disF-a">
                                <div className="box">
                                    <h4>Perfect solution for your love life</h4>
                                    <p>
                                        Quisque porta erat in neque interdum laoreet. Integer sed tellus euismod, ornare felis nec, consectetur elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales metus id ornare lobortis. Vivamus mattis ligula at dolor suscipit, a cursus dolor blandit.
                                    </p>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className="loremContent2">
                        <div className="row">
                            <div className="col-lg-5 disF-a">
                                <div className="box">
                                    <h4>Thousand of feature awaiting for you</h4>
                                    {loremList}
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <img src="img/lorem2.svg" alt="" className="respon-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          );
    }
  
}

export default Lorem;