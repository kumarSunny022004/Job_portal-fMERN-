import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// initialize Express
const app = express()

//Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get('/',(req,res) =>res.send("API wroking"))

// port 
const PORT = process.env.PORT || 5000
 
app.listen(PORT,()=>{
    console.log(`server is runn on the ports ${PORT}`)
})