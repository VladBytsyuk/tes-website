import React, { Component } from 'react';
import './Slider.css';
import SliderItem from './slider_item/SliderItem';
import provento from './../../../../img/provento.png';
import phoenix from './../../../../img/phoenix-contact.png';
import rittal from './../../../../img/rittal_logo.png';

import legrand from './../../../../img/legrand.png';
import brady from './../../../../img/brady.png';
import klauke from './../../../../img/klauke.png';

import general from './../../../../img/general-cable.png';
import greenlee from './../../../../img/greenlee.png';
import weicon from './../../../../img/weicon.png';

import left from './../../../../img/arrow-left.png';
import right from './../../../../img/arrow-right.png';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { activePage: 1 };
      }

    renderPage(pageNumber) {
        if (pageNumber === 1) {
            return (
                <div className="Slider-hbox">
                    <SliderItem image={provento} title="Провенто"/>
                    <SliderItem image={phoenix} title="PHOENIX CONTACT"/>
                    <SliderItem image={rittal} title="RITTAL"/>
                </div>
            );
        } else if (pageNumber === 2) {
            return (
                <div className="Slider-hbox">
                    <SliderItem image={legrand} title="LEGRAND"/>
                    <SliderItem image={brady} title="Brady"/>
                    <SliderItem image={klauke} title="KLAUKE"/>
                </div>
            );
        } else if (pageNumber === 3) {
            return (
                <div className="Slider-hbox">
                    <SliderItem image={general} title="GENERAL CABLE"/>
                    <SliderItem image={greenlee} title="GREENLEE"/>
                    <SliderItem image={weicon} title="Weicon"/>  
                </div>
            );
        }
    }

    dotClass(pageNumber) {
        if (pageNumber === this.state.activePage) return "Slider-dot-active"
        else return "Slider-dot-unactive"
    }

    onLeftClick() {
        const currentActivePage = this.state.activePage
        const newActivePage = currentActivePage === 1 ? 3 : currentActivePage - 1
        this.setState({ activePage : newActivePage })
    }

    onRightClick() {
        const currentActivePage = this.state.activePage
        const newActivePage = currentActivePage === 3 ? 1 : currentActivePage + 1
        this.setState({ activePage : newActivePage })
    }

    render() {
        const activePage = this.state.activePage
        return (
            <div className="Slider">
                <div className="Slider-hbox">
                    <img src={left} className="Slider-arrow" alt="arrow_left" onClick={() => this.onLeftClick()} />
                    {this.renderPage(activePage)}
                    <img src={right} className="Slider-arrow" alt="arrow_right" onClick={() => this.onRightClick()}  />
                </div>
                <div className="Slider-dots-box">
                    <span className={this.dotClass(1)} />
                    <span className={this.dotClass(2)} />
                    <span className={this.dotClass(3)} />
                </div>
            </div>
        );
    }
}
  
export default Slider;
