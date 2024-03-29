import React, { Component } from 'react';
import './Company.css';


class Company extends Component {
    render() {
        return (
            <div className="Company">
                <div className="Company-text"><b>ООО «ТехЭлектроСервис»</b> это официальный партнёр ведущих производителей электротехнических изделий.</div>
                <div className="Company-text-bottom">Мы рады предложить Вам широкий ассортимент инновационной продукции способной удовлетворить самого взыскательного покупателя:</div>
                <div className="Company-enumeration">
                    <ul>
                        <li>Клеммы</li>
                        <li>Промышленные разъемы</li>
                        <li>Разъемы для печатных плат</li>
                        <li>Защита от перенапряжений</li>
                        <li>Элементы автоматизации производства</li>
                        <li>Токораспределительные устройства</li>
                        <li>Шкафы и корпуса для всех видов оборудования</li>
                        <li>Приборы управления и сигнализации</li>
                        <li>Коммутационное оборудование</li>
                        <li>Распределительное электрооборудование</li>
                        <li>Кабели и провода</li>
                        <li>Комплексные решения для промышленных и производственных предприятий</li>
                        <li>Электроустановочную технику</li>
                    </ul>
                </div>
                <div className="Company-text">Инженерами компании <b>ООО «ТехЭлектроСервис»</b> производится постоянный мониторинг рынка, что позволяет нам предложить наиболее оптимальный вариант оборудования для заказчика.</div>
                <div className="Company-text-small"><b>Мы всегда предлагаем нашим клиентам оптимальное соотношение цена/качество, при этом сохраняя минимальные сроки поставок.</b></div>
                <div className="Company-text-bottom"><b>Будем рады видеть Вас среди наших заказчиков!</b></div>
        
            </div>
        );
    }
}
  
export default Company;
