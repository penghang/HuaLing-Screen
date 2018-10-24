import echarts from 'echarts'
let page, chart
const months = 12
const xData = []
for (let i = 1; i <= months; i++) {
    xData.push(`${i}月`)
}
const defaults = {
    grid: {
        left: 50,
        right: 20,
        top: 20,
        bottom: 20
    },
    legend: { data: [] },
    xAxis: {
        type: 'category',
        axisTick: {
            inside: true
        },
        axisLabel: {
            color: '#7b7e85'
        },
        axisLine: {
            lineStyle: {
                color: "#133b43"
            }
        },
        data: xData
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#7b7e85'
        },
        axisLine: {
            lineStyle: {
                color: "#133b43"
            }
        },
        splitLine: {
            show: false
        }
    },
    series: [{ type: 'line' }]
}
const init = function () {
    page = document.getElementById('page3')
    chart = echarts.init(page.querySelector('.js-year-of-production-chart'))
    chart.setOption(defaults);
}
const update = function (data) {
    const legend = []
    const series = []
    for (let key in data) {
        legend.push(key)
        series.push({
            name: key,
            type: 'line',
            data: data[key]
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
console.log('load file modules/page3/modules/yearOfProduction.js')
export default { init, update }