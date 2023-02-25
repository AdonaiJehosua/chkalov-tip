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
    },

    logoWrapper: {
        display: { xs: 'flex' },
        flexGrow: 11,
        justifyContent: 'center'
    },
    logo: {
        maxWidth: '120px'
    },
    mdMenu: {
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'flex-start'

    },
    mdMenuElem: {
        my: 2,
        color: 'black',
        display: 'block'
    },
    xsMenu: {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' }
    },
    xsMenuList: {
        display: { xs: 'block', md: 'none' },
    },
    contactsBoxWrapper: {
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
    },
    contactsBoxWrapper2: {
        flexGrow: 1,
    }
}

const pages = ['О нас', 'Продукция', 'Услуги', 'Контакты']

export function NavBar() {

    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorContacts, setAnchorContacts] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }
    const handleOpenContactsMenu = (event) => {
        setAnchorContacts(event.currentTarget)
    }

    const handleCloseContactsMenu = () => {
        setAnchorContacts(null);
    }

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
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
    

    return (
        <AppBar sx={style.appBar}>
            <Box maxWidth="xl" sx={{ margin: 'none', margin: '0 20px' }} >
                <Toolbar disableGutters>



                    <Box sx={style.xsMenu}>
                        {/* <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={style.xsMenuList}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2,}}
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

                    <Box component="a" href="" sx={style.logoWrapper}>
                        <Box component='img' src={textLogo.src} sx={style.logo} />
                    </Box>

                    <Box sx={style.contactsBoxWrapper}>
                        <ContactsBox />
                    </Box>

                    <Box sx={style.xsMenu}>
                        <IconButton
                            size="large"
                            aria-controls="contacts-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenContactsMenu}
                            color="inherit"
                        >
                            <Tooltip title={'Контакты'} placement={'left'}>
                                <PhoneIcon />
                            </Tooltip>
                        </IconButton>

                        <Menu
                            id="contacts-appbar"
                            anchorEl={anchorContacts}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorContacts)}
                            onClose={handleCloseContactsMenu}
                            sx={style.xsMenuList}
                        >
                            <Box sx={style.contactsBoxWrapper2}>
                                <ContactsBox />
                            </Box>
                        </Menu>
                    </Box>

                </Toolbar>
            </Box>
        </AppBar>
    )
}
