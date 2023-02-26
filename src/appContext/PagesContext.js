import { createContext } from "react";

export const PagesContext = createContext(
    [
        {
            pageName: 'О нас',
            href: 'about',
            active: false
        },
        {
            pageName: 'Продукция',
            href: 'production',
            active: false
        },
        {
            pageName: 'Услуги',
            href: 'service',
            active: false
        },
        {
            pageName: 'Контакты',
            href: 'contacts',
            active: false
        },
    ]
)
