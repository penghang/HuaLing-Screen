import request from '@/utils/request'
/**
 * 经销商统计
 * @param {string} province - 省份
 */
export function getProvinceAgency(province) {
    return request({
        url: 'province/getAgency',
        method: 'get'
    })
}
/**
 * 获取省份车辆经纬度
 * @param {string} province - 省份
 */
export function getProvinceCarLatLng(province) {
    return request({
        url: 'province/getCarLatLng',
        method: 'get'
    })
}
/**
 * 生产年份
 * @param {string} province - 省份
 */
export function getProvinceYearOfProduction(province) {
    return request({
        url: 'province/getYearOfProduction',
        method: 'get'
    })
}
/**
 * 车系
 * @param {string} province - 省份
 */
export function getProvinceCarSeriesAll(province) {
    return request({
        url: 'province/getCarSeriesAll',
        method: 'get'
    })
}
/**
 * 发动机型号
 * @param {string} province - 省份
 */
export function getProvinceEngineType(province) {
    return request({
        url: 'province/getEngineType',
        method: 'get'
    })
}
/**
 * 车型
 * @param {string} province - 省份
 */
export function getProvinceCarType(province) {
    return request({
        url: 'province/getCarType',
        method: 'get'
    })
}

console.log('load file api/pages/page3.js')