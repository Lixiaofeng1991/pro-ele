import axios from "axios";
import API from "../api";

/*获取轮播图和推荐广告数据；
参数：type不传或者为0 ==》请求轮播图数据
    type=1,请求推荐广告数据
*/
export function getBannerAndRecommedData(type){
    type= type || 0; 
    return new Promise((resolve,reject)=>{
        axios.get(API.BANNER_API,{
            params:{
                latitude:22.54286,
                longitude:114.059563,
                templates:["main_template","favourable_template","svip_template"],
                terminal:"h5"
            }

        })
        .then(res=>{
            // console.log("BANNER_API 请求成功")
            // console.log(res);
            resolve(res.data[type].entries)
        })
        .catch(error=>{
            console.log("BANNER_API 请求失败")
            console.log(error);
        })
    })
}