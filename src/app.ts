import express,{Request, Response, NextFunction} from "express"
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import userRouter from './routes/users'
import indexRouter from './routes/index'
import adminRouter from './routes/Admin'
import vendorRouter from './routes/vendor'
const port = process.env.PORT || 4000;
console.log(port)

import dotenv from 'dotenv'
import { db } from "./config"
import cors from 'cors'
dotenv.config()

//Sequelize Connection
db.sync().then(() => {
    console.log("Database Connected Successfully")
}).catch((err) => {
    console.log(err)
})

const app = express()

const corsOptions = {
    origin: 'https://foodorderingapp.onrender.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'))
app.use(cookieParser())


//Router Middleware
app.use('/users', userRouter)
app.use('/', indexRouter)
app.use('/admins', adminRouter)
app.use('/vendors', vendorRouter)



app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})

export default app