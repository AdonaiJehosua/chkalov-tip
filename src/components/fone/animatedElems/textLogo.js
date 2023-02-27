import { Box, Typography } from "@mui/material"
import textLogo from '../../../media/images/textLogo.svg'
import { mainLayoutComponentStyles } from "@/styles/mainLayoutComponentStyles"
import Link from "next/link"

export function TextLogo() {
    return (
        <Box sx={mainLayoutComponentStyles.textLogoWrapper}>
            <Link href="/" style={mainLayoutComponentStyles.logoLink} >
                <Box sx={{position: 'relalive', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Typography variant="h5" sx={{lineHeight: '1', fontSize: '200%', fontWeight: 'bold', letterSpacing: '0.20rem'}}>ЧКАЛОВ</Typography>
                    <Typography sx={{ fontSize: '60%', letterSpacing: '0.1rem', fontFamily: 'GothamPro'}}>ТИПОГРАФИЯ</Typography>
                </Box>
            </Link>
                {/* <Box component='img' src={textLogo.src} sx={mainLayoutComponentStyles.textLogo} /> */}
        </Box>
    )
}