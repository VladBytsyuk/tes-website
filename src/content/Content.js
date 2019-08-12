import React, { Component } from 'react';
import './Content.css';
import Company from './company/Company';
import Contacts from './contacts/Contacts';
import Job from './job/Job';
import Home from './home/Home';

class Content extends Component {
    renderContent() {
        const tab = this.props.tabNumber
        if (tab === 1) {
            return (<Home />)
        } else if (tab === 2) {
            return (<Company/>)
        } else if (tab === 4) {
            return (<Contacts/>)
        } else if (tab === 5) {
            return (<Job/>)
        } else {
            return (<div/>)
        }
    }

    render() {
        return (
            <div className="Content">
                {this.renderContent()}
            </div>
        );
    }
}
  
export default Content;
