import { Box, Button, Grid, IconButton, Tooltip } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import PhoneIcon from '@mui/icons-material/Phone'
import { useState } from "react"
import EmailIcon from '@mui/icons-material/Email'

const contacts = {
    phone: '+7 (967) 369-57-87',
    email: 'zakaz@chkalov-tip.ru',
    adress: 'Первоуральск, Чкалова 18В',
    workHours: 'Пн-Пт, 09:00-17:00',
    toString: function() {
        return `Чкалов.Типография\nТелефон: ${this.phone}\nПочта: ${this.email}\nАдрес: ${this.adress}\nВремя работы: ${this.workHours}`
    }
}

const style = {
    wrapper: {
        fontSize: '13px',

    },
    contacts: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    copyButton: {
    },
    gridElem: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    icons: {
        marginRight: '5px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    }
}

function PhoneIcons() {
    return (
        <Box sx={style.icons}>
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
        <Box sx={style.contacts}>
            {icons && icons}
            {content}
            <Tooltip title={tooltipTitle} placement={'right'}>
                <IconButton sx={style.copyButton} onClick={copyHandler}><ContentCopyIcon color={`${copied && 'success'}`} sx={{ fontSize: '13px' }} /></IconButton>
            </Tooltip>
        </Box>
    )
}

export function ContactsBox() {

    const [copiedAll, setCopiedAll] = useState(false)


    const copyAllHandler = () => {
        navigator.clipboard.writeText(contacts.toString())
        setCopiedAll(true)
        setTimeout(setCopiedAll, 2000, false)
    }

    return (
        <Grid container sx={style.wrapper}>
            <Grid item xs={11} sx={style.gridElem}>
                <ContactsElem icons={<PhoneIcons />} content={contacts.phone} tooltipTitle={'Скопировать телефон'} />
                <ContactsElem icons={<EmailIcon sx={{ ...{ fontSize: '16px' }, ...style.icons }} />} content={contacts.email} tooltipTitle={'Скопировать почту'} />
            </Grid>
            <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Tooltip title={'Скопировать все контакты'} placement={'left'}>
                    <IconButton sx={style.copyButton} onClick={copyAllHandler}><ContentCopyIcon sx={{ fontSize: '20px' }} color={`${copiedAll && 'success'}`}/></IconButton>
                </Tooltip>
            </Grid>
        </Grid>
    )
}