import echarts from 'echarts'
import '@/lib/echarts4/china.correct.js'
import { eConfig } from '../../config'
const { toolbox } = eConfig

let page, mapChart
const colors = ['#184ca9', '#305aa6']
const initMapChart = function () {
    var option = {
        toolbox,
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
                    areaColor: '#020613',
                    borderColor: '#0e1e43',
                    shadowBlur: 10,
                    shadowColor: 'rgba(13, 29, 64, 1)'
                }
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: colors[0]
                }
            },
            large: true,
            silent: true
        }, {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: colors[1]
                }
            },
            large: true,
            silent: true
        }]
    };
    mapChart = echarts.init(page.querySelector(".js-lat-lng-map-chart"))
    mapChart.setOption(option, true);
}

const updateMapChart = ({ online, offline }) => {
    mapChart.setOption({
        series: [
            {
                data: online
            },
            {
                data: offline
            }
        ]
    })
}
const init = function () {
    page = document.getElementById('page2')
    initMapChart()
}
const update = function (data) {
    updateMapChart(data)
}
console.log('load file modules/page2/modules/latLng.js')
export default { init, update }