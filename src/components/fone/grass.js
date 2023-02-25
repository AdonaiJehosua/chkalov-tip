import { Box } from "@mui/material"
import grass from '../../media/images/grass.svg'

const style = {
    grass: {
        width: '100%',
        height: '100%',
        padding: '0',
        backgroundImage: `url(${grass.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
    },
}

export const Grass = () => {
    return (
        <Box sx={style.grass} />
    )
}