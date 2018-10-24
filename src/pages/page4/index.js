import pageTpl from './index.html'

import Day from './modules/day'
import Frequency from './modules/frequency'

import { getDayAvgMileageAndTime, getMileageFrequency } from '@/api'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()

Day.init()
Frequency.init()

getDayAvgMileageAndTime().then(function (response) {
    Day.update(response.data)
})
getMileageFrequency().then(function (response) {
    Frequency.update(response.data)
})

console.log('load file modules/page4/index.js')

export default {}
