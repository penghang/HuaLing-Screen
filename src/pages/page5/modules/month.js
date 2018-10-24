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
    xAxis: {
        type: 'category',
        data: xData
    },
    yAxis: [
        {
            type: 'value',
            name: '里程 (公里)'
        }
    ],
    series: []
}
const init = function () {
    page = document.getElementById('page5')
    chart = echarts.init(page.querySelector('.js-month-chart'))
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
console.log('load file modules/page5/modules/month.js')
export default { init, update }