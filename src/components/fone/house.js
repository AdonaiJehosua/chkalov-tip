import { Box } from "@mui/material"
import house from '../../media/images/house.svg'

const style = {
    house: {
        width: '100%',
        height: '100%',
        padding: '0',
        backgroundImage: `url(${house.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
    },
}

export const House = () => {
    return (
        <Box sx={style.house} />
    )
}