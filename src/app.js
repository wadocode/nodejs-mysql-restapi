import express from 'express'
import emplyeesRoutes from './routes/employees.routes.js'
import './config.js'
const app = express()
app.use(express.json())


app.use('/api', emplyeesRoutes)
app.use((req,res,next) => {
  res.status(404).json({
    message:'Not Found'
  })
})
export default app;