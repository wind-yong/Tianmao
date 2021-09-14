const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const db = require('../model/User')
const User = db.User
const Product = db.Product
const jwt = require('jsonwebtoken')

const data = require('../../data')
const searchdata = require('../../searchdata.json')

const secret = 'register-rules'


//获得用户列表
router.get('/list' ,async (req,res,next)=>{
    const token = req.headers.authorization.split(' ').pop()
    const { _id,username } = jwt.verify(token,secret)
    const user = await User.findById(_id) 
    if(!user){
        return res.status(422).send('用户错误')
    }
    if(username !== user.username){
        res.status(422).send('没有权限')
    }else{
        req.user = user
        next()
    }
},async(req,res)=>{
    const list = await User.find()
    res.send(req.user)
});


//注册
router.post('/register',async (req, res)=>{
    console.log("register",req.body)
    const user = await User.findOne({username:req.body.username})
    if(user){
        return res.send('该用户已存在')
        // return res.status(409).send('该用户已存在')
    }
    const newUser = await new User(req.body).save()
    console.log(newUser)
    res.send(newUser)
})


//登录
router.post('/login',async (req,res)=>{
    const user = await User.findOne({username:req.body.username})
    // console.log("login:",user,req.body.password)
    if(!user){
        // return res.sendStatus(422)
        return res.status(422).send('该用户不存在')
    }
   
    let isPassword = await bcrypt.compareSync(req.body.password,user.password)
    if(!isPassword){
        // return res.sendStatus(422)
        return res.status(422).send('密码错误')
    }
    //返回token
   
    const { _id, username } = user
    const token = jwt.sign({_id,username},secret,{expiresIn:'24h'})
    res.send(token)
})



function saveDoc(doc,res) {
    //保存操作
    doc.save((err,doc)=>{
      if (err){
        res.json({
          status:1,
          msg:err.message
        })
      }else {
        // res.json({
        //   status:0,
        //   msg:"添加购物车成功",
        //   result:'success'
        // })
        res.send(doc)
      }
    })
  }

//购物车
router.post('/addcart',async(req,res)=>
{
    let userId=req.body.UserId
    let productId=req.body.productId

    User.findOne({_id:userId},(err,userDoc)=>{
        if(err){
            res.send(err)
        }else{
            if(userDoc){
                let inCart = false
                userDoc.cartlist.forEach((item)=>{
                    if(mongoose.Types.ObjectId(item._id).toString() === productId){
                        inCart=true
                        item.ProductNum++
                        saveDoc(userDoc,res)
                        
                    }
                })
                if(!inCart){
                    Product.find({"_id":productId},(err,proDoc)=>{
                        if(err){
                            res.send(err)
                        }else{
                            proDoc[0].ProductNum = 1
                            userDoc.cartlist.push(proDoc[0])
                            console.log("userDoc: ",userDoc.cartlist,"userId: ",userId)
                            saveDoc(userDoc,res)
                        }
                    })
                }
                
            }
        }
    })
})

router.post('/deleteCart',async(req,res)=>
{
    let userId=req.body.UserId
    let productId=req.body.productId
    // console.log(userId,productId)
   
    User.updateOne({_id:userId},{
        $pull:{
            cartlist:{_id:productId}
        }
    },  (err,doc)=>{
        if(err){
            res.send("删除失败",err)
        }else{
            if(doc){
                console.log("deletCart: ",doc)
                res.send(doc)
            }
        }
    })
})

//获得购物车列表
router.get('/getCart',async (req,res,next)=>{
    const token = req.headers.authorization.split(' ').pop()
    const { _id,username } = jwt.verify(token,secret)
    const user = await User.findById(_id) 
    if(!user){
        return res.status(422).send('用户错误')
    }
    if(username !== user.username){
        res.status(422).send('没有权限')
    }else{
        req.user = user
        // console.log(req)
        next()
    }
},async(req,res)=>{
    // const list = await User.find()
    // console.log(req.user)
    res.send(req.user)
})


router.get('/goods',(request,response)=>{   //http://127.0.0.1:3000/goods
    response.setHeader('Access-Control-Allow-Origin','*');

    let data1 = JSON.stringify(data)
    response.send(data1); 
});


// 保存过滤的结果
var _filterResult = null;

function filter( _val ){
	return searchdata.data.filter( _g =>{
		return _g.kw === _val
	})
}

router.get('/node_a', function(req, res){
    
	console.log( req.query.v_data );

	let _result = filter( req.query.v_data );

	_filterResult = _result.length !== 0 ? _result : [{name:'没有结果'}]
    
	res.end();
});


router.get('/node_b', function(req, res){
    
	res.send( _filterResult )
});




module.exports = router  





 