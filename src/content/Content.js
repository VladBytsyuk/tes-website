import React, { Component } from 'react';
import './Content.css';
// import Company from './company/Company';
import Job from './job/Job';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <Job />
            </div>
        );
    }
}
  
export default Content;
