import { Box } from "@mui/material"
import { NavBar } from "./navBar/navbar"
import { AnimatedLogo } from "../fone/animatedElems/logo"
import { House } from "../fone/house"
import { FoneCloud } from "../fone/animatedElems/foneCloud"
import { Grass } from "../fone/grass"
import { LeftCloud } from "../fone/animatedElems/leftCloud"
import { RightCloud } from "../fone/animatedElems/rightCloud"
import { Sun } from "../fone/sun"
import { Tree } from "../fone/tree"
import { mainLayoutComponentStyles } from "@/styles/mainLayoutComponentStyles"

export function Layout({ children }) {
    return (
        <Box sx={mainLayoutComponentStyles.fone}>
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
            <Box sx={mainLayoutComponentStyles.layoutContainer}>
                <Box sx={mainLayoutComponentStyles.pageContainer}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}