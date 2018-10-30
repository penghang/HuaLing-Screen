import pageTpl from './index.html'

import { currentProvince } from '../config'

import {
    Agency,
    CarSeries,
    CarType,
    EngineType,
    LatLng,
    YearOfProduction
} from './modules'
import { 
    getProvinceAgency, 
    getProvinceCarSeriesAll, 
    getProvinceCarType, 
    getProvinceEngineType,
    getProvinceCarLatLng,
    getProvinceYearOfProduction
} from '@/api'
import {
    provinceAgencyStore,
    provinceCarLatLngStore,
    provinceYearOfProductionStore,
    provinceCarSeriesAllStore,
    provinceEngineTypeStore,
    provinceCarTypeStore
} from '@/store'
let lastProvince = currentProvince
const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()
const modules = [
    Agency,
    CarSeries,
    CarType,
    EngineType,
    LatLng,
    YearOfProduction
]
const apis = [
    getProvinceAgency,
    getProvinceCarSeriesAll,
    getProvinceCarType,
    getProvinceEngineType,
    getProvinceCarLatLng,
    getProvinceYearOfProduction
]
const stores = [
    provinceAgencyStore,
    provinceCarLatLngStore,
    provinceYearOfProductionStore,
    provinceCarSeriesAllStore,
    provinceEngineTypeStore,
    provinceCarTypeStore
]
const initModules = () => {
    modules.forEach(m => {
        m.init()
    })
}

const loadCache = () => {
    stores.forEach((s, i) => {
        s.get(currentProvince).then(data => {
            data && modules[i].update(data)
        })
    })
}

const loadRemote = () => {
    // console.log(lastProvince, currentProvince)
    apis.forEach((api, i) => {
        api().then(({ data }) => {
            modules[i].update(data)
            stores[i].set(currentProvince, data)
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
const active = () => {
    if (lastProvince !== currentProvince) {
        lastProvince = currentProvince
        loadRemote()
    }
}
console.log('load file modules/page3/index.js')
export { resize, active }
