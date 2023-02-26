import fone from '../media/images/fone.svg'
import sun from '../media/images/sun.svg'
import tree from '../media/images/tree.svg'
import grass from '../media/images/grass.svg'
import house from '../media/images/house.svg'
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

const rightCloudAnimation = keyframes`
  0% { 
    transform: translateX(0%) 
  }
  100% {
    transform: translateX(-1100%) 
  }
`

const leftCloudAnimation = keyframes`
  0% { 
    transform: translateX(0%) 
  }
  100% {
    transform: translateX(1100%) 
  }
`

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


export const mainLayoutComponentStyles = {
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
    sun: {
        width: '100%',
        height: '100%',
        padding: '0',
        backgroundImage: `url(${sun.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    tree: {
        width: '100%',
        height: '100%',
        padding: '0',
        backgroundImage: `url(${tree.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    grass: {
        width: '100%',
        height: '100%',
        padding: '0',
        backgroundImage: `url(${grass.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    house: {
        width: '100%',
        height: '100%',
        padding: '0',
        backgroundImage: `url(${house.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    foneCloud: {
        width: '100%',
        height: '100%',
        padding: '0',
        position: 'fixed',
        animation: `${foneCloudAnimation} 120s linear infinite`,
    },
    rightCloud(top, time) {
        return (
            {
                width: '10%',
                padding: '0',
                position: 'fixed',
                top: `${top}`,
                left: '100%',
                animation: `${rightCloudAnimation} ${time} linear infinite`,
            }
        )
    },
    leftCloud(top, time) {
        return (
            {
                width: '12%',
                padding: '0',
                position: 'fixed',
                top: `${top}`,
                left: '-11%',
                animation: `${leftCloudAnimation} ${time} linear infinite`,
            }
        )
    },
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