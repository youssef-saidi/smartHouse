const route=require('express').Router()
const HouseModel=require('../model/HouseModel')

route.get('/',(req,res,next)=>{
    // HouseModel.testConnect().then((msg)=>{
    //     res.status(200).json(msg)
    //     console.log(msg)
    // }).catch((err)=>{
    //     res.status(404).json(err)
    //     console.log(err)
    // })
    res.send('hello word')
})

route.get('/House',(req,res,next)=>{
    HouseModel.getHouseData().then((data)=>{
        res.status(200).json(data[0])
    }).catch((err)=>{
        res.status(404).json(err)
        console.log(err)
    })
})
route.get('/House/:CapteurName',(req,res,next)=>{
    HouseModel.getHouseData().then((data)=>{
        CapteurName=req.params.CapteurName
        console.log(CapteurName)
        res.status(200).json(data[0][CapteurName])
    }).catch((err)=>{
        res.status(404).json(err)
        console.log(err)
    })
})






route.post('/House/data',(req,res,next)=>{
    HouseModel.postDataHouse("20","15","30","50","40","50").then((data)=>{
        res.status(200).json(data)
    }).catch((err)=>{
        res.status(404).json(err)
        console.log(err)
    })
})
route.patch('/House/update/',(req,res,next)=>{
    HouseModel.UpdateDataHouse(req.query.normLight,req.query.romLight,req.query.dlight,req.query.capGaz,req.query.capMouv,req.query.capTemp).then((data)=>{
        res.status(200).json(data)
    }).catch((err)=>{
        res.status(404).json(err)
        console.log(err)
    })
})


module.exports=route
