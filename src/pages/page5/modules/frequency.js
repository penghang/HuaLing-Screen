import echarts from 'echarts'
import { eConfig, mixColors } from '../../config'
const { grid, xAxis2: xAxis, yAxis2: yAxis } = eConfig
const { type, axisTick, axisLabel, axisLine } = yAxis
let page, chart
const colorLength = mixColors.length
const defaults = {
    grid,
    legend: {
        textStyle: {
            color: '#c2d5d6'
        },
        data: []
    },
    xAxis,
    yAxis: [
        {
            ...yAxis,
            name: '频次 (次)'
        },
        {
            type,
            axisTick,
            axisLabel,
            axisLine,
            splitLine: {
                show: false
            },
            name: '百分比 (%)'
        }
    ],
    series: []
}
const init = function () {
    page = document.getElementById('page5')
    chart = echarts.init(page.querySelector('.js-frequency-chart'))
    chart.setOption(defaults);
}
const update = function ({ names, value }) {
    const xAxisData = []
    const series = []
    value.forEach(({key, count, per}, i) => {
        xAxisData.push(key)
        series.push({
            name: names[i],
            type: 'bar',
            data: count,
            barWidth: 5,
            itemStyle: {
                color: mixColors[i % colorLength]
            }
        })
        series.push({
            name: names[i],
            type: 'line',
            yAxisIndex: 1,
            data: per,
            lineStyle: {
                color: mixColors[i % colorLength]
            }
        })
    })
    const option = {
        legend: {
            data: names
        },
        xAxis: [{
            data: xAxisData
        }],
        series
    }
    chart.setOption(option)
}
console.log('load file modules/page5/modules/frequency.js')
export default { init, update }