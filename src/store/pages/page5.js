import lf from 'localforage'

const store = lf.createInstance({ name: 'guest' })

const keys = {
    carTypeMonthMileage: 'p5-car-type-month-mileage',
    drivingTimeFrequency: 'p5-driving-time-frequency'
}
/**
 * 月里程分布
 */
const carTypeMonthMileageStore = {
    get() {
        return store.getItem(keys.carTypeMonthMileage)
    },
    set(value) {
        return store.setItem(keys.carTypeMonthMileage, value)
    }
}
/**
 * 行驶时间频次分布
 */
const drivingTimeFrequencyStore = {
    get() {
        return store.getItem(keys.drivingTimeFrequency)
    },
    set(value) {
        return store.setItem(keys.drivingTimeFrequency, value)
    }
}

console.log('load file store/pages/page5.js')

export {
    carTypeMonthMileageStore,
    drivingTimeFrequencyStore
}
