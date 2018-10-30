import lf from 'localforage'

const store = lf.createInstance({ name: 'guest' })

const keys = {
    provinceAgency: 'p3-province-agency',
    provinceCarLatLng: 'p3-province-car-lat-lng',
    provinceYearOfProduction: 'p3-province-year-of-production',
    provinceCarSeriesAll: 'p3-province-car-series-all',
    provinceEngineType: 'p3-province-engine-type',
    provinceCarType: 'p3-province-car-type'
}
/**
 * 省经销商
 */
const provinceAgencyStore = {
    get(name) {
        return store.getItem(`${keys.provinceAgency}-${name}`)
    },
    set(name, value) {
        return store.setItem(`${keys.provinceAgency}-${name}`, value)
    }
}
/**
 * 省经纬度数据
 */
const provinceCarLatLngStore = {
    get(name) {
        return store.getItem(`${keys.provinceCarLatLng}-${name}`)
    },
    set(name, value) {
        return store.setItem(`${keys.provinceCarLatLng}-${name}`, value)
    }
}
/**
 * 省生产年份
 */
const provinceYearOfProductionStore = {
    get(name) {
        return store.getItem(`${keys.provinceYearOfProduction}-${name}`)
    },
    set(name, value) {
        return store.setItem(`${keys.provinceYearOfProduction}-${name}`, value)
    }
}
/**
 * 省车系
 */
const provinceCarSeriesAllStore = {
    get(name) {
        return store.getItem(`${keys.provinceCarSeriesAll}-${name}`)
    },
    set(name, value) {
        return store.setItem(`${keys.provinceCarSeriesAll}-${name}`, value)
    }
}
/**
 * 省发动机型号
 */
const provinceEngineTypeStore = {
    get(name) {
        return store.getItem(`${keys.provinceEngineType}-${name}`)
    },
    set(name, value) {
        return store.setItem(`${keys.provinceEngineType}-${name}`, value)
    }
}
/**
 * 省车型
 */
const provinceCarTypeStore = {
    get(name) {
        return store.getItem(`${keys.provinceCarType}-${name}`)
    },
    set(name, value) {
        return store.setItem(`${keys.provinceCarType}-${name}`, value)
    }
}

console.log('load file store/pages/page3.js')

export {
    provinceAgencyStore,
    provinceCarLatLngStore,
    provinceYearOfProductionStore,
    provinceCarSeriesAllStore,
    provinceEngineTypeStore,
    provinceCarTypeStore
}
