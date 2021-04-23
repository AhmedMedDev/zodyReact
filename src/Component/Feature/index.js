import React, {Component} from 'react';
import axios from 'axios';
import './style.css';


class Feature extends Component {

    state = {
        feature : []
    }
    componentDidMount (){
        axios.get('data.json').then( res => { this.setState({feature: res.data.feature}) } )
    }

    render(){

        const {feature} = this.state;

        const featureList = feature.map ( (featureItem) => {

            return(
                <div className="col-lg-3 col-md-6" key={featureItem.id}>
                    <div className="box">
                        <i className={featureItem.icon}></i>
                        <h4>{featureItem.title}</h4>
                        <p>{featureItem.body}</p>
                    </div>
                </div>
            )
        })

        return (
            
        <div className="feature">
            <div className="container">
                <div className="content">
                    <div className="row">
                        {featureList}
                    </div>
                </div>
            </div>
        </div>
          );
    }
  
}

export default Feature;