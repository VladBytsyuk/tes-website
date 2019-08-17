import React, { Component } from 'react';
import './Slider.css';
import SliderItem from './slider_item/SliderItem';
import provento from './../../../../img/provento.png';
import phoenix from './../../../../img/phoenix-contact.png';
import rittal from './../../../../img/rittal_logo.png';
import left from './../../../../img/arrow-left.png';
import right from './../../../../img/arrow-right.png';

class Slider extends Component {
    render() {
        return (
            <div className="Slider">
                <div className="Slider-hbox">
                    <img src={left} className="Slider-arrow" alt="arrow_left" />
                    <SliderItem image={provento} title="Провенто"/>
                    <SliderItem image={phoenix} title="PHOENIX CONTACT"/>
                    <SliderItem image={rittal} title="RITTAL"/>
                    <img src={right} className="Slider-arrow" alt="arrow_right" />
                </div>
                <div className="Slider-dots-box">
                    <span className="Slider-dot" />
                    <span className="Slider-dot" />
                    <span className="Slider-dot" />
                </div>
            </div>
        );
    }
}
  
export default Slider;
