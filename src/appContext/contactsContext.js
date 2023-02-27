import { createContext } from "react";


export const ContactsContext = createContext({
    companyName: 'Чкалов.Типография',
    phone: '+79676395787',
    visiblePhone: '+7 (967) 369-57-87',
    email: 'zakaz@chkalov-tip.ru',
    adress: 'Свердловская обл., г. Первоуральск, Чкалова 18В',
    workHours: 'Пн-Пт, 09:00-17:00',
    toString: function () {
        return `${this.companyName}\nТелефон: ${this.visiblePhone}\nПочта: ${this.email}\nАдрес: ${this.adress}\nВремя работы: ${this.workHours}`
    }
})