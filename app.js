import express from 'express'
import cors from 'cors'
import db from "./database/db.js"

import userRoute from './routes/UserRoutes.js'
import porductRoute from './routes/ProductRoutes.js'
import genresRoute from './routes/GenresRoute.js'
const app= express ()

app.use(cors())
app.use(express.json())
app.use('/Users',userRoute)
app.use('/Products',porductRoute)
app.use('/Genres',genresRoute)
try {
    await db.authenticate()
    console.log("exito!!")
}catch(error){

}


app.get('/',(req,res)=>{
    res.send("Sehnlong Comics")
})

app.listen(8000,()=>{
    console.log("welcom to shenlog comics in http://localhost:8000/")
})