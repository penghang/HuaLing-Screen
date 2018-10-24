import echarts from 'echarts'
let page, chart
const defaults = {
    grid: {
        left: 50,
        right: 20,
        top: 20,
        bottom: 20
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: [
        {
            type: 'value',
            name: '里程 (公里)'
        },
        {
            type: 'value',
            name: '运行时长 (H)'
        }
    ],
    series: [
        {
            name: '里程',
            type: 'bar',
            data: []
        },
        {
            name: '运行时长',
            type: 'line',
            yAxisIndex: 1,
            data: []
        }
    ]
}
const init = function () {
    page = document.getElementById('page4')
    chart = echarts.init(page.querySelector('.js-day-chart'))
    chart.setOption(defaults);
}
const update = function (data) {
    const xAxisData = []
    const mileageData = []
    const timeData = []
    data.forEach(row => {
        xAxisData.push(row.name)
        mileageData.push(row.mileage)
        timeData.push(row.time)
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