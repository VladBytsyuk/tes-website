import React, { Component } from 'react';
import './Slider.css';
import SliderItem from './slider_item/SliderItem';
import provento from './../../../../img/provento.png';
import phoenix from './../../../../img/phoenix-contact.png';
import rittal from './../../../../img/rittal_logo.png';

class Slider extends Component {
    render() {
        return (
            <div className="Slider">
                <SliderItem image={provento} title="Провенто"/>
                <SliderItem image={phoenix} title="PHOENIX CONTACT"/>
                <SliderItem image={rittal} title="RITTAL"/>
            </div>
        );
    }
}
  
export default Slider;
