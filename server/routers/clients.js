import express from 'express'
const router = express.Router()
import { getProducts } from '../controllers/clients.js'

router.get('/products',getProducts)

export default router