const mongoose=require('mongoose')


// let url="mongodb://localhost:27017/House"
let url="mongodb+srv://youssef:96232048@cluster0.nqpem.mongodb.net/House?retryWrites=true&w=majority"


let schemaHouse=mongoose.Schema({
    normLight:String,
    romLight:String,
    dlight:String,
    capGaz:String,
    capMouv:String,
    capTemp:String
})

let House=mongoose.model('house',schemaHouse)



exports.testConnect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then((res)=>{

            
           resolve('connect')
           
            }).catch(err=>{ 
                mongoose.disconnect()
            reject(err)
           })

        })



    }
exports.getHouseData=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then((res)=>{

            House.find({id:"624f68b8296d1748aa4b340c"}).then(res=>{
                mongoose.disconnect()
                 resolve(res)
               
            }).catch(err=>{mongoose.disconnect()
                reject(err)
            })
           
            }).catch(err=>{ 
                mongoose.disconnect()
            reject(err)
           })

        })

}

exports.UpdateDataHouse=(normLight,romLight,dlight,capGaz,capMouv,capTemp)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            

                House.updateMany({id:"624f68b8296d1748aa4b340c"},{
                    normLight:normLight,
                    romLight:romLight,
                    dlight:dlight,
                    capGaz:capGaz,
                    capMouv:capMouv,
                    capTemp:capTemp
    
                }).then((res)=>{
                    mongoose.disconnect()
                    resolve(res)
                    
                }).catch((err)=>{
                    mongoose.disconnect()
                    reject(err)
                   
                })
           
           
        })
    })
}

exports.postDataHouse=(normLight,romLight,dlight,capGaz,capMouv,capTemp)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            

                House.insertMany({
                    normLight:normLight,
                    romLight:romLight,
                    dlight:dlight,
                    capGaz:capGaz,
                    capMouv:capMouv,
                    capTemp:capTemp
    
                }).then((res)=>{
                    mongoose.disconnect()
                    resolve(res)
                    
                }).catch((err)=>{
                    mongoose.disconnect()
                    reject(err)
                   
                })
           
           
        })
    })
}