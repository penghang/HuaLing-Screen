import echarts from 'echarts'
import { eConfig, barColors } from '../../config'
const { toolbox, grid1: grid, xAxis, yAxis } = eConfig
let page, chart
const colorLength = barColors.length
const defaults = {
    toolbox,
    grid,
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
    page = document.getElementById('page3')
    chart = echarts.init(page.querySelector('.js-cartype-chart'))
    chart.setOption(defaults)
}
const update = function (data) {
    const x = [], y = []
    let i = 0
    data.forEach(({ name, num }) => {
        x.push(name)
        y.push({
            value: num,
            itemStyle: {
                color: barColors[(i++) % colorLength]
            }
        })
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

console.log('load file modules/page3/modules/carType.js')
export default { init, update }
