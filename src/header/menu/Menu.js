import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './menu_item/MenuItem';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 1 };
      }

    render() {
        const activeTab = this.state.activeTab;
        const tabs = [
            {name: "Главная", number: 1, route: "/"}, 
            {name: "О компании", number: 2, route: "/company"}, 
            {name: "Производители", number: 3, route: "/"}, 
            {name: "Контакты", number: 4, route: "/contacts"}, 
            {name: "Вакансии", number: 5, route: "/job"}
        ];
        return (
            <div className="Menu">
                {tabs.map(tab => 
                    <MenuItem 
                        name={tab.name} 
                        route={tab.route}
                        isEnabled={activeTab === tab.number} 
                        tabClickListener={ () => this.setState({ activeTab : tab.number }) } 
                        />
                )}
            </div>
        );
    }
}

export default Menu;
