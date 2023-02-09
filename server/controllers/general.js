import User from '../models/User.js'
import Transaction from '../models/Transaction.js'
import OverallStat from '../models/OverallStat.js'

export const getUser = async(req,res) =>{
    try{
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}

export const getDashboardStats = async(req,res) =>{
    try{
        const currentMonth = "November"
        const currentDay = "2021-11-15"
        const currentYear = "2021"

        const transactions = await Transaction.find()
            .limit(50)
            .sort({ createdOn: -1 })

        const overallstats = await OverallStat.find({ year: currentYear })
        const { totalCustomers, yearlyTotalUnitsSold, yearlySalesTotal,monthlyData, salesByCategory } = overallstats[0]

        const thisMonthStats = overallstats[0].monthlyData.find(({month}) =>{
            return month === currentMonth
        })

        const todayStats = overallstats[0].dailyData.find(({date}) =>{
            return date === currentDay
        })

        res.status(200).json({
            totalCustomers,
            yearlyTotalUnitsSold,
            yearlySalesTotal,
            monthlyData,
            salesByCategory,
            thisMonthStats,
            todayStats,
            transactions
        })

    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}