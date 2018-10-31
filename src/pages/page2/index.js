import pageTpl from './index.html'

import {
    CarLatLng,
    YearOfProduction,
    CarType,
    EngineType
} from './modules'
import { 
    getCarLatLng, 
    getYearOfProduction, 
    getCarType, 
    getEngineType 
} from '@/api'
import { 
    carLatLngStore, 
    yearOfProductionStore, 
    carTypeStore, 
    engineTypeStore 
} from '@/store'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()
const modules = [
    CarLatLng,
    YearOfProduction,
    CarType,
    EngineType
]
const apis = [
    getCarLatLng,
    getYearOfProduction,
    getCarType,
    getEngineType 
]
const stores = [
    carLatLngStore,
    yearOfProductionStore,
    carTypeStore,
    engineTypeStore 
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
console.log('load file modules/page2/index.js')
export { resize }
