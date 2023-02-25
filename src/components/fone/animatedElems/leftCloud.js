import { Box } from "@mui/material"
import leftCloud from '../../../media/images/leftCloud.svg'
import { keyframes } from '@emotion/react'

const leftCloudAnimation = keyframes`
  0% { 
    transform: translateX(0%) 
  }
  100% {
    transform: translateX(1100%) 
  }
`



export const LeftCloud = ({top, time}) => {

  const style = {
    leftCloud: {
        width: '12%',
        padding: '0',
        position: 'fixed',
        top: `${top}`,
        left: '-11%',
        animation: `${leftCloudAnimation} ${time} linear infinite`,
    },
}

    return (
        <Box sx={style.leftCloud} component='img' src={leftCloud.src}/>
    )
}