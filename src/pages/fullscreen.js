import echarts from 'echarts'
import { setProvince } from './config'
import { pageTo } from '@/animation'
const IN = 'chart-fullscreen e-prevent fade in'
const OUT = 'chart-fullscreen e-prevent fade out'
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
  //console.log(option.series[0].map==='china')
    create()
    dom.className = IN
    chart.setOption(option, true)
    if(option.series[0].map==='china'){
      chart.on('mapselectchanged', (opt) => {
          dom.className = OUT
          const { name } = opt.batch[0]
          setProvince(name)
          //console.log(pageTo)
          pageTo(3)
      })
    }
}
export default draw
