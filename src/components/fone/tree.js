import { Box } from "@mui/material"
import tree from '../../media/images/tree.svg'

const style = {
    tree: {
        width: '100%',
        height: '100%',
        padding: '0',
        backgroundImage: `url(${tree.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
    },
}

export const Tree = () => {
    return (
        <Box sx={style.tree} />
    )
}