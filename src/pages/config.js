import fullscreen from './fullscreen'
const eConfig = {
    toolbox: {
        right: 30,
        feature: {
            /**
             * 自定义按钮,按钮名称必须以my开头,
             * 全屏展示
             */
            myToolFullscreen: {
                show: true,
                title: '全屏展示',
                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                onclick: function ({option}) {
                    const {
                        color,
                        grid,
                        legend,
                        series,
                        tooltip,
                        visualMap,
                        xAxis,
                        yAxis,
                        geo
                    } = option
                    fullscreen({
                        color,
                        grid,
                        legend,
                        series,
                        tooltip,
                        visualMap,
                        xAxis,
                        yAxis,
                        geo
                    })
                }
            }
        }
    },
    tooltip:{},
    grid1: {
        left: 50,
        right: 20,
        top: 20,
        bottom: 20
    },
    grid2: {
        left: 80,
        right: 80,
        top: 50,
        bottom: 20
    },
    grid: {
        left: 80,
        rigth: 20,
        top: 20,
        bottom: 20
    },
    // 第一页使用
    xAxis1: {
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
    yAxis1: {
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
    // 第四页和第五页使用
    xAxis2: {
        type: 'category',
        axisTick: {
            color: '#0d2542',
            inside: true
        },
        axisLabel: {
            color: '#bccecf'
        },
        axisLine: {
            lineStyle: {
                color: "#071327"
            }
        },
        data: []
    },
    yAxis2: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#bccecf'
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: ['#08162c']
            }
        },
        nameTextStyle: {
            color: '#bccecf'
        }
    },
    // 第二页和第三页使用
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#c2d5d6'
        },
        axisLine: {
            lineStyle: {
                color: "#153a63"
            }
        },
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#c2d5d6'
        },
        axisLine: {
            lineStyle: {
                color: "#153a63"
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#08152a'],
                type: 'dashed'
            }
        }
    }
}
/**
 * 偏绿色的渐变
 */
const color1 = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#20cb98' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#0bb1c7' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
/**
 * 偏蓝色的渐变
 */
const color2 = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#00dcfb' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#1ff9c2' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}

const createLineargradientColor = function(start, stop) {
    return {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: start
        }, {
            offset: 1,
                color: stop
        }],
        globalCoord: false // 缺省为 false
    }
}
// 应用于多色柱状图
const barColors = [
    createLineargradientColor('#20cb98', '#0bb1c7'),
    createLineargradientColor('#3f44a7', '#20278d'),
    createLineargradientColor('#39a3bd', '#07728c'),
    createLineargradientColor('#b79a50', '#6c5721'),
    createLineargradientColor('#2067e4', '#6398e8'),
    createLineargradientColor('#20cb98', '#0bb1c7'),
    createLineargradientColor('#595fe3', '#b772ca'),
    createLineargradientColor('#d59a4d', '#df704f'),
    createLineargradientColor('#32a3e4', '#3077d0'),
    createLineargradientColor('#20cb98', '#9be59d'),
    createLineargradientColor('#30badb', '#0ba2c6'),
    createLineargradientColor('#595fe3', '#4069da')
]
// 用于3条折线图
const lineColors = ['#00bfa9', '#3036bd', '#b3ba4a']
// 用于折线/柱状混合图
const mixColors = ['#00d2b9', '#472a94', '#104f94', '#b0b64e', '#353bd0', '#107fbb', '#a567d9']

// 省份
let currentProvince = '北京'
const setProvince = name => {
    currentProvince = name
}
export { 
    eConfig, 
    color1, 
    color2, 
    createLineargradientColor, 
    barColors, 
    lineColors, 
    mixColors, 
    currentProvince,
    setProvince
}
