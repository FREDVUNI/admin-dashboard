import React,{useState} from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box,useTheme } from '@mui/material'
import { useGetTransactionsQuery } from 'state/api'
import Header from 'components/Header'
import DataGridCustomToolbar from 'components/DataGridCustomToolbar'

const Transactions = () =>{
    const theme = useTheme()

    //values sent to backend
    const [page,setPage] = useState(0)
    const [pageSize,setPageSize] = useState(20)
    const [sort,setSort] = useState({})
    const [search,setSearch] = useState("")
    const [searchInput,setSearchInput] = useState("")

    const {data,isLoading} = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
    })
    
    const columns = [
        {
            field:"_id",
            headerName:"ID",
            flex:1
        },
        {
            field:"userId",
            headerName:"User ID",
            flex:1
        },
        {
            field:"createdAt",
            headerName:"Created At",
            flex:1
        },
        {
            field:"products",
            headerName:"# of Products",
            flex:0.5,
            sortable:false,
            renderCell: (params) => params.value.length
        },
        {
            field:"cost",
            headerName:"Cost",
            flex:1,
            sortable:false,
            renderCell: (params) => `$${Number(params.value).toFixed(2)}`
        },
    ]

    return(
        <Box m="1.5rem 2.5rem">
        <Header title="TRANSACTIONS" subtitle="List of all transactions"/>
            <Box
                mt="40px"
                height="80vh"
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
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={(data && data.transactions) || []}
                    columns={columns}
                    rowCount={(data && data.total) || 0}
                    roPageOptions={[ 20,50,100 ]}
                    pagination
                    page={page}
                    pageSize={pageSize}
                    paginationMode="server"
                    sortingMode="server"
                    onPageChange={ (newPage) => setPage(newPage) }
                    onPageSizeChange={ (newPageSize) => setPageSize(newPageSize) }
                    onSortModelChange={ (newSortModel) => setSort(...newSortModel) }
                    components={{ Toolbar: DataGridCustomToolbar }}
                    componentsProps={{
                        toolbar:{searchInput,setSearchInput,setSearch}
                    }}
                />
            </Box>
        </Box>
    )
}

export default Transactions