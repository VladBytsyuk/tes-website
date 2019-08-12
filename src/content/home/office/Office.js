import React, { Component } from 'react';
import './Office.css';


class Office extends Component {
    render() {
        return (
            <div className="Office">
                <div className="Office-title">Приглашаем к нам в офис</div>
                <div className="Office-hbox">
                    <div className="Office-left">
                        <div className="Office-text-top">Российская Федерация</div>
                        <div className="Office-text-bottom"><b>г. Ростов-на-Дону</b></div>
                        <div className="Office-text-top"><b>пр. Космонавтов 2/2</b></div>
                        <div className="Office-text-bottom">Бизнес центр ТАКТ</div>
                        <div className="Office-text-top">офис №307</div>
                        <div className="Office-text-bottom">+7-(863)-<b>231-10-51</b></div>    
                    </div>
                    <div className="Office-map" />
                </div>        
            </div>
        );
    }
}
  
export default Office;
