import React,{ useMemo } from 'react'
import { ResponsiveLine } from '@nivo/line'
import useTheme from '@mui/material'
import { useGetSalesQuery } from 'state/api'

const OverviewChart = ({ isDashbiard = false,view }) =>{
    const theme = useTheme()
    const { data,isLoading } = useGetSalesQuery()
    return(
        <div></div>
    )
}

export default OverviewChart