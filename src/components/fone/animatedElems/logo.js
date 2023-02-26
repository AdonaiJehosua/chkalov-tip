import { Box } from "@mui/material"
import smallLogo from '../../../media/images/smallLogo.svg'
import { mainLayoutComponentStyles } from "@/styles/mainLayoutComponentStyles"

export const AnimatedLogo = () => {
  return (
    <Box sx={mainLayoutComponentStyles.animatedLogo} component='img' src={smallLogo.src} />
  )
}