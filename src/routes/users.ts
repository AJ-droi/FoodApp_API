import express, {Request, Response, NextFunction} from 'express'
import {getAllUsers, getSingleUser, Login, Register, resendOTP, updateUserProfile, verifyUser} from '../controller/userController'
import { auth } from '../middleware/authorization'
import cors from 'cors'

const router = express.Router()


router.post('/signup', cors(), Register)
router.post('/verify/:signature', verifyUser)
router.post('/login', Login)
router.get('/resend-otp/:signature', resendOTP)
router.get('/get-all-users', getAllUsers)
router.get('/get-user', auth, getSingleUser)
router.patch("/update-profile",auth, updateUserProfile )

export default router