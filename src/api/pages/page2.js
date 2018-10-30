import request from '@/utils/request'

/**
 * 车辆经纬度
 */
export function getCarLatLng() {
    return request({
        url: 'getCarLatLng',
        method: 'get'
    })
}
/**
 * 生产年份
 */
export function getYearOfProduction() {
    return request({
        url: 'getYearOfProduction',
        method: 'get'
    })
}
/**
 * 全部车系
 */
export function getCarSeriesAll() {
    return request({
        url: 'getCarSeriesAll',
        method: 'get'
    })
}
/**
 * 发动机型号
 */
export function getEngineType() {
    return request({
        url: 'getEngineType',
        method: 'get'
    })
}

console.log('load file api/pages/page2.js')