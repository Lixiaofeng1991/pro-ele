import axios from "axios";
import API from "@/api";

//获取经纬度
export function getCurrentPosition(){
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(
            function(position){
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                resolve({
                    latitude,
                    longitude
                })
            },
            function(error){
                console.log("获取位置失败");
                console.log(error);
                reject(error)
            },
            {
                timeout:1000,
            }
        )
    })
}

//根据经纬度获取具体地址
export function getAddressData(params){
    return new Promise((resolve,reject)=>{
        axios.get(API.POSITION_API,{
            params:{
                latitude:params.latitude,
                longitude:params.longitude
            }
        })
        .then(result=>{
            resolve(result.data);
        })
        .catch(error=>{
            console.log("请求失败");
            console.log(error);
        }) 
    })
}

export function getSearchAddress(params){
    params.offset = 0;
    params.limit = 20;
    return new Promise((resolve,reject)=>{
        axios.get(API.SEARCHADDRESS_API,{
            params
        })
        .then(result=>{
            console.log("getSearchAddress 请求成功")
            console.log(result);
            resolve(result.data);
        })
        .catch(error=>{
            console.log("getSearchAddress 请求失败")
            console.log(error)
        })
    })
}
