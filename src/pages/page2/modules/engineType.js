import echarts from 'echarts'
import { eConfig, color1 as color } from '../../config'
const { grid, xAxis, yAxis } = eConfig
let page, chart
const defaults = {
    grid,
    color,
    xAxis,
    yAxis,
    series: [
        {
            type: 'bar',
            barWidth: 50,
            data: [],
            itemStyle: {
                barBorderRadius: [3, 3, 0, 0]
            }
        }
    ]
}
const init = function () {
    page = document.getElementById('page2')
    chart = echarts.init(page.querySelector('.js-engine-type-chart'))
    chart.setOption(defaults);
}
const update = function (data) {
    const x = [], y = []
    data.forEach(row => {
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
}
console.log('load file modules/page2/modules/engineType.js')
export default { init, update }