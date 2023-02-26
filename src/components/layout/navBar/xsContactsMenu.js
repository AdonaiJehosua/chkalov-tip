import { Box, Button, Divider, IconButton, List, ListItem, ListItemButton, Snackbar, SwipeableDrawer, Typography } from "@mui/material"
import { cloneElement, useContext, useState } from "react"
import { ContactsContext } from "@/appContext/contactsContext"
import PhoneIcon from '@mui/icons-material/Phone'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import EmailIcon from '@mui/icons-material/Email'
import CloseIcon from '@mui/icons-material/Close'
import MapIcon from '@mui/icons-material/Map'
import { toast } from "react-toastify"


const style = {
    header: {
        fontSize: '25px',
        my: 2,
        fontWeight: 'bold'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    element: {
        display: 'flex',
        flexDirection: 'column'
    },
    elemButton: {
        color: 'text.primary',
        my: 2,
        fontSize: '25px'
    },
    elemLink: {

    },
    linksWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    linkIcon: {
        mb: 2,
        fontSize: '50px',
        color: 'text.primary'
    },
    adress: {
        fontSize: '25px'
    }
}





export function XsContactsMenu() {
    const [mobileContactsOpen, setMobileContactsOpen] = useState(false)

    const contacts = useContext(ContactsContext)

    const handleContactsDrawerToggle = () => {
        setMobileContactsOpen((prevState) => !prevState);
    }

    const copyHandler = (copyContent, toastText) => {
        navigator.clipboard.writeText(copyContent)
        toast(toastText)
    }

    const xsContacts = (
        <Box onClick={handleContactsDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography sx={style.header}>
                Свяжитесь с нами
            </Typography>
            <Divider />
            <Box sx={style.wrapper}>
                <Box sx={style.element}>
                    <Button sx={style.elemButton} onClick={() => copyHandler(contacts.visiblePhone, 'Телефон скопирован')}>{contacts.visiblePhone}</Button>
                    <Box sx={style.linksWrapper} >
                        <Box sx={style.elemLink} component="a" href={`tel:${contacts.phone}`} target='_blank'>
                            <PhoneIcon sx={style.linkIcon} />
                        </Box>
                        <Box sx={style.elemLink} component="a" href={`https://t.me/${contacts.phone}`} target='_blank'>
                            <TelegramIcon sx={style.linkIcon} />
                        </Box>
                        <Box sx={style.elemLink} component="a" href={`https://wa.me/${contacts.phone}`} target='_blank'>
                            <WhatsAppIcon sx={style.linkIcon} />
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box sx={style.element}>
                    <Button sx={style.elemButton} onClick={() => copyHandler(contacts.email, 'Почта скопирована')}>{contacts.email}</Button>
                    <Box sx={style.linksWrapper} component="a" href={`mailto:${contacts.email}`} target='_blank'>
                        <EmailIcon sx={style.linkIcon} />
                    </Box>
                </Box>
                <Divider />
                <Box sx={style.element}>
                    <Box sx={style.adress}>
                    <Button sx={style.elemButton} onClick={() => copyHandler(contacts.adress, 'Адрес скопирован')}>{contacts.adress}</Button>
                        <Box sx={style.linksWrapper} component="a" href={`https://yandex.ru/maps/11171/pervouralsk/house/ulitsa_chkalova_18v/YUAYfwNoSUMDQFtsfXR4dX9rZA==/?ll=59.948064%2C56.894381&z=16.59`} target='_blank'>
                            <MapIcon sx={style.linkIcon} />
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    )

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleContactsDrawerToggle}
            >
                <PhoneIcon />
            </IconButton>
            <SwipeableDrawer
                anchor='right'
                open={mobileContactsOpen}
                onClose={handleContactsDrawerToggle}
                onOpen={handleContactsDrawerToggle}
                variant="temporary"
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: 'block',
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { sm: '50%', xs: '100%' } },
                }}
            >
                {xsContacts}
            </SwipeableDrawer>
        </>
    )
}