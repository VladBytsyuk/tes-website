import React, { Component } from 'react';
import './Home.css';
import Background from './background/Background';
import Banner from './banner/Banner';
import Stub from './stub/Stub';
import Office from './office/Office';
import Partners from './partners/Partners';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Background />
                <Banner />
                <Stub />
                <Office />
                <Partners />
            </div>
        );
    }
}
  
export default Home;
