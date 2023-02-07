import express from 'express'
const router = express.Router()
import { getAdmins } from '../controllers/management.js'

router.get("/admins",getAdmins)

export default router