import mongoose from "mongoose"

const ProductStatschema = new mongoose.Schema({
    productId:String,
    yearlySalesTotal: Number,
    yearlyTotalUnitsSold: Number,
    year:Number,
    monthlyData:[
        {
            month: String,
            totalSales: Number,
            totalUnits: Number
        }
    ],
    dailyData:[
        {
            date: String,
            totalSales: Number,
            totalUnits: Number
        }
    ]

},{timestamps:true})

const ProductStat = mongoose.model("ProductStat",ProductStatschema)
export default ProductStat