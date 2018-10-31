import request from '@/utils/request'
/**
 * 经销商统计
 * @param {string} province - 省份
 */
export function getProvinceAgency(province) {
    return request({
        url: 'CarProvince/GetAgency',
        method: 'get',
        params: {
            PROVINCENAME: province
        }
    })
}
/**
 * 获取省份车辆经纬度
 * @param {string} province - 省份
 */
export function getProvinceCarLatLng(province) {
    return request({
        url: 'CarProvince/GetCarLatLng',
        method: 'get',
        params: {
            PROVINCENAME: province
        }
    })
}
/**
 * 生产年份
 * @param {string} province - 省份
 */
export function getProvinceYearOfProduction(province) {
    return request({
        url: 'CarProvince/GetYearOfProduction',
        method: 'get',
        params: {
            PROVINCENAME: province
        }
    })
}
/**
 * 车系
 * @param {string} province - 省份
 */
export function getProvinceCarSeries(province) {
    return request({
        url: 'CarProvince/GetCarSeries',
        method: 'get',
        params: {
            PROVINCENAME: province
        }
    })
}
/**
 * 发动机型号
 * @param {string} province - 省份
 */
export function getProvinceEngineType(province) {
    return request({
        url: 'CarProvince/GetEngineType',
        method: 'get',
        params: {
            PROVINCENAME: province
        }
    })
}
/**
 * 车型
 * @param {string} province - 省份
 */
export function getProvinceCarType(province) {
    return request({
        url: 'CarProvince/GetCarType',
        method: 'get',
        params: {
            PROVINCENAME: province
        }
    })
}

console.log('load file api/pages/page3.js')