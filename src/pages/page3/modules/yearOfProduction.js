import echarts from 'echarts'
import { eConfig, lineColors } from '../../config'
const { toolbox, grid1: grid, xAxis, yAxis } = eConfig
let page, chart
const months = 12
const xData = []
for (let i = 1; i <= months; i++) {
    xData.push(`${i}月`)
}
const defaults = {
    toolbox,
    grid,
    legend: {
        textStyle: {
            color: '#c2d5d6'
        },
        data: [] 
    },
    xAxis: {
        ...xAxis,
        data: xData
    },
    yAxis,
    series: [{ type: 'line' }]
}
const init = function () {
    page = document.getElementById('page3')
    chart = echarts.init(page.querySelector('.js-year-of-production-chart'))
    chart.setOption(defaults);
}
const update = function (data) {
    const legend = []
    const series = []
    let i = 0
    for (let key in data) {
        legend.push(key)
        series.push({
            name: key,
            type: 'line',
            data: data[key],
            color: lineColors[i++]
        })
    }
    const option = {
        legend: {
            data: legend
        },
        series
    }
    chart.setOption(option)
}
console.log('load file modules/page3/modules/yearOfProduction.js')
export default { init, update }