import echarts from 'echarts'
import { eConfig, lineColors, mixColors } from '../../config'
const { toolbox, grid2: grid, xAxis2: xAxis, yAxis2: yAxis } = eConfig
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
    yAxis: [
        {
            ...yAxis,
            name: '里程 (公里)'
        }
    ],
    series: []
}
const init = function () {
    page = document.getElementById('page5')
    chart = echarts.init(page.querySelector('.js-month-chart'))
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
            color: lineColors[i++],
            data: data[key]
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
console.log('load file modules/page5/modules/month.js')
export default { init, update }