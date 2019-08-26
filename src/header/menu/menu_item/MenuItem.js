import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

class MenuItem extends Component {

  render() {
    return (
      <div className="MenuItem" onClick={() => this.props.tabClickListener()}>
        <Link to={this.props.route} className="MenuItem-link">
          <div>
            <div className="MenuItem-name">{this.props.name}</div>
            <div className={this.props.isEnabled ? "MenuItem-line-enabled" : "MenuItem-line-disabled"} />
          </div>
        </Link>
      </div>
    );
  }
}

export default MenuItem;