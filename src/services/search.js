import axios from "axios";

import API from "@/api";

//获取热搜数据
export function getHotSearchData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.HOT_SEARCH_API,{
            params:{
                latitude:22.625871,
                longitude:113.83794
            }
        })
        .then(res=>{
            // console.log("请求成功");
            // console.log(res)
            resolve(res.data)
        })
        .catch(error=>{
            console.log("请求失败");
            console.log(error)
        })
    })
}
