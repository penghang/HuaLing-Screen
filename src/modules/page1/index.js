import CarNum from './modules/carnum'
import Agency from './modules/agency'
import { getCarNum, getAgency } from '@/api'

getCarNum().then(function(response) {
    CarNum.update(response.data)
})
getAgency().then(function(response) {
    Agency.update(response.data)
})