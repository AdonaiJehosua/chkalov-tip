import { Box, Divider, IconButton, List, ListItem, ListItemButton, SwipeableDrawer, Typography } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone'
import { useContext, useState } from "react"
import { ContactsContext } from "@/appContext/contactsContext"




export function XsContactsMenu() {
    const [mobileContactsOpen, setMobileContactsOpen] = useState(false)

    const contacts = useContext(ContactsContext)

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
                    <ListItemButton>
                        <Box component="a" href={`tel:${contacts.phone}`} target='_blank'>
                            {contacts.visiblePhone}
                        </Box>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Box component="a" href={`https://t.me/${contacts.phone}`} target='_blank'>
                            {contacts.visiblePhone}
                        </Box>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Box component="a" href={`https://wa.me/${contacts.phone}`} target='_blank'>
                            {contacts.visiblePhone}
                        </Box>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Box component="a" href={`tel:${contacts.email}`}>
                            {contacts.email}
                        </Box>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Box >
                            {contacts.adress}
                        </Box>
                    </ListItemButton>
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