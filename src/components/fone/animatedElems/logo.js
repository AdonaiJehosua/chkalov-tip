import { Box } from "@mui/material"
import smallLogo from '../../../media/images/smallLogo.svg'
import { keyframes } from '@emotion/react'

const flyAnimation = keyframes`
  0% { 
    transform: translateX(0%) translateY(0%) rotate(-5deg) 
  }
  25% {
    transform: translateX(175%) translateY(-130%) rotate(-7deg) 
  }
  40% { 
    transform: translateX(280%) translateY(-150%) rotate(-10deg) 
  }
  50% { 
    transform: translateX(350%) translateY(-160%) rotate(0deg) 
  }
  60% { 
    transform: translateX(420%) translateY(-160%) rotate(5deg) 
  }
  75% { 
    transform: translateX(525%) translateY(-140%) rotate(10deg) 
  }
  100% { 
    transform: translateX(950%) translateY(-130%) rotate(15deg) 
  }
`


const style = {
    animatedLogo: {
        display: { xs: 'none', md: 'flex' },
        width: '12%',
        position: 'fixed',
        top: '200px',
        left: '-13%',
        transform: 'rotate(15deg)',
        animation: `${flyAnimation} 60s linear infinite`,
    },
}

export const AnimatedLogo = () => {
    return (
        <Box sx={style.animatedLogo} component='img' src={smallLogo.src} />
    )
}