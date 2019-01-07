import echarts from 'echarts'
import { eConfig, lineColors, mixColors } from '../../config'
import {data2} from '../../../mockdata/page4data'
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
    tooltip:{
      formatter:function(params){
        return `${params.name}:${params.value}km`
      }
    },
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
    page = document.getElementById('page4')
    chart = echarts.init(page.querySelector('.js-month-chart'))
    chart.setOption(defaults);
}
const update = function (data) {
    const legend = []
    const series = []
    let i = 0
    for (let key in data2) {
        legend.push(key)
        series.push({
            name: key,
            type: 'line',
            color: lineColors[i++],
            data: data2[key].map(v => v/10000)
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
console.log('load file modules/page4/modules/month.js')
export default { init, update }