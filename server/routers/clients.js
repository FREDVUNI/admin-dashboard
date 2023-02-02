import express from 'express'
const router = express.Router()
import { getProducts,getCustomers,getTransactions } from '../controllers/clients.js'

router.get('/products',getProducts)
router.get('/customers',getCustomers)
router.get('/transactions',getTransactions)

export default router