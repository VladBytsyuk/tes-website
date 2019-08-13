import React, { Component } from 'react';
import './SliderItem.css';


class SliderItem extends Component {
    render() {
        return (
            <div className="SliderItem">
                <img src={this.props.image} className="SliderItem-image" alt="logo" />
                <div className="SliderItem-title">{this.props.title}</div>
            </div>
        );
    }
}
  
export default SliderItem;
