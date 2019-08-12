import React, { Component } from 'react';
import './Background.css';
import bkg from './../../../img/bkg.jpg';


class Background extends Component {
    render() {
        return (
            <div className="Background">
                <img src={bkg}  className="Background-bkg" alt="bkg" />
            </div>
        );
    }
}
  
export default Background;
