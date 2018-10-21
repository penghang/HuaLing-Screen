import echarts from 'echarts'
// // 引入柱状图
// require('echarts/lib/chart/bar');
// // 引入提示框和标题组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
const page = document.querySelector('#page1')
const doms = {
    num: page.querySelector('.js-agency-num'),
    chart: page.querySelector('.js-agency-chart')
}
const defaults = {
    grid: {
        left: 50,
        right: 20,
        top: 20,
        bottom: 20
    },
    color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#16b1f9' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#00f1ff' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
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
        data: []
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
    series: [
        {
            type: 'bar',
            barWidth: '60%',
            data: [],
            itemStyle: {
                barBorderRadius: [3, 3, 0, 0]
            }
        }
    ]
}
const chart = echarts.init(doms.chart)
chart.setOption(defaults)
const update = function (data) {
    const x = [], y = []
    data.list.forEach(function (row) {
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
    doms.num.innerHTML = data.total
}
export default { update }
