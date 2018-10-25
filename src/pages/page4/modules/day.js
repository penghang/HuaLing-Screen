import echarts from 'echarts'
import { eConfig, barColors } from '../../config'
const { grid, xAxis2: xAxis, yAxis2: yAxis } = eConfig
const { type, axisTick, axisLabel, axisLine } = yAxis
const colorLength = barColors.length
let page, chart
const defaults = {
    grid,
    xAxis,
    yAxis: [
        {
            ...yAxis,
            name: '里程 (公里)'
        },
        {
            type, 
            axisTick, 
            axisLabel, 
            axisLine,
            splitLine: {
                show: false
            },
            name: '运行时长 (H)'
        }
    ],
    series: [
        {
            name: '里程',
            type: 'bar',
            barWidth: 50,
            data: []
        },
        {
            name: '运行时长',
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
                color: '#f25a1f'
            },
            data: []
        }
    ]
}
const init = function () {
    page = document.getElementById('page4')
    chart = echarts.init(page.querySelector('.js-day-chart'))
    chart.setOption(defaults);
}
const update = function (data) {
    const xAxisData = []
    const mileageData = []
    const timeData = []
    data.forEach(({name, mileage, time}, i) => {
        xAxisData.push(name)
        mileageData.push({
            value: mileage,
            itemStyle: {
                color: barColors[i % colorLength]
            }
        })
        timeData.push(time)
    })
    const option = {
        xAxis: [{
            data: xAxisData
        }],
        series: [
            { data: mileageData },
            { data: timeData }
        ]
    }
    chart.setOption(option)
}
console.log('load file modules/page4/modules/day.js')
export default { init, update }