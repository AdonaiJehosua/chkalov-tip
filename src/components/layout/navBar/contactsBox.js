import { Box, Grid, IconButton, Tooltip } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { useState } from "react"
import { contactsBoxStyles } from "@/styles/navBarStyles"
import Link from "next/link"

const contacts = {
    phone: '+79673695787',
    visiblePhone: '+7 (967) 369-57-87',
    email: 'zakaz@chkalov-tip.ru',
    adress: 'Первоуральск, Чкалова 18В',
    workHours: 'Пн-Пт, 09:00-17:00',
    toString: function () {
        return `Чкалов.Типография\nТелефон: ${this.visiblePhone}\nПочта: ${this.email}\nАдрес: ${this.adress}\nВремя работы: ${this.workHours}`
    }
}

function PhoneIcons() {
    return (
        <Box sx={contactsBoxStyles.icons}>
            <PhoneIcon sx={{ fontSize: '16px' }} />
            <TelegramIcon sx={{ fontSize: '16px' }} />
            <WhatsAppIcon sx={{ fontSize: '16px' }} />
        </Box>
    )
}

function ContactsElem({ content, tooltipTitle, icons }) {

    const [copied, setCopied] = useState(false)

    const copyHandler = () => {
        navigator.clipboard.writeText(content)
        setCopied(true)
        setTimeout(setCopied, 2000, false)
    }

    

    return (
        <Box sx={contactsBoxStyles.contacts}>
            {icons && icons}
            {content}
            <Tooltip title={tooltipTitle} placement={'right'}>
                <IconButton sx={contactsBoxStyles.copyButton} onClick={copyHandler}><ContentCopyIcon color={`${copied && 'success'}`} sx={{ fontSize: '13px' }} /></IconButton>
            </Tooltip>
        </Box>
    )
}

export function ContactsBox({handleMenuSelectedItem}) {

    const [copiedAll, setCopiedAll] = useState(false)


    const copyAllHandler = () => {
        navigator.clipboard.writeText(contacts.toString())
        setCopiedAll(true)
        setTimeout(setCopiedAll, 2000, false)
    }

    return (
        <Box sx={contactsBoxStyles.wrapper}>
            <Box sx={contactsBoxStyles.gridElem}>
                <ContactsElem icons={<PhoneIcons />} content={contacts.phone} tooltipTitle={'Скопировать телефон'} />
                <ContactsElem icons={<EmailIcon sx={{ ...{ fontSize: '16px' }, ...contactsBoxStyles.icons }} />} content={contacts.email} tooltipTitle={'Скопировать почту'} />
            </Box>
            <Box sx={contactsBoxStyles.commonButtons}>
                <Tooltip title={'Скопировать все контакты'} placement={'left'}>
                    <IconButton onClick={copyAllHandler} sx={{ padding: '4px' }}>
                        <ContentCopyIcon sx={{ fontSize: '18px' }} color={`${copiedAll && 'success'}`} />
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Написать нам'} placement={'left'}>
                    <Link href='/contacts' >
                        <IconButton
                        onClick={() => handleMenuSelectedItem('Контакты')}
                            sx={{ padding: '4px' }}
                        >
                            <EmailIcon sx={{ fontSize: '18px' }} />
                        </IconButton>
                    </Link>
                </Tooltip>
            </Box>
        </Box>
    )
}