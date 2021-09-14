import { request } from './request.js'

export function getShopData(){
    return request({
        url:'http://localhost:3000/user/goods'
    })
}

export function PostLogin(params){
    return request({
        method: 'post',
        url:'http://localhost:3000/user/login',
        data:params,
    })
}


export function Register(params){
    return request({
        method: 'post',
        url:'http://localhost:3000/user/register',
        data:params,
    })
}

export function GetList(){
    return request({
        url:'http://localhost:3000/user/list'
    })
}

export function AddCart(params){
    return request({
        method: 'post',
        url:'http://localhost:3000/user/addCart',
        data:params,
    })
}

export function DeleteCart(params){
    return request({
        method: 'post',
        url:'http://localhost:3000/user/deleteCart',
        data:params,
    })
}

export function GetCart(){
    return request({
        url:'http://localhost:3000/user/getCart'
    })
}

