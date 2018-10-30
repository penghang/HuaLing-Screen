import pageTpl from './index.html'

import {
    Day,
    Frequency
} from './modules'
import { 
    getDayAvgMileageAndTime, 
    getMileageFrequency 
} from '@/api'
import {
    dayAvgMileageAndTimeStore,
    mielageFrequencyStore
} from '@/store'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()
const modules = [
    Day,
    Frequency
]
const apis = [
    getDayAvgMileageAndTime, 
    getMileageFrequency
]
const stores = [
    dayAvgMileageAndTimeStore,
    mielageFrequencyStore
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
console.log('load file modules/page4/index.js')

export { resize }
