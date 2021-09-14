
const mongoose = require('mongoose')
const mongooseUrl = "mongodb://localhost:27017/login"


module.exports = app=>{
    /* 连接数据库 */
    mongoose.connect(mongooseUrl,{useNewUrlParser: true},
        (err)=>{
            if(err){
                console.log(err)
            }
        else{
            console.log("mongoose1引入")  
        }
    })
}  


 

