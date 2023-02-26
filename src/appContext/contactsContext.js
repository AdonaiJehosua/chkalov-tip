import { createContext } from "react";


export const contactsContext = createContext({
    companyName: '',
    adress: '',
    phone: '',
    email: '',
    workTime: ''
})