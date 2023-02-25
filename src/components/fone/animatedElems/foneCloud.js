import { Box } from "@mui/material"
import foneCloud from '../../../media/images/foneCloud.svg'
import { keyframes } from '@emotion/react'

const foneCloudAnimation = keyframes`
  0% { 
    transform: translateX(0%) 
  }
  25% {
    transform: translateX(5%) 
  }
  50% {
    transform: translate(0%)
  }
  75% {
    transform: translate(-5%)
  }
  100% {
    transform: translate(0%)
  }
`

const style = {
    foneCloud: {
        width: '100%',
        height: '100%',
        padding: '0',
        position: 'fixed',
        animation: `${foneCloudAnimation} 120s linear infinite`,
    },
}

export const FoneCloud = () => {
    return (
        <Box sx={style.foneCloud} component='img' src={foneCloud.src}/>
    )
}