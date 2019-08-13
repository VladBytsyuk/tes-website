import React, { Component } from 'react';
import './SliderItem.css';


class SliderItem extends Component {
    render() {
        return (
            <div className="SliderItem">{this.props.title}</div>
        );
    }
}
  
export default SliderItem;
