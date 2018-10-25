import echarts from 'echarts'
import { eConfig, barColors } from '../../config'
const { grid, xAxis, yAxis } = eConfig
let page, chart
const colorLength = barColors.length
const defaults = {
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
    page = document.getElementById('page2')
    chart = echarts.init(page.querySelector('.js-car-series-all-chart'))
    chart.setOption(defaults);
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
console.log('load file modules/page2/modules/carSeries.js')
export default { init, update }