import lf from 'localforage'

const store = lf.createInstance({ name: 'guest' })

const keys = {
    carLatLng: 'p2-car-lat-lng',
    yearOfProduction: 'p2-year-of-production',
    carSeriesAll: 'p2-car-series-all',
    engineType: 'p2-engine-type'
}
/**
 * 车辆经纬度
 */
const carLatLngStore = {
    get() {
        return store.getItem(keys.carLatLng)
    },
    set(value) {
        return store.setItem(keys.carLatLng, value)
    }
}
/**
 * 生产年份
 */
const yearOfProductionStore = {
    get() {
        return store.getItem(keys.yearOfProduction)
    },
    set(value) {
        return store.setItem(keys.yearOfProduction, value)
    }
}
/**
 * 全部车系
 */
const carSeriesAllStore = {
    get() {
        return store.getItem(keys.carSeriesAll)
    },
    set(value) {
        return store.setItem(keys.carSeriesAll, value)
    }
}
/**
 * 发动机型号
 */
const engineTypeStore = {
    get() {
        return store.getItem(keys.engineType)
    },
    set(value) {
        return store.setItem(keys.engineType, value)
    }
}

console.log('load file store/pages/page2.js')

export {
    carLatLngStore,
    yearOfProductionStore,
    carSeriesAllStore,
    engineTypeStore
}
