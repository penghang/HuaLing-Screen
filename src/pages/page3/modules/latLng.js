import echarts from 'echarts'
import '@/lib/echarts4/china.correct.js'

let page, mapChart

const initMapChart = function () {
    var option = {
        tooltip: {
            trigger: 'item'
        },
        geo: {
            top: 0,
            bottom: 0,
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            silent: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#00454d'
                }
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: 'purple'
                }
            }
        }]
    };
    mapChart = echarts.init(page.querySelector(".js-lat-lng-map-chart"))
    mapChart.setOption(option, true);
}

const updateMapChart = function (data) {
    let arr = []
    for (const key in data) {
        arr = arr.concat(data[key])
    }
    mapChart.setOption({
        series: [
            {
                data: arr
            }
        ]
    })
}
const init = function () {
    page = document.getElementById('page3')
    initMapChart()
}
const update = function (data) {
    updateMapChart(data)
}
console.log('load file modules/page3/modules/carLatLng.js')
export default { init, update }