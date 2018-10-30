import pageTpl from './index.html'

import {
    Month,
    Frequency
} from './modules'
import { 
    getCarTypeMonthMileage, 
    getDrivingTimeFrequency 
} from '@/api'
import {
    carTypeMonthMileageStore,
    drivingTimeFrequencyStore
} from '@/store'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()
const modules = [
    Month,
    Frequency
]
const apis = [
    getCarTypeMonthMileage,
    getDrivingTimeFrequency 
]
const stores = [
    carTypeMonthMileageStore,
    drivingTimeFrequencyStore
]
const initModules = () => {
    modules.forEach(m => {
        m.init()
    })
}

const loadCache = () => {
    stores.forEach((s, i) => {
        s.get().then(data => {
            data && modules[i].update(data)
        })
    })
}

const loadRemote = () => {
    apis.forEach((api, i) => {
        api().then(({ data }) => {
            modules[i].update(data)
            stores[i].set(data)
        })
    })
}

initModules()
loadCache()
loadRemote()

const resize = () => {
    modules.forEach(m => {
        m.resize()
    })
}
console.log('load file modules/page5/index.js')

export { resize }
