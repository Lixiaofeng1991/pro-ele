/*
接口功能：热门搜索数据接口
接口参数：
    latitude:纬度
    longitude：经度
*/
const HOT_SEARCH_API = '/restapi/shopping/v3/hot_search_words';

/*
接口功能：定位数据接口
接口参数：
    latitude:纬度
    longitude：经度
*/
const POSITION_API = '/restapi/bgs/poi/reverse_geo_coding';

export default {
    HOT_SEARCH_API,
    POSITION_API
}
