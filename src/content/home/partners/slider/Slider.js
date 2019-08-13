import React, { Component } from 'react';
import './Slider.css';
import SliderItem from './slider_item/SliderItem';

class Slider extends Component {
    render() {
        return (
            <div className="Slider">
                <SliderItem title="Провенто"/>
                <SliderItem title="PHOENIX CONTACT"/>
                <SliderItem title="RITTAL"/>
            </div>
        );
    }
}
  
export default Slider;
