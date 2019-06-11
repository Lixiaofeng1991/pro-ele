import axios from 'axios'
import API from '../api'
// 商家列表
export function getBusinessDate(params){
    return new Promise((resolve, reject)=>{
        axios.get(API.BUSINESS_API,{
            params:{
                latitude:params.latitude,
                longitude:params.longitude,
                offset:0,
                limit:8,
                extras:[
                    'activities',
                    'tags'
                ],
                extra_filters:'home',
                order_by:0,
                rank_id:'',
                terminal:'h5'
            }
           
        })
        .then(response=>{
            let data = response.data.items
            resolve(data);
        })
        .catch(error=>{
            console.log('失败')
        })
    })
    
}


// 综合排序
export function getAsideDate(params){
    return new Promise((resolve,reject)=>{
        axios.get(API.ASIDE_API,{
            params:{
                latitude:params.latitude,
                longitude:params.longitude,
                terminal:'h5'
            }
           
        })
        .then(response=>{
            // console.log(response)
            let data = response.data;
            resolve(data);
        })
        .catch(error=>{
            console.log("数据请求失败")
        })
    })
}
//筛选数据
export function getFilterDate(params){
    return new Promise((resolve,reject)=>{
        axios.get(API.FILTER_API,{
            params:{
                latitude:params.latitude,
                longitude:params.longitude,
                terminal:'h5'
            }
           
        })
        .then(response=>{
            // console.log(response)
            let data = response.data;
            resolve(data);
        })
        .catch(error=>{
            console.log("数据请求失败")
        })
    })
}