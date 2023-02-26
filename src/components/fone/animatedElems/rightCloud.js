import { Box } from "@mui/material"
import rightCloud from '../../../media/images/rightCloud.svg'
import { mainLayoutComponentStyles } from "@/styles/mainLayoutComponentStyles"

export const RightCloud = ({ top, time }) => {
  return (
    <Box sx={mainLayoutComponentStyles.rightCloud(top, time)} component='img' src={rightCloud.src} />
  )
}