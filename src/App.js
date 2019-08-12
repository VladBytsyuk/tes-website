import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { enabledTab: 1 };
  }

  render() {
    return (
      <div className="App">
        <Header 
            tabNumber={this.state.enabledTab} 
            tabClickListener={ (tabNumber) => this.setState({ enabledTab: tabNumber }) }
            />
        <Content 
            tabNumber={this.state.enabledTab}
            />
        <Footer />
      </div>
    );
  }
}

export default App;
