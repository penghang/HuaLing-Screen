import pageTpl from './index.html'

// import CarNum from './modules/carnum'
// import Agency from './modules/agency'
// import TimeActive from './modules/timeactive'
// import CarSeries from './modules/carseries'

import { getCarLatLng, getYearOfProduction, getCarSeriesAll, getEngineType } from '@/api'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()
// CarNum.init()
// Agency.init()
// TimeActive.init()
// CarSeries.init()
// ProvinceCar.init()
// Mileage.init()

// getCarLatLng().then(function (response) {
//     CarNum.update(response.data)
// })
// getYearOfProduction().then(function (response) {
//     Agency.update(response.data)
// })
// getCarSeriesAll().then(function (response) {
//     TimeActive.update(response.data)
// })
// getEngineType().then(function (response) {
//     CarSeries.update(response.data)
// })

console.log('load file modules/page4/index.js')

export default {}
