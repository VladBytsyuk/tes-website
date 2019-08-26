import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './Content.css';
import Company from './company/Company';
import Contacts from './contacts/Contacts';
import Job from './job/Job';
import Home from './home/Home';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <Switch className="Content">
                    <Route exact path='/' component={Home}/>
                    <Route path='/company' component={Company}/>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/job' component={Job}/>
                </Switch>
            </div>
        );
    }
}
  
export default Content;
