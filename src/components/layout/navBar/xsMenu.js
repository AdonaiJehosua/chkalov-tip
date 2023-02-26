import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react"
import Link from "next/link"
import { mainMenuStyles } from "@/styles/navBarStyles"



export function XsMenu({ pages, selected, handleMenuSelectedItem }) {

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontFamily: 'aFuturaRound', fontWeight: 'bold' }}>
                ЧКАЛОВ
            </Typography>
            <Divider />
            <List>
                {pages.map((page) => (
                    <Link
                        key={page.pageName}
                        onClick={() => handleMenuSelectedItem(page.pageName)}
                        href={page.href}
                        style={{ textDecoration: 'none' }}
                    >
                        <ListItem disablePadding>
                            <ListItemButton sx={mainMenuStyles.mdMenuElem}>
                                <ListItemText primary={page.pageName} sx={{ textDecoration: page.pageName === selected ? 'underline' : 'none' }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    )

    return (
        <>
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
                onOpen={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: 'block',
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {sm: '50%', xs: '100%'} },
                }}
            >
                {drawer}
            </SwipeableDrawer>
        </>
    )
}