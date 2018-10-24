import pageTpl from './index.html'

import Month from './modules/month'
import Frequency from './modules/frequency'

import { getCarTypeMonthMileage, getDrivingTimeFrequency } from '@/api'

const init = function () {
    document.body.insertAdjacentHTML("beforeend", pageTpl)
}
init()

Month.init()
Frequency.init()

getCarTypeMonthMileage().then(function (response) {
    Month.update(response.data)
})
getDrivingTimeFrequency().then(function (response) {
    Frequency.update(response.data)
})

console.log('load file modules/page5/index.js')

export default {}
