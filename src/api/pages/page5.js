import request from '@/utils/request'
/**
 * 车型每月里程分布
 */
export function getCarTypeMonthMileage() {
    return request({
        url: 'CarData/GetCarTypeMonthMileage',
        method: 'get'
    })
}
/**
 * 行驶时间频次分布
 */
export function getDrivingTimeFrequency() {
    return request({
        url: 'CarData/GetDrivingTimeFrequency',
        method: 'get'
    })
}

console.log('load file api/pages/page5.js')
