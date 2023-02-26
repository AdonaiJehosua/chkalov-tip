import { Box, Divider, IconButton, List, ListItem, SwipeableDrawer, Typography } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone'
import { useState } from "react"




export function XsContactsMenu() {
    const [mobileContactsOpen, setMobileContactsOpen] = useState(false)

    const handleContactsDrawerToggle = () => {
        setMobileContactsOpen((prevState) => !prevState);
    }

    const xsContacts = (
        <Box onClick={handleContactsDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
                Свяжитесь с нами
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <Box component="a" href="tel:+79920095149">
                        9920095149
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                <Box component="a" href="mailto:zakaz@chkalov-tip.ru">
                zakaz@chkalov-tip.ru
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    Adress
                </ListItem>
            </List>
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
                variant="temporary"
                open={mobileContactsOpen}
                onClose={handleContactsDrawerToggle}
                onOpen={handleContactsDrawerToggle}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: 'block',
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '50%' },
                }}
            >
                {xsContacts}
            </SwipeableDrawer>
        </>
    )
}