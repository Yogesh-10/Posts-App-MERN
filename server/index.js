import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
