import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { ContactsBox } from './contactsBox'
import { useContext, useState } from 'react'
import { XsContactsMenu } from './xsContactsMenu'
import { navBarStyles } from '@/styles/navBarStyles'
import { PagesContext } from '@/appContext/PagesContext'
import { XsMenu } from './xsMenu'
import { MainMenu } from './mainMenu'

export function NavBar() {

    const pages = useContext(PagesContext)

    const [selected, setSelected] = useState('')

    const handleMenuSelectedItem = (item) => {
        setSelected(item)
        console.log(selected)
    }

    return (
        <PagesContext.Provider value={pages}>
            <AppBar sx={navBarStyles.appBar}>
                <Box sx={{ margin: '0 20px' }} >
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        
                        {/* Мобильное меню */}
                        <Box sx={navBarStyles.xsMenu}>
                            <XsMenu pages={pages} selected={selected} handleMenuSelectedItem={handleMenuSelectedItem} />
                        </Box>
                        {/* Десктопное меню */}
                        <Box sx={navBarStyles.mdMenu}>
                            <MainMenu pages={pages} selected={selected} handleMenuSelectedItem={handleMenuSelectedItem}/>
                        </Box>
                        {/* Мобильные контакты */}
                        <Box sx={navBarStyles.xsMenu}>
                            <XsContactsMenu />
                        </Box>
                        {/* Десктопные контакты */}
                        <Box sx={navBarStyles.contactsBoxWrapper}>
                            <ContactsBox handleMenuSelectedItem={handleMenuSelectedItem} />
                        </Box>
                    </Toolbar>
                </Box>
            </AppBar>
        </PagesContext.Provider>
    )
}
