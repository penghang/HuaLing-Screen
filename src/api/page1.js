import request from '@/utils/request'

/**
 * 车辆统计数
 */
export function getCarNum() {
    return request({
        url: 'getCarNum',
        method: 'get'
    })
}
/**
 * 各小时在线数
 */
export function getTimeActive() {
    return request({
        url: 'getTimeActive',
        method: 'get'
    })
}
/**
 * 经销商统计
 */
export function getAgency() {
    return request({
        url: 'getAgency',
        method: 'get'
    })
}
/**
 * 车系
 */
export function getCarSeries() {
    return request({
        url: 'getCarSeries',
        method: 'get'
    })
}
/**
 * 省份车辆统计
 */
export function getProvinceCar() {
    return request({
        url: 'getProvinceCar',
        method: 'get'
    })
}
/**
 * 获取里程数据
 */
export function getMileage() {
    return request({
        url: 'getMileage',
        method: 'get'
    })
}

console.log('load file api/page1.js')