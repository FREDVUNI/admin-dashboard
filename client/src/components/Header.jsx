import React from 'react'
import { Typography,Box,useTheme } from '@mui/material'

const Header = ({ title,subtitle }) =>{
    const theme = useTheme()
    return(
        <Box>
            <Typography
                variant="h2"
                color={theme.palette.secondary[100]}
                fontWeight="bold"
                sx={{ mb: "5px"}}
            >
                {title}
            </Typography>
            <Typography varaiant="h5" color={theme.palette.secondary[300]}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header