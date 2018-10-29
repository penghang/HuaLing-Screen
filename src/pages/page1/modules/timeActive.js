import echarts from 'echarts'
import { eConfig } from '../../config'
const { toolbox, grid1: grid, xAxis1: xAxis, yAxis1: yAxis } = eConfig
let page, chart
const defaults = {
    toolbox,
    grid,
    xAxis,
    yAxis,
    series: [{
        type: 'line',
        symbol: 'circle',
        showSymbol: false,
        lineStyle: {
            color: '#00d4f5'
        },
        itemStyle: {
            color: '#fff',
            borderColor: '#00d4f5'
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(2,201,255,1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(2,236,255,0)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        },
        data: []
    }]
}
const init = function () {
    page = document.getElementById('page1')
    chart = echarts.init(page.querySelector('.js-timeactive-chart'))
    chart.setOption(defaults)
}
const update = function(data) {
    const x = [], y = []
    let i = data.length - 1
    data.forEach(row => {
        x[i] = row.time
        y[i] = row.count
        i--
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
}
console.log('load file modules/page1/modules/timeactive.js')
export default { init, update }