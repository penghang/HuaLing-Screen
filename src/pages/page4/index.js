import pageTpl from './index.html'

import {
    Day,
    // Frequency,
    Month
} from './modules'
import { 
    getDayAvgMileageAndTime, 
    getMileageFrequency 
} from '@/api'
import {
    dayAvgMileageAndTimeStore,
    carTypeMonthMileageStore
} from '@/store'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()
const modules = [
    Day,
    // Frequency,
    Month
]
const apis = [
    getDayAvgMileageAndTime, 
    getMileageFrequency
]
const stores = [
    dayAvgMileageAndTimeStore,
    carTypeMonthMileageStore
]
const initModules = () => {
    modules.forEach(m => {
        m.init()
    })
}

const loadCache = () => {
    stores.forEach((s, i) => {
        s.get().then(data => {
          //console.log(data)
            modules[i].update(data)
        })
    })
}

// const loadRemote = () => {
//     apis.forEach((api, i) => {
//         api().then(({ data }) => {
//             modules[i].update(data)
//             stores[i].set(data)
//         })
//     })
// }

initModules()
loadCache()
// loadRemote()

const resize = () => {
    modules.forEach(m => {
        m.resize()
    })
}
console.log('load file modules/page4/index.js')

export { resize }
