import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './menu_item/MenuItem';

class Menu extends Component {
    render() {
        const enabledTab = this.props.tabNumber;
        const tabs = [
            {name: "Главная", number: 1}, 
            {name: "О компании", number: 2}, 
            {name: "Производители", number: 3}, 
            {name: "Контакты", number: 4}, 
            {name: "Вакансии", number: 5}
        ];
        return (
            <div className="Menu">
                {tabs.map(tab => 
                    <MenuItem 
                        name={tab.name} 
                        isEnabled={enabledTab === tab.number} 
                        tabClickListener={ () => this.props.tabClickListener(tab.number) } 
                        />
                )}
            </div>
        );
    }
}

export default Menu;
