import { Box } from "@mui/material"
import foneCloud from '../../../media/images/foneCloud.svg'
import { mainLayoutComponentStyles } from "@/styles/mainLayoutComponentStyles" 

export const FoneCloud = () => {

    return (
        <Box id={'foneCloud'} sx={mainLayoutComponentStyles.foneCloud} component='img' src={foneCloud.src}/>
    )
}