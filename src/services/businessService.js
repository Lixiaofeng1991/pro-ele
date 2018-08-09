import axios from 'axios'
import API from '../api'
// 商家列表
export function getBusinessDate(){
    return new Promise((resolve, reject)=>{
        axios.get(API.BUSINESS_API,{
            params:{
                latitude:22.625428,
                longitude:113.837942,
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
            // console.log(response)
            let data = response.data.items
            // return{
            //     name:items.name
            // }
            resolve(data);
        })
        .catch(error=>{
            console.log('失败')
        })
    })
    
}


// 综合排序
export function getAsideDate(){
    return new Promise((resolve,reject)=>{
        axios.get(API.ASIDE_API,{
            params:{
                latitude:22.626024,
                longitude:113.837884,
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
export function getFilterDate(){
    return new Promise((resolve,reject)=>{
        axios.get(API.FILTER_API,{
            params:{
                latitude:22.626024,
                longitude:113.837884,
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