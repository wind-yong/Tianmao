const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const model = mongoose.model

const UserSchema = new Schema({
    username:{type:String},
    password:{type:String,
        set(val){
            return bcrypt.hashSync(val,10) // 把前端传递过来的数据进行散列加密 强度为10
        }
    },
    name:{type:String},
    cartlist:[
        {
            title:{type:String,}, 
            feature:{type:String,},
            imageUrl:{type:String,},
            price:{type:String,},
            isSoldOut:{type:Boolean},
            ProductNum:{type:Number}
        }
    ]
    // isAdmin:{type:String,default:'0',},
    // 身份 管理员->1 普通用户->0
})

const ProductSchema = new Schema({
    title:{type:String,}, 
    feature:{type:String,},
    imageUrl:{type:String,},
    price:{type:String,},
    isSoldOut:{type:Boolean},
    ProductNum:{type:Number}
})

const User = model('User',UserSchema,'User')

const Product = model('Product',ProductSchema,'Product')

const db = {
    User: model('User',UserSchema,'User'),
    Product: model('Product',ProductSchema,'Product'),
}

module.exports = db
