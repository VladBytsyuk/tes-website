import React, { Component } from 'react';
import './Contacts.css';


class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                <div className="Contacts-info-cards">
                    <div className="Contacts-hbox">
                        <div className="Contacts-card">
                            <div className="Contacts-card-title">Почтовый адрес</div>
                            <div className="Contacts-card-text">
                                <div className="Contacts-card-text-line">344000</div>
                                <div className="Contacts-card-text-line">г. Ростов-на-Дону</div>
                                <div className="Contacts-card-text-line">пр. Соколова 63</div>
                                <div className="Contacts-card-text-line">Главпочтамт</div>
                                <div className="Contacts-card-text-line">абонентский ящик 8001</div>
                            </div>
                        </div>
                        <div className="Contacts-card">
                            <div className="Contacts-card-title">Наш адрес</div>
                            <div className="Contacts-card-text">
                                <div className="Contacts-card-text-line">Российская Федерация</div>
                                <div className="Contacts-card-text-line">344092</div>
                                <div className="Contacts-card-text-line">город Ростов-на-Дону</div>
                                <div className="Contacts-card-text-line">проспект Космонавтов 2/2</div>
                                <div className="Contacts-card-text-line">Бизнес Центр ТАКТ, офис №307</div>
                            </div>
                        </div>
                    </div>
                    <div className="Contacts-hbox">
                        <div className="Contacts-card">
                            <div className="Contacts-card-title">Контакты</div>
                            <div className="Contacts-hbox">
                                <div className="Contacts-card-hbox-text-line">E-mail:</div>
                                <div className="Contacts-card-hbox-text-line">
                                    <div>tes-rnd@mail.ru</div>
                                    <div>info@tes-rnd.ru</div>
                                </div>
                            </div>
                            <div className="Contacts-hbox">
                                <div className="Contacts-card-hbox-text-line">Телефон:</div>
                                <div className="Contacts-card-hbox-text-line">+7-(863)-<b>256-00-69</b></div>
                            </div>
                            <div className="Contacts-hbox">
                                <div className="Contacts-card-hbox-text-line">Телефон/Факс:</div>
                                <div className="Contacts-card-hbox-text-line">+7-(863)-<b>231-10-51</b></div>
                            </div>
                            <div className="Contacts-hbox">
                                <div className="Contacts-card-hbox-text-line">Cотовый:</div>
                                <div className="Contacts-card-hbox-text-line">+7-(903)-<b>406-00-69</b></div>
                            </div>
                        </div>
                        <div className="Contacts-card">
                            <div className="Contacts-card-title">Как добраться?</div>
                            <div className="Contacts-card-map"></div>
                        </div>
                    </div>
                </div>
                <div className="Contacts-map"></div>
            </div>
        );
    }
}
  
export default Contacts;
