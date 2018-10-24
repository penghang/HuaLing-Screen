import request from '@/utils/request'
/**
 * 获取日均行驶里程与时长统计
 */
export function getDayAvgMileageAndTime() {
    return request({
        url: 'getDayAvgMileageAndTime',
        method: 'get'
    })
}
/**
 * 获取行驶里程频次分布
 */
export function getMileageFrequency() {
    return request({
        url: 'getMileageFrequency',
        method: 'get'
    })
}

console.log('load file api/page4.js')
