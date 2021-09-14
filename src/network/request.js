import axios from 'axios'

export function request(config){
    const instance = axios.create({
       baseUrl:'http://localhost:3000/user',
       timeout:10000,
   })
   //实例的请求拦截器
   instance.interceptors.request.use(config=>{
       if(sessionStorage.elementToken){
        config.headers['Authorization'] = sessionStorage.elementToken
       } 
       return config  
   },err=>{
       console.log(err)
   })
   //响应
   instance.interceptors.response.use(res=>{
       console.log("拦截器响应成功")
       return res
   },err=>{
       console.log("拦截器响应失败")
       console.log(err)
       return err
   })

   //发送真正的网络请求
    return instance(config)
}

