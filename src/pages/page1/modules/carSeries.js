import echarts from 'echarts'
import { eConfig, color2 as color } from '../../config'
const { toolbox,tooltip ,grid1: grid, xAxis1: xAxis, yAxis1: yAxis } = eConfig
let page, chart
const defaults = {
    toolbox,
    tooltip,
    grid: {
      left: 80,
      rigth: 20,
      top: 20,
      bottom: 35
    },
    color,
    xAxis,
    yAxis,
    series: [
        {
            type: 'bar',
            barWidth: '40%',
            data: [],
            itemStyle: {
                barBorderRadius: [3, 3, 0, 0]
            }
        }
    ]
}
const init = function() {
    page = document.getElementById('page1')
    chart = echarts.init(page.querySelector('.js-carseries-chart'))
    chart.setOption(defaults)
}
const update = function(data) {
    const x = [], y = []
    data.forEach(row => {
        x.push(row.name)
        y.push(row.num)
    })
    const option = {
        xAxis: {
            data: x,
            axisLabel:{
              rotate:30
            }
        },
        series: [{
            data: y
        }]
    }
    chart.setOption(option);
}
console.log('load file modules/page1/modules/carseries.js')
export default { init, update }