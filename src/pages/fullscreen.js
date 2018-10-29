import echarts from 'echarts'
const IN = 'chart-fullscreen fade in'
const OUT = 'chart-fullscreen fade out'
let rendered = false
let dom
let chart
const create = function() {
    if (!rendered) {
        dom = document.createElement('div')
        dom.className = IN
        const chartDiv = document.createElement('div')
        chartDiv.className = 'chart'
        dom.appendChild(chartDiv)
        const close = document.createElement('a')
        close.className = 'close'
        close.title = '关闭'
        dom.appendChild(close)
        document.body.appendChild(dom)
        chart = echarts.init(chartDiv)
        rendered = true

        close.onclick = () => {
            dom.className = OUT
        }
    }
}
const draw = function(option){
    create()
    dom.className = IN
    chart.setOption(option, true)
}
export default draw
