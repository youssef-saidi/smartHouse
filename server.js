const express=require('express')
 const HouseRoute=require('./routes/HouseRoute')


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','*')
    res.setHeader('Access-Control-Allow-Headers','Content-Type')
    next()
})

 app.use('/',HouseRoute)



app.listen(process.env.PORT || 5000,()=>{
    console.log("server run port :: 5000")
})
