import echarts from 'echarts'
// import '@/lib/echarts4/province/beijing.js'
import { eConfig, currentProvince } from '../../config'
const { toolbox } = eConfig
let page, mapChart, title, carnum
const colors = ['#184ca9', '#305aa6']
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
// console.log(provinceName[getProvince()])
const getConfig = function (map, data1, data2) {
    return {
        toolbox,
        tooltip: {
            trigger: 'item'
        },
        geo: {
            // top: 100,
            // left: 20,
            // right: 20,
            map,
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
            data: data1,
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: colors[0]
                }
            }
        }, {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: data2,
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: colors[1]
                }
            }
        }]
    }
}

const init = function () {
    page = document.getElementById('page3')
    title = page.querySelector('.js-province-title')
    carnum = page.querySelector('.js-carnum')
}
const getProvince = () => {
    return currentProvince
}
const update = ({ online, offline }) => {
    const province = getProvince()
    title.innerHTML = `${province}散点图`
    import(`@/lib/echarts4/province/${provinceName[province]}.js`)
    .then(() => {
        const option = getConfig(province, online, offline)
        if (!mapChart) {
            mapChart = echarts.init(page.querySelector(".js-lat-lng-province-chart"))
        }
        mapChart.setOption(option, true)
    })
}
console.log('load file modules/page3/modules/latLng.js')
export default { init, update }