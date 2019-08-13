import React, { Component } from 'react';
import './Partners.css';
import Slider from './slider/Slider';

class Partners extends Component {
    render() {
        return (
            <div className="Partners">
                <div className="Partners-title">Наши партнеры</div>
                <Slider />
            </div>
        );
    }
}
  
export default Partners;
