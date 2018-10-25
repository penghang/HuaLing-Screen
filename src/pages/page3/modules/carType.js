import echarts from 'echarts'
let page, chart
const colors = ['#d4a731', '#246ae4', '#976cd3', '#3c42a4', '#25cc98']
const defaults = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 20,
        y: 'center',
        textStyle: {
            color: '#b5c6c8'
        },
        data: []
    },
    series: [
        {
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
    data.forEach(({name, num: value}, i) => {
        legendData.push(name)
        seriesData.push({
            name,
            value,
            itemStyle: {
                color: colors[i]
            }
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
