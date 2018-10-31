import lf from 'localforage'

const store = lf.createInstance({ name: 'guest' })

const keys = {
    carLatLng: 'p2-car-lat-lng',
    yearOfProduction: 'p2-year-of-production',
    carType: 'p2-car-type',
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
const carTypeStore = {
    get() {
        return store.getItem(keys.carType)
    },
    set(value) {
        return store.setItem(keys.carType, value)
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
    carTypeStore,
    engineTypeStore
}
