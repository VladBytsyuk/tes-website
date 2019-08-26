import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './menu_item/MenuItem';

class Menu extends Component {
    constructor(props) {
        super(props);
        window.onpopstate = () => { this.forceUpdate() }
    }

    render() {
        const tabs = [
            {name: "Главная", route: "/"}, 
            {name: "О компании", route: "/company"}, 
            {name: "Производители", route: "/partners"}, 
            {name: "Контакты", route: "/contacts"}, 
            {name: "Вакансии", route: "/job"}
        ];
        return (
            <div className="Menu">
                {tabs.map(tab => 
                    <MenuItem 
                        name={tab.name} 
                        route={tab.route}
                        isEnabled={window.location.href.endsWith(tab.route)}
                        tabClickListener={ () => this.forceUpdate() }
                        />
                )}
            </div>
        );
    }
}

export default Menu;
