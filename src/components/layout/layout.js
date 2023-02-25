import { Box } from "@mui/material"
import { NavBar } from "./navbar"

import fone from '../../media/images/fone.svg'
import { AnimatedLogo } from "../fone/animatedElems/logo"
import { House } from "../fone/house"
import { FoneCloud } from "../fone/animatedElems/foneCloud"
import { Grass } from "../fone/grass"
import { LeftCloud } from "../fone/animatedElems/leftCloud"
import { RightCloud } from "../fone/animatedElems/rightCloud"
import { Sun } from "../fone/sun"
import { Tree } from "../fone/tree"

const style = {
    fone: {
        width: '100%',
        height: '100%',
        padding: '0',
        backgroundImage: `url(${fone.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    layoutContainer: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    pageContainer: {
        width: '100%', 
        height: '100%', 
        border: '1px solid black',
        marginLeft: '15px',
        marginRight: '15px'
    },
}

export function Layout({ children }) {
    return (
        <Box sx={style.fone}>
            <Sun />
            <FoneCloud />
            <RightCloud top={'20px'} time={'100s'} />
            <LeftCloud top={'100px'} time={'80s'} />
            <RightCloud top={'170px'} time={'120s'} />
            <Grass />
            <House />
            <Tree />
            <AnimatedLogo />
            {/* <Header /> */}
            <NavBar />
            <Box sx={style.layoutContainer}>
                <Box sx={style.pageContainer}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}