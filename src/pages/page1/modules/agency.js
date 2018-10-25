import echarts from 'echarts'
import { eConfig, color2 as color } from '../../config'
const { grid1: grid, xAxis1: xAxis, yAxis1: yAxis } = eConfig
let page, doms, chart
const defaults = {
    grid,
    color,
    xAxis,
    yAxis,
    series: [
        {
            type: 'bar',
            barWidth: '60%',
            data: [],
            itemStyle: {
                barBorderRadius: [3, 3, 0, 0]
            }
        }
    ]
}
const init = function () {
    page = document.querySelector('#page1')
    doms = {
        num: page.querySelector('.js-agency-num'),
        chart: page.querySelector('.js-agency-chart')
    }
    chart = echarts.init(doms.chart)
    chart.setOption(defaults)
}
const update = function (data) {
    const x = [], y = []
    data.list.forEach(row => {
        x.push(row.name)
        y.push(row.num)
    })
    const option = {
        xAxis: {
            data: x
        },
        series: [{
            data: y
        }]
    }
    chart.setOption(option)
    doms.num.innerHTML = data.total
}
console.log('load file modules/page1/modules/agency.js')
export default { init, update }
