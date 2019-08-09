import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {

  render() {
    return (
      <div className="MenuItem" onClick={() => this.props.tabClickListener()}>
        <div className="MenuItem-name">{this.props.name}</div>
        <div className={this.props.isEnabled ? "MenuItem-line-enabled" : "MenuItem-line-disabled"} />
      </div>
    );
  }
}

export default MenuItem;