import { Box } from "@mui/material"
import sun from '../../media/images/sun.svg'

const style = {
    sun: {
        width: '100%',
        height: '100%',
        padding: '0',
        backgroundImage: `url(${sun.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
    },
}

export const Sun = () => {
    return (
        <Box sx={style.sun} />
    )
}