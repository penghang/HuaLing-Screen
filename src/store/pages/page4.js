import lf from 'localforage'

const store = lf.createInstance({ name: 'guest' })

const keys = {
    dayAvgMileageAndTime: 'p4-day-avg',
    mielageFrequency: 'p4-mileage-frequency'
}
/**
 * 日均行驶里程与时长
 */
const dayAvgMileageAndTimeStore = {
    get() {
        return store.getItem(keys.dayAvgMileageAndTime)
    },
    set(value) {
        return store.setItem(keys.dayAvgMileageAndTime, value)
    }
}
/**
 * 行驶里程频次分布
 */
const mielageFrequencyStore = {
    get() {
        return store.getItem(keys.mielageFrequency)
    },
    set(value) {
        return store.setItem(keys.mielageFrequency, value)
    }
}

console.log('load file store/pages/page4.js')

export {
    dayAvgMileageAndTimeStore,
    mielageFrequencyStore
}
