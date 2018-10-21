import { formatNumber } from '@/utils/tool'
const page = document.querySelector('#page1')
const doms = {
    total: page.querySelector('.js-total'),
    online: page.querySelector('.js-online'),
    offline: page.querySelector('.js-offline'),
    activePer: page.querySelector('.js-active-per')
}
const update = function(data) {
    ['total', 'online', 'offline'].forEach(function (key) {
        doms[key].innerHTML = formatNumber(data[key]);
    })
    doms.activePer.innerHTML = Math.round(data.active / data.total * 100)
}
export default { update }
