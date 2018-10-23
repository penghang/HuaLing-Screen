import { formatNumber } from '@/utils/tool'
const EARTH_C = 40076
let page, doms
const init = function () {
    page = document.querySelector('#page1')
    doms = {
        totalMileage: page.querySelector('.js-total-mileage'),
        oil: page.querySelector('.js-oil'),
        runtime: page.querySelector('.js-runtime'),
        earth: page.querySelector('.js-earth')
    }
}
const update = function (data) {
    const html = Math.round(data.mileage).toString().split('').map(n => `<i>${n}</i>`).join('')
    doms.totalMileage.innerHTML = html
    doms.oil.innerHTML = formatNumber(data.oil)
    doms.earth.innerHTML = formatNumber(data.mileage / EARTH_C)
    doms.runtime.innerHTML = formatNumber(data.runtime)
}
console.log('load file modules/page1/modules/mileage.js')
export default { init, update }
