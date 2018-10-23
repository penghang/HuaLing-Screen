import pageTpl from './index.html'

import Agency from './modules/agence'
import CarSeries from './modules/carSeries'
import CarType from './modules/carType'
import EngineType from './modules/engineType'
import LatLng from './modules/latLng'
import YearOfProduction from './modules/yearOfProduction'

import { 
    getProvinceAgency, 
    getProvinceCarSeriesAll, 
    getProvinceCarType, 
    getProvinceEngineType,
    getProvinceLatLng,
    getProvinceYearOfProduction
} from '@/api'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()
Agency.init()
CarSeries.init()
CarType.init()
EngineType.init()
LatLng.init()
YearOfProduction.init()

getProvinceAgency().then(function (response) {
    Agency.update(response.data)
})
getProvinceCarSeriesAll().then(function (response) {
    CarSeries.update(response.data)
})
getProvinceCarType().then(function (response) {
    CarType.update(response.data)
})
getProvinceEngineType().then(function (response) {
    EngineType.update(response.data)
})
getProvinceLatLng().then(function (response) {
    LatLng.update(response.data)
})
getProvinceYearOfProduction().then(function (response) {
    YearOfProduction.update(response.data)
})

console.log('load file modules/page3/index.js')

export default {}
