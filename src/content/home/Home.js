import React, { Component } from 'react';
import './Home.css';
import Background from './background/Background';
import Banner from './banner/Banner';
import Stub from './stub/Stub';
import Office from './office/Office';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Background />
                <Banner />
                <Stub />
                <Office />
            </div>
        );
    }
}
  
export default Home;
