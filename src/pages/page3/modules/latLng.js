import echarts from 'echarts'
import '@/lib/echarts4/province/beijing.js'

let page, mapChart
const provinceName = {
    '北京': 'beijing',
    '天津': 'tianjing',
    '上海': 'shanghai',
    '重庆': 'chongqing',
    '河北': 'hebei',
    '河南': 'henan',
    '云南': 'yunnan',
    '辽宁': 'liaoning',
    '黑龙江': 'heilongjiang',
    '湖南': 'hunan',
    '安徽': 'anhui',
    '山东': 'shandong',
    '新疆': 'xinjiang',
    '江苏': 'jiangsu',
    '浙江': 'zhejiang',
    '江西': 'jiangxi',
    '湖北': 'hubei',
    '广西': 'guangxi',
    '甘肃': 'gansu',
    '山西': 'shanxi',
    '内蒙古': 'neimenggu',
    '陕西': 'shanxi1',
    '吉林': 'jilin',
    '福建': 'fujian',
    '贵州': 'guizhou',
    '广东': 'guangdong',
    '青海': 'qinghai',
    '西藏': 'xizang',
    '四川': 'sichuan',
    '宁夏': 'ningxia',
    '海南': 'hainan',
    '台湾': 'taiwan',
    '香港': 'xianggang',
    '澳门': 'aomen'
};
const initMapChart = function () {
    var option = {
        tooltip: {
            trigger: 'item'
        },
        geo: {
            top: 0,
            bottom: 0,
            map: '北京',
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
    mapChart = echarts.init(page.querySelector(".js-lat-lng-province-chart"))
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
    // updateMapChart(data)
}
console.log('load file modules/page3/modules/latLng.js')
export default { init, update }