import React, { Component } from 'react';
import './Content.css';
import Company from './company/Company';
import Contacts from './contacts/Contacts';
import Job from './job/Job';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <Contacts />
            </div>
        );
    }
}
  
export default Content;
