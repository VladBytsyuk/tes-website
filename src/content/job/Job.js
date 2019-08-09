import React, { Component } from 'react';
import './Job.css';


class Job extends Component {
    render() {
        return (
            <div className="Job">
                <div className="Job-title">Менеджер по продажам</div>
                <div className="Job-subtitle-top"><b>Опыт:</b> от 1 года</div>
                <div className="Job-subtitle"><b>Образование:</b> высшее</div>
                <div className="Job-subtitle"><b>График:</b> полный рабочий день</div>
                <div className="Job-hbox">
                    <div className="Job-enumeration">
                        <div className="Job-enumeration-title">Требования</div>
                        <div className="Job-enumeration-content">
                            <ul>
                                <li>Менеджер по оптовым продажам (электротехнического оборудования‚ кабель‚ инструмент и наконечники‚ маркировка и т. д.)</li>
                                <li>Высшее образование</li>
                                <li>Знание электротехники</li>
                                <li>Коммуникабельность</li>
                                <li>Умение работать в команде</li>
                                <li>Способность принимать решения</li>
                                <li>Опыт работы в области продаж промышленного оборудования</li>
                                <li>Возраст от 25 лет</li>
                                <li>Высшее образование (техническое и/или экономическое),дополнительное образование в области продаж (тренинги, семинары)</li>
                                <li>Навыки делового общения</li>
                                <li>Навыки ведения переговоров с первыми лицами компаний</li>
                                <li>Грамотная речь</li>
                                <li>Коммуникабельность</li>
                                <li>Стресcоустойчивость</li>
                                <li>Хорошая обучаемость</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Job-enumeration">
                        <div className="Job-enumeration-title">Обязанности</div>
                        <div className="Job-enumeration-content">
                            <ul>
                                <li>Активные продажи электротехнического оборудования (Центральный регион): электротехнического оборудования, кабель‚ инструмент и наконечники‚ маркировка и т, д.</li>
                                <li>Техническое консультирование клиентов</li>
                                <li>Поиск новых клиентов/ развитие продаж существующих клиентов</li>
                                <li>Проведение презентаций</li>
                                <li>Развитие продаж по закрепленному региону</li>
                                <li>Проведение переговоров, заключение и ведение договоров</li>
                                <li>Разработка предложений по увеличению объема продаж</li>
                                <li>Развитие клиентской базы и дилерской сети по направлениям в промышленности</li>
                                <li>Анализ продаж, планирование и отчетность</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Job-enumeration-full">
                    <div className="Job-enumeration-title">Условия</div>
                    <div className="Job-enumeration-content">
                        <ul>
                            <li>Оформление в соответствие с Трудовым кодексом РФ</li>
                            <li>Медицинская страховка (ДМС) после года работы</li>
                            <li>Заработная плата на испытательный период — фиксированная сумма‚ далее фикс+% от продаж</li>
                        </ul>
                    </div>
                </div>
                <div className="Job-enumeration-full">
                    <div className="Job-enumeration-title">Контактная информация</div>
                    <div className="Job-enumeration-content">
                        <div>Контактное лицо: Быцюк Вячеслав Станиславович</div>
                        <div>Телефон: +7-(903)-406-00-69</div>
                        <div>E-mail: tes-rnd@mail.ru. info@tes-rnd.ru</div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Job;
