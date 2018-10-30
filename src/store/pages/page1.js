import lf from 'localforage'

const store = lf.createInstance({ name: 'guest' })

const keys = {
    carNum: 'p1-car-num',
    timeActive: 'p1-time-active',
    agency: 'p1-agency',
    carSeries: 'p1-car-series',
    provinceCar: 'p1-province-car',
    mileage: 'p1-mileage'
}
/**
 * 车辆统计数
 */
const carNumStore = {
    get() {
        return store.getItem(keys.carNum)
    },
    set(value) {
        return store.setItem(keys.carNum, value)
    }
}
/**
 * 各小时在线数
 */
const timeActiveStore = {
    get() {
        return store.getItem(keys.timeActive)
    },
    set(value) {
        return store.setItem(keys.timeActive, value)
    }
}
/**
 * 经销商
 */
const agencyStore = {
    get() {
        return store.getItem(keys.agency)
    },
    set(value) {
        return store.setItem(keys.agency, value)
    }
}
/**
 * 车系
 */
const carSeriesStore = {
    get() {
        return store.getItem(keys.carSeries)
    },
    set(value) {
        return store.setItem(keys.carSeries, value)
    }
}
/**
 * 里程
 */
const provinceCarStore = {
    get() {
        return store.getItem(keys.provinceCar)
    },
    set(value) {
        return store.setItem(keys.provinceCar, value)
    }
}
const mileageStore = {
    get() {
        return store.getItem(keys.mileage)
    },
    set(value) {
        return store.setItem(keys.mileage, value)
    }
}

console.log('load file store/pages/page1.js')

export {
    carNumStore,
    timeActiveStore,
    agencyStore,
    carSeriesStore,
    provinceCarStore,
    mileageStore
}
