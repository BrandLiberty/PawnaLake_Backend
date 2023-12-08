import express from 'express'
const router  = express.Router()

import { contact } from '../controllers/homeController.js'
import send from 'send'

router.post('/contact',contact)
router.get("/",(req,res)=>{
    res.send("hi")
})
export default router