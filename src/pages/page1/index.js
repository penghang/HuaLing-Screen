import pageTpl from './index.html'

import CarNum from './modules/carNum'
import Agency from './modules/agency'
import TimeActive from './modules/timeActive'
import CarSeries from './modules/carSeries'
import ProvinceCar from './modules/provinceCar'
import Mileage from './modules/mileage'

import { getCarNum, getAgency, getTimeActive, getCarSeries, getProvinceCar, getMileage } from '@/api'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()
CarNum.init()
Agency.init()
TimeActive.init()
CarSeries.init()
ProvinceCar.init()
Mileage.init()

getCarNum().then(function(response) {
    CarNum.update(response.data)
})
getAgency().then(function(response) {
    Agency.update(response.data)
})
getTimeActive().then(function(response) {
    TimeActive.update(response.data)
})
getCarSeries().then(function(response) {
    CarSeries.update(response.data)
})
getProvinceCar().then(function(response) {
    ProvinceCar.update(response.data)
})
getMileage().then(function(response) {
    Mileage.update(response.data)
})

console.log('load file modules/page1/index.js')

export default {}