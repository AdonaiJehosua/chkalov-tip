import { Box } from "@mui/material"
import rightCloud from '../../../media/images/rightCloud.svg'
import { keyframes } from '@emotion/react'

const rightCloudAnimation = keyframes`
  0% { 
    transform: translateX(0%) 
  }
  100% {
    transform: translateX(-1100%) 
  }
`



export const RightCloud = ({top, time}) => {

    const style = {
        rightCloud: {
            width: '10%',
            padding: '0',
            position: 'fixed',
            top: `${top}`,
            left: '100%',
            animation: `${rightCloudAnimation} ${time} linear infinite`,
        },
    }

    return (
        <Box sx={style.rightCloud} component='img' src={rightCloud.src}/>
    )
}