export const navBarStyles = {
    appBar: {
        position: 'relative',
        display: 'flex',
    },
    logoWrapper: {
        display: { xs: 'flex' },
        position: 'relative',
        justifyContent: 'center',
        margin: 'auto'
    },
    logoLink: {
        width: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        maxWidth: '120px'
    },
    mdMenu: {
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'flex-start'
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

export const contactsBoxStyles = {
    wrapper: {
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center'
    },
    contacts: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    copyButton: {
        padding: '4px'
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
    },
    commonButtons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export const mainMenuStyles = {
    mdMenuElem: {
        my: 2,
        color: 'black',
        display: 'block'
    },
}