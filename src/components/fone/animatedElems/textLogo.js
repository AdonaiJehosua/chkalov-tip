import { Box, Typography } from "@mui/material"
import { mainLayoutComponentStyles } from "@/styles/mainLayoutComponentStyles"
import Link from "next/link"

const style = {
    box: {
        position: 'relalive', display: 'flex', alignItems: 'center', flexDirection: 'column'
    }
}

export function TextLogo() {

    const followCursor = () => {
        if (typeof window !== 'undefined') {
        const chkalov = document.getElementById('chkalov')
        const typography = document.getElementById('typography')
        const centerX = document.body.clientWidth/2
        const centerY = document.body.clientHeight/2
        window.addEventListener('mousemove', e => {
          const target = e.target
          if (!target) return
          let rotateChkalov = e.pageX/200 - centerX/200
          let rotateTypography = -(e.pageX/200 - centerX/200)
          chkalov.style.transform = `translateX(${(e.pageX/35 - centerX/35)}px)
                                        rotate(${rotateChkalov}deg)
                                        scale(${(e.pageY/40 - centerY/40)+100}%)
                                    `
          typography.style.transform = `translateX(${-(e.pageX/35 - centerX/35)}px)
                                        rotate(${rotateTypography}deg)
                                        scale(${-(e.pageY/40 - centerY/40)+130}%)
                                    `
        })
      }
    }
    
    followCursor()

    return (
        <Box sx={mainLayoutComponentStyles.textLogoWrapper}>
            <Link href="/" style={mainLayoutComponentStyles.logoLink} >
                <Box sx={style.box}>
                    <Typography id='chkalov' variant="h5" sx={{lineHeight: '1', fontSize: '200%', fontWeight: 'bold', letterSpacing: '0.20rem'}}>ЧКАЛОВ</Typography>
                    <Typography id={'typography'} sx={{ fontSize: '60%', letterSpacing: '0.1rem', fontFamily: 'GothamPro'}}>ТИПОГРАФИЯ</Typography>
                </Box>
            </Link>
        </Box>
    )
}