import React from 'react'
import { Search } from '@mui/icons-material'
import { IconButton,TextField,InputAdornment } from '@mui/material'
import { 
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton,
 } from '@mui/x-data-grid'
import FlexBetween from './FlexBetween'

const DataGridCustomToolbar = () =>{
    return(
        <GridToolbarContainer>
            <FlexBetween width="100%">
                <FlexBetween>
                    <GridToolbarColumnsButton/>
                    <GridToolbarDensitySelector/>
                    <GridToolbarExport/>
                </FlexBetween>
                <TextField 
                    label="search ..."
                    sx={{ mb:"0.5rem", width:"1                                                                                                                     5rem" }}
                    //
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">
                                <IconButton onClick={ () =>{} }>
                                    <Search/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </FlexBetween>
        </GridToolbarContainer>
    )
}

export default DataGridCustomToolbar