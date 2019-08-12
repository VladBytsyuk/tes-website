import React, { Component } from 'react';
import './Header.css';
import logo from './../img/tes.jpg';
import Menu from './menu/Menu';

class Header extends Component {
  render() {
    return (
      <div className="Header-background">
        <div className="Header-content">
          <img src={logo} className="Header-logo" alt="logo" />
          <div className="Header-titles">
            <div className="Header-title">ТехЭлектроСервис</div>
            <div className="Header-subtitle">Мы всегда предлагаем нашим клиентам оптимальное соотношение цена/качество, при этом сохраняя минимальные сроки поставок</div>
          </div>
        </div>
        <Menu
            tabNumber={this.props.tabNumber} 
            tabClickListener={ (tabNumber) => this.props.tabClickListener(tabNumber) }
            />
      </div>
    );
  }
}

export default Header;