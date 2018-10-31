import request from '@/utils/request'

/**
 * 车辆经纬度
 */
export function getCarLatLng() {
    return request({
        url: 'CarData/GetCarLatLng',
        method: 'get'
    })
}
/**
 * 生产年份
 */
export function getYearOfProduction() {
    return request({
        url: 'CarData/GetYearOfProduction',
        method: 'get'
    })
}
/**
 * 全部车型
 */
export function getCarType() {
    return request({
        url: 'CarData/GetCarType',
        method: 'get'
    })
}
/**
 * 发动机型号
 */
export function getEngineType() {
    return request({
        url: 'CarData/GetEngineType',
        method: 'get'
    })
}

console.log('load file api/pages/page2.js')