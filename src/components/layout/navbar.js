import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import textLogo from '../../media/images/textLogo.svg'
import { ContactsBox } from './contactsBox'
import { useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer, Tooltip } from '@mui/material'



const style = {
    appBar: {
        position: 'static',
        display: 'flex',
    },

    logoWrapper: {
        display: { xs: 'flex' },
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',
        justifyContent: 'center',

    },
    logo: {
        maxWidth: '120px'
    },
    mdMenu: {
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'flex-start'

    },
    mdMenuElem: {
        my: 2,
        color: 'black',
        display: 'block'
    },
    xsMenu: {
        display: { xs: 'flex', md: 'none' }
    },
    xsMenuList: {
        display: { xs: 'block', md: 'none' },
    },
    contactsBoxWrapper: {
        display: { xs: 'none', md: 'flex' },
    },
}

const pages = ['О нас', 'Продукция', 'Услуги', 'Контакты']

export function NavBar() {

    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorContacts, setAnchorContacts] = useState(null)


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }
    const handleOpenContactsMenu = (event) => {
        setAnchorContacts(event.currentTarget)
    }

    const handleCloseContactsMenu = () => {
        setAnchorContacts(null);
    }

    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileContactsOpen, setMobileContactsOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    }

    const handleContactsDrawerToggle = () => {
        setMobileContactsOpen((prevState) => !prevState);
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontFamily: 'aFuturaRound', fontWeight: 'bold' }}>
                ЧКАЛОВ
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const xsContacts = (
        <Box onClick={handleContactsDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontFamily: 'aFuturaRound', fontWeight: 'bold' }}>
                Свяжитесь с нами
            </Typography>
            <Divider />
            <List>
                <Box component="a" href="tel:+79920095149" sx={style.logoWrapper}>
                    9920095149
                </Box>
                <ListItem disablePadding>
                    Phone
                </ListItem>
                <ListItem disablePadding>
                    Email
                </ListItem>
                <ListItem disablePadding>
                    Adress
                </ListItem>
            </List>
        </Box>
    )


    return (
        <AppBar sx={style.appBar}>
            <Box sx={{ margin: '0 20px' }} >
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* Логотип */}
                    <Box component="a" href="" sx={style.logoWrapper}>
                        <Box component='img' src={textLogo.src} sx={style.logo} />
                    </Box>
                    {/* Мобильное меню */}
                    <Box sx={style.xsMenu}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <SwipeableDrawer
                            anchor='left'
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: 'block',
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '50%' },
                            }}
                        >
                            {drawer}
                        </SwipeableDrawer>
                    </Box>
                    {/* Десктопное меню */}
                    <Box sx={style.mdMenu}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={style.mdMenuElem}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {/* Десктопные контакты */}
                    <Box sx={style.contactsBoxWrapper}>
                        <ContactsBox />
                    </Box>
                    {/* Мобильные контакты */}
                    <Box sx={style.xsMenu}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleContactsDrawerToggle}
                        >
                            <PhoneIcon />
                        </IconButton>
                        <SwipeableDrawer
                            anchor='right'
                            variant="temporary"
                            open={mobileContactsOpen}
                            onClose={handleContactsDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: 'block',
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '50%' },
                            }}
                        >
                            {xsContacts}
                        </SwipeableDrawer>
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    )
}
