const express = require('express');
const router = express.Router()
const mongo1 = require('./config/db')
const routes = require('./router/index')
const cors = require('cors')
const app = express();

mongo1(app)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())  

app.use(express.static('pubilc'))
app.use('/static',express.static('pubilc'))

app.use(router)

routes(app)


app.listen(3000,()=>{     
    console.log("服务已经启动，3000 端口监听中……")      
});           
  
 