import axios from "axios";
import API from "@/api"

//获取经纬度
const p = new Promise((resolve,reject)=>{
    
})


// 获取位置信息
// export function getAddressData(){
//     return new Promise((resolve,reject)=>{
//         axios.get(API.POSITION_API,{
//             params:{
//                 latitude:22.625871,
//                 longitude:113.83794
//             }
//         })
//         .then(res=>{
//             // console.log("请求成功");
//             console.log(res);
//             resolve(res.data.name);
//         })
//         .catch(error=>{
//             console.log("请求失败");
//             console.log(error)
//         })
//     })
// }
export function getAddressData(){
    return new Promise((resolve,reject)=>{
        
        navigator.geolocation.getCurrentPosition(
            function(position){
                console.log(11)
                let latitude=position.coords.latitude;
                let longitude=position.coords.longitude;
                axios.get(API.POSITION_API,{
                    params:{
                        latitude: latitude,
                        longitude:longitude
                    }
                })
                .then(res=>{
                    // console.log("请求成功");
                    console.log(res);
                    resolve(res.data.name);
                })
                .catch(error=>{
                    console.log("请求失败");
                    console.log(error)
                })
            },
            function(error){
                console.log("定位失败");
                console.log(error);
                axios.get(API.POSITION_API,{
                    params:{
                        latitude: 22.625871,
                        longitude:113.83794
                    }
                })
                .then(res=>{
                    // console.log("请求成功");
                    console.log(res);
                    resolve(res.data.name);
                })
                .catch(error=>{
                    console.log("请求失败");
                    console.log(error)
                })
            }
        )
    })
}