import React, { Component } from 'react';
import './Content.css';
import Company from './company/Company';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <Company />
            </div>
        );
    }
}
  
export default Content;
