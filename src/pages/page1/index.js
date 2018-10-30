import pageTpl from './index.html'

import {
    CarNum,
    Agency,
    TimeActive,
    CarSeries,
    ProvinceCar,
    Mileage
} from './modules'
import { 
    getCarNum, 
    getAgency, 
    getTimeActive, 
    getCarSeries, 
    getProvinceCar, 
    getMileage 
} from '@/api'
import { 
    carNumStore, 
    agencyStore, 
    timeActiveStore, 
    carSeriesStore, 
    provinceCarStore, 
    mileageStore 
} from '@/store'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()
const modules = [
    CarNum,
    Agency,
    TimeActive,
    CarSeries,
    ProvinceCar,
    Mileage
]
const apis = [
    getCarNum,
    getAgency,
    getTimeActive,
    getCarSeries,
    getProvinceCar,
    getMileage 
]
const stores = [
    carNumStore,
    agencyStore,
    timeActiveStore,
    carSeriesStore,
    provinceCarStore,
    mileageStore
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
console.log('load file modules/page1/index.js')
export { resize }