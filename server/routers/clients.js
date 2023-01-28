import express from 'express'
const router = express.Router()
import { getProducts,getCustomers } from '../controllers/clients.js'

router.get('/products',getProducts)
router.get('/customers',getCustomers)

export default router