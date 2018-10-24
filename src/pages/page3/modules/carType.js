import echarts from 'echarts'
let page, chart
const defaults = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: []
    },
    series: [
        {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
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
    const legendData = []
    const seriesData = []
    data.forEach(row => {
        legendData.push(row)
        seriesData.push({
            name: row.name,
            value: row.num
        })
    })
    const option = {
        legend: {
            data: legendData
        },
        series: [{
            data: seriesData
        }]
    }
    chart.setOption(option)
}
console.log('load file modules/page3/modules/carType.js')
export default { init, update }
