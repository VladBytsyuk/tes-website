import React, { Component } from 'react';
import './Banner.css';
import banner from './../../../img/banner.jpg';


class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <img src={banner}  className="Banner-image" alt="banner" />
            </div>
        );
    }
}
  
export default Banner;
