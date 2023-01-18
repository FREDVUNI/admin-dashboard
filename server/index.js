import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import connectDB from './database/connect.js'
import clientRoutes from  './routers/clients.js'
import salesRoutes from  './routers/sales.js'
import managementRoutes from  './routers/management.js'
import generalRoutes from  './routers/general.js'

const app = express()
app.use(morgan('common'))
app.use(helmet())
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))

dotenv.config({path:".env"})
const PORT = process.env.PORT || 9000

app.use("/client",clientRoutes)
app.use("/general",salesRoutes)
app.use("/management",managementRoutes)
app.use("/sales",generalRoutes)

connectDB();

app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
})
