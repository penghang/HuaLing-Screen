import request from '@/utils/request'

/**
 * 车辆统计数
 */
export function getCarNum() {
    return request({
        url: 'CarData/GetCarNum',
        method: 'get'
    })
}
/**
 * 各小时在线数
 */
export function getTimeActive() {
    return request({
        url: 'CarData/GetTimeActive',
        method: 'get'
    })
}
/**
 * 经销商统计
 */
export function getAgency() {
    return request({
        url: 'CarData/GetAgency',
        method: 'get'
    })
}
/**
 * 车系
 */
export function getCarSeries() {
    return request({
        url: 'CarData/GetCarSeries',
        method: 'get'
    })
}
/**
 * 省份车辆统计
 */
export function getProvinceCar() {
    return request({
        url: 'CarData/GetProvinceCar',
        method: 'get'
    })
}
/**
 * 获取里程数据
 */
export function getMileage() {
    return request({
        url: 'CarData/GetMileage',
        method: 'get'
    })
}

console.log('load file api/pages/page1.js')