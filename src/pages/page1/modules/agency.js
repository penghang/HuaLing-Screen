import echarts from 'echarts'
import { eConfig, color2 as color } from '../../config'
const { toolbox, grid1: grid, xAxis1: xAxis, yAxis1: yAxis } = eConfig
let page, doms, chart
const defaults = {
    toolbox,
    grid,
    color,
    xAxis,
    yAxis,
    series: [
        {
            type: 'bar',
            barWidth: '40%',
            data: [],
            itemStyle: {
                barBorderRadius: [3, 3, 0, 0]
            }
        }
    ]
}
const init = () => {
    page = document.querySelector('#page1')
    doms = {
        num: page.querySelector('.js-agency-num'),
        chart: page.querySelector('.js-agency-chart')
    }
    chart = echarts.init(doms.chart)
    chart.setOption(defaults)
}
const update = data => {
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
const resize = () => {
    chart.resize()
}
console.log('load file modules/page1/modules/agency.js')
export default { init, update, resize }
