import tableTpl from './index.html'
import mockData from '../../mockdata/index'
const IN = 'table table-in'
const OUT = 'table table-out'

let dom
let closeDom
let contentDom
let title = ''
let html = ''
let rendered = false
const init=()=>{
  //console.log(mockData)
  document.body.insertAdjacentHTML("beforeend", tableTpl)
}
init()
const create = ()=>{
  html = ''
  if(!rendered){
    dom = document.querySelector('.table')
    closeDom = document.querySelector('.js-table-close')
    contentDom = document.querySelector('.js-table-content')
    contentDom.innerHTML = ''
    dom.className = IN
    document.querySelector('.js-table-header-left-text').innerHTML = title + '数据'
    const showData = mockData[Math.floor(Math.random()*mockData.length)]
    showData.forEach((item)=>{
      html+=`<li><span>${item.text}</span><span>${item.value}</span></li>`
    })
    contentDom.innerHTML = html
    contentDom.scrollTop = 0
    rendered = true
    closeDom.onclick = function(){
      rendered = false
      dom.className = OUT
    }
  }
  
    
}

const draw = (e)=>{
  title = e
  create()
}
console.log('load file table/index.js')
export default draw
