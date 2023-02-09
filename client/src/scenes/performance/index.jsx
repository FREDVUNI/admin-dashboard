import React from 'react'
import { useTheme,Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useGetPerformanceQuery } from 'state/api'
import Header from 'components/Header'
import CustomColumnMenu from 'components/DataGridCustomColumnMenu'
import { useSelector } from 'react-redux'

const Performance  = () =>{
    const userId = useSelector((state) => state.global.userId)
    const { data,isLoading } = useGetPerformanceQuery(userId);
    const theme = useTheme()

    const columns = [
        {
            field:"_id",
            headerName:"ID",
            flex:1
        },
        {
            field:"userId",
            headerName:"User ID",
            flex:0.5
        },
        {
            field:"createdAt",
            headerName:"created At",
            flex:1
        },
        {
            field:"products",
            headerName:"# of products",
            flex:0.5,
            sortable: false,
            renderCell:(params) => params.value.length
        },
        {
            field:"cost",
            headerName:"cost",
            flex:1,
            renderCell:(params) => `$${Number(params.value).toFixed(2)}`
        },
    ]

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Performance" subtitle="Track your affiliate performance here"/>
            <Box
               mt="40px"
               height="75vh"
               sx={{
                "& .MuiDataGrid-root":{
                    border:"none"
                },
                "& .MuiDataGrid-cell":{
                    borderBottom:"none"
                },
                "& .MuiDataGrid-columnHeaders":{
                    backgroundColor:theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor:theme.palette.primary.light
                },
                "& .MuiDataGrid-footerContainer":{
                    backgroundColor:theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderTop:"none"
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color: `${theme.palette.secondary[200]} !important`
                }
               }}
            >
                <DataGrid
                   loading = { isLoading || !data }
                   getRowId = {(row) => row._id}
                   rows ={(data && data.sales) || []}
                   columns ={columns}
                   components={{
                     columnMenu : CustomColumnMenu
                   }}
                />
            </Box>
        </Box>
    )
}

export default Performance