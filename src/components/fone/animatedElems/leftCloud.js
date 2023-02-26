import { Box } from "@mui/material"
import leftCloud from '../../../media/images/leftCloud.svg'
import { mainLayoutComponentStyles } from "@/styles/mainLayoutComponentStyles"

export const LeftCloud = ({ top, time }) => {
  return (
    <Box sx={mainLayoutComponentStyles.leftCloud(top, time)} component='img' src={leftCloud.src} />
  )
}