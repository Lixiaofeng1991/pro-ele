/*
接口功能：餐厅列表数据
 
*/
const BUSINESS_API = '/restapi/shopping/v3/restaurants';


/*
接口功能：综合排序数据
*/
const ASIDE_API = '/restapi/shopping/v1/restaurants/outside_filter/attributes';
/*
接口功能：筛选数据
*/
const FILTER_API ='/restapi/shopping/v1/restaurants/filter-bar/attributes';

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

/*
接口功能：轮播图和推荐数据接口
接口参数：
    latitude:纬度
    longitude：经度
    templates：["main_template","favourable_template","svip_template"]
    terminal:"h5"
*/
const BANNER_API = '/restapi/shopping/openapi/entries';

/*
接口功能：搜索地址的下拉数据接口
接口参数：
    keyword:关键字
    offset：0
    limit：20
*/
const SEARCHADDRESS_API = "/restapi/bgs/poi/search_poi_nearby_alipay";

export default{
    BUSINESS_API,
    ASIDE_API,
    FILTER_API,
    HOT_SEARCH_API,
    POSITION_API,
    BANNER_API,
    SEARCHADDRESS_API
}

