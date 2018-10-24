import echarts from 'echarts'
let page, chart

const defaults = {
    grid: {
        left: 50,
        right: 20,
        top: 20,
        bottom: 20
    },
    legend: {
        data: []
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: [
        {
            type: 'value',
            name: '频次 (次)'
        },
        {
            type: 'value',
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
    value.forEach((row, i) => {
        xAxisData.push(row.key)
        series.push({
            name: names[i],
            type: 'bar',
            data: row.count
        })
        series.push({
            name: names[i],
            type: 'line',
            yAxisIndex: 1,
            data: row.per
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