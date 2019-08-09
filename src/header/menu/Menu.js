import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './menu_item/MenuItem';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
          <MenuItem>Главная</MenuItem>
          <MenuItem>О компании</MenuItem>
          <MenuItem>Производители</MenuItem>
          <MenuItem>Контакты</MenuItem>
          <MenuItem>Вакансии</MenuItem>
      </div>
    );
  }
}

export default Menu;