import pageTpl from './index.html'

import CarLatLng from './modules/latLng'
import YearOfProduction from './modules/yearOfProduction'
import CarSeriesAll from './modules/carSeries'
import EngineType from './modules/engineType'

import { getCarLatLng, getYearOfProduction, getCarSeriesAll, getEngineType } from '@/api'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()
CarLatLng.init()
YearOfProduction.init()
CarSeriesAll.init()
EngineType.init()

getCarLatLng().then(function (response) {
    CarLatLng.update(response.data)
})
getYearOfProduction().then(function (response) {
    YearOfProduction.update(response.data)
})
getCarSeriesAll().then(function (response) {
    CarSeriesAll.update(response.data)
})
getEngineType().then(function (response) {
    EngineType.update(response.data)
})

console.log('load file modules/page2/index.js')

export default {}
