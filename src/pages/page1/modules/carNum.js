import { formatNumber } from '@/utils/tool'
let page, doms
const init = function () {
    page = document.getElementById('page1')
    doms = {
        total: page.querySelector('.js-total'),
        online: page.querySelector('.js-online'),
        offline: page.querySelector('.js-offline'),
        activePer: page.querySelector('.js-active-per')
    }
}
const update = function(data) {
    ['total', 'online', 'offline'].forEach(key => {
        doms[key].innerHTML = formatNumber(data[key])
    })
    doms.activePer.innerHTML = Math.round(data.active / data.total * 100)
}
console.log('load file modules/page1/modules/carnum.js')
export default { init, update }
