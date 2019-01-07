import echarts from 'echarts'
import { eConfig, barColors } from '../../config'
import {data1} from '../../../mockdata/page4data'
const { toolbox,tooltip ,grid2: grid, xAxis2: xAxis, yAxis2: yAxis } = eConfig
const { type, axisTick, axisLabel, axisLine } = yAxis
const colorLength = barColors.length
let page, chart
const defaults = {
    toolbox,
    // tooltip,
    grid,
    xAxis,
    tooltip:{
      formatter:function(params){
        if(params.componentSubType==='line'){
          return `${params.name}:${params.value}H`
        }
        if(params.componentSubType==='bar'){
          return `${params.name}:${params.value}km`
        }
      }
    },
    yAxis: [
        {
            ...yAxis,
            name: '里程 (公里)',
            nameTextStyle: {
                color: '#bccecf'
            }
        },
        {
            type, 
            axisTick, 
            axisLabel, 
            axisLine,
            splitLine: {
                show: false
            },
            name: '运行时长 (H)',
            nameTextStyle: {
                color: '#bccecf'
            }
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
const update = function () {
  // console.log(data1)
    const xAxisData = []
    const mileageData = []
    const timeData = []
    data1.forEach(({name, mileage, time}, i) => {
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