import echarts from 'echarts'
import { eConfig, color1 as color } from '../../config'
const { toolbox, grid, xAxis, yAxis } = eConfig
let page, chart
const defaults = {
    toolbox,
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
    page = document.getElementById('page3')
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
console.log('load file modules/page3/modules/engineType.js')
export default { init, update }